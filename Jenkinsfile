node {
    stage 'Pull'
    sh 'dir'
    git url: 'https://github.com/chansoo1280/priceView.git', credentialsId: 'git-chansoo1280'

    stage 'init'
    withAWS(credentials: 'aws-chansoo1280', region: 'ap-northeast-2') {
        
        sh(script: 'aws ecr get-login-password --region ap-northeast-2 | docker login --username AWS --password-stdin 633540653248.dkr.ecr.ap-northeast-2.amazonaws.com')
        sh 'chown -R 655 ./'
        sh 'docker build --no-cache -t price-view ./backend'
        sh 'docker tag price-view:latest 633540653248.dkr.ecr.ap-northeast-2.amazonaws.com/price-view:latest'
        sh 'docker push 633540653248.dkr.ecr.ap-northeast-2.amazonaws.com/price-view:latest'
        sh 'docker build --no-cache -t price-view-fe ./frontend'
        sh 'docker tag price-view-fe:latest 633540653248.dkr.ecr.ap-northeast-2.amazonaws.com/price-view-fe:latest'
        sh 'docker push 633540653248.dkr.ecr.ap-northeast-2.amazonaws.com/price-view-fe:latest'
        sh 'docker ps'
        sh '''#!/bin/bash

            cd /root
            docker-compose pull
            docker-compose up --force-recreate --build -d
            docker image prune -f
        '''
    }
}