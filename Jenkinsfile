pipeline {
    agent any

    stages {

        stage('Clone Repository') {
            steps {
                git branch: 'main',
                url: 'https://github.com/giriprasanna7/tn-gov-ai.git'
            }
        }

        stage('Build Frontend') {
            steps {
                sh '''
                cd frontend
                npm install
                npm run build
                '''
            }
        }

        stage('Install Backend Packages') {
            steps {
                sh '''
                cd backend
                npm install
                '''
            }
        }

        stage('Deploy To Hosting Server') {
            steps {
                sh '''
                echo "Cleaning unnecessary files..."

                rm -rf frontend/node_modules
                rm -rf backend/node_modules
                rm -rf frontend/build

                echo "Preparing hosting server..."

                ssh -o StrictHostKeyChecking=no ubuntu@16.171.67.178 "
                    rm -rf ~/tn-gov-ai &&
                    mkdir ~/tn-gov-ai
                "

                echo "Copying project files..."

                scp -o StrictHostKeyChecking=no -r \
                Jenkinsfile backend frontend package.json package-lock.json \
                ubuntu@16.171.67.178:~/tn-gov-ai

                echo "Deploying application..."

                ssh -o StrictHostKeyChecking=no ubuntu@16.171.67.178 "

                    sudo apt update

                    if ! command -v node > /dev/null
                    then
                        curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
                        sudo apt install -y nodejs git
                    fi

                    sudo npm install -g pm2 serve

                    cd ~/tn-gov-ai/frontend

                    npm install
                    npm run build

                    pm2 delete frontend || true
                    pm2 serve build 3000 --name frontend --spa

                    cd ~/tn-gov-ai/backend

                    npm install

                    pm2 delete backend || true
                    pm2 start server.js --name backend

                    pm2 save
                "

                echo "Deployment completed successfully!"
                '''
            }
        }
    }
}
