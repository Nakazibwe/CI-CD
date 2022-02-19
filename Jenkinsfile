pipeline {
    agent any 
    tools {nodejs "node"}
    stages {
        stage('Cloning Git') {
            steps {
                //
               git 'https://github.com/Nakazibwe/CI-CD.git'
            }
        }
        
        stage('Build') { 
            steps {
                // 
                echo "Bulding project"
                sh 'npm install'
                
            }
        }
        stage('Test') { 
            steps {
                // 
                // sh 'npm test'
            }
        }
        stage('Run') { 
            steps {
                // 
                sh 'npm start'
            }
        }
        
        stage('Deploy') { 
            steps {
                // 
                echo "Deploying project"
            }
        }
    }
}
