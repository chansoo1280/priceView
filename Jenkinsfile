pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                withAWS(credentials: 'aws-chansoo1280', region: 'ap-northeast-2') {
                    sh 'echo "hello Jenkins"'
                    
                    sh(script: 'aws ecr get-login-password --region ap-northeast-2 | docker login --username AWS --password-stdin 633540653248.dkr.ecr.ap-northeast-2.amazonaws.com')
                }
            }
            steps {
                sh 'dir'
            }
        }
    }
}