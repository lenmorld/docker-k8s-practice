pipeline {
    agent {
        /usr/local/bin/docker { image 'node:16.13.1-alpine' }
    }
    stages {
        stage('Test') {
            steps {
                sh 'echo test 3'
                sh 'node --version'
            }
        }
    }
}
