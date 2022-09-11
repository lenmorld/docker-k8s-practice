pipeline {
    agent {
        docker { image 'node:16.13.1-alpine' }
    }
    stages {
        stage('Pre-reqs') {
            steps {
                sh 'echo test'
                sh 'node --version'
            }
        }
        stage('Build') {
            steps {
                dir("app") {
                    sh "pwd"
                    sh 'ls'
                    sh 'npm install'
                }
            }   
        }
    }
}
