pipeline{  
    environment {
        registry = "lenmorld/node-helloworld"
        registryCredential = 'dockerhub'
        dockerImage = ''
    }

    agent any

    tools {nodejs "node"}

    stages {
        stage('Build') {
            steps {
                script {
                    sh 'cd app/'
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
                steps{
                    script {
                        docker.withRegistry( '', registryCredential){                            
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