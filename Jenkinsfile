pipeline{  
    environment {
        registry = "lenmorld/node-helloworld"
        registryCredential = 'dockerhub'
        dockerImage = ''
    }

    agent {
        docker { image 'node:16.13.1-alpine' }
    }

    tools {nodejs "node"}

    stages {
        stage('Build') {
            steps {
                dir("app") {
                    sh "pwd"
                    sh 'ls'
                    sh 'echo test 2'
                    sh 'npm install'
                }
            }   
        }
        stage('Building image') {
            steps{
                script {
                        dockerImage = docker.build registry + ":latest"
                    }
                }
            }
            stage('Push Image') {
                steps {
                    script {
                            docker.withRegistry( '', registryCredential) {                            
                            dockerImage.push()
                        }
                    }
                } 
            }
            stage('Deploying into k8s'){
                steps{
                    sh 'kubectl apply -f webapp-deployment.yaml' 
                }
        }
    }
}
