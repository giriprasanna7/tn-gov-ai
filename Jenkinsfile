pipeline {
    agent any

    environment {
        PATH = "/usr/bin:/usr/local/bin:${env.PATH}"
    }

    stages {

        stage('Install Frontend') {
            steps {
                sh '''
                echo "Installing frontend..."
                cd frontend
                npm install
                CI=false npm run build
                '''
            }
        }

        stage('Install Backend') {
            steps {
                sh '''
                echo "Installing backend..."
                cd backend
                npm install
                '''
            }
        }

        stage('Start Backend') {
            steps {
                sh '''
                echo "Starting backend..."

                pm2 delete tnapp || true

                cd backend

                pm2 start server.js --name tnapp

                pm2 save
                '''
            }
        }

    }
}
