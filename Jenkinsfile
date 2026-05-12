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

        stage('Deploy To TN-gov Server') {
            steps {
                sh '''
                ssh ubuntu@13.51.162.22 "
                    rm -rf ~/tn-gov-ai
                "

                scp -r * ubuntu@13.51.162.22:~/tn-gov-ai

                ssh ubuntu@13.51.162.22 "
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
                '''
            }
        }
    }
}
