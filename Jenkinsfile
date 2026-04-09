pipeline {
    agent any

    stages {

        stage('Clone Code') {
            steps {
                echo "Code already available in Jenkins workspace"
            }
        }

        stage('Install Frontend') {
            steps {
                sh '''
                cd frontend
                npm install
                npm run build
                '''
            }
        }

        stage('Install Backend') {
            steps {
                sh '''
                cd backend
                npm install
                '''
            }
        }

        stage('Start Backend') {
            steps {
                sh '''
                pm2 stop app || true
                pm2 start backend/app.js --name app
                '''
            }
        }
    }
}
