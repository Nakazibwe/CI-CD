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
                echo "Running project tests"
                // sh 'npm test'
            }
        }
        stage('Run') { 
            steps {
                // 
                echo "Running project"
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
