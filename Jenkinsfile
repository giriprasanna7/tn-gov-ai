stage('Deploy To Hosting Server') {
    steps {
        sh '''
        ssh ubuntu@16.171.67.178 "
            rm -rf ~/tn-gov-ai
        "

        scp -r * ubuntu@16.171.67.178:~/tn-gov-ai

        ssh ubuntu@16.171.67.178 "
            curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
            sudo apt install -y nodejs git
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
        '''
    }
}
