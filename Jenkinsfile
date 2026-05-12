pipeline {
    agent any

    stages {

        stage('Install Frontend') {
            steps {
                sh '''
                echo Installing frontend...
                cd frontend
                npm install
                CI=false npm run build
                '''
            }
        }

        stage('Install Backend') {
            steps {
                sh '''
                echo Installing backend...
                cd backend
                npm install
                '''
            }
        }

        stage('Start Backend') {
            steps {
                sh '''
                echo Starting backend...

                /usr/bin/pm2 delete tnapp || true

                cd backend

                /usr/bin/pm2 start server.js --name tnapp
                '''
            }
        }
    }
}
