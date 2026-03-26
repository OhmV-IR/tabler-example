pipeline {
    agent any
    
    tools {
        nodejs 'node24'
    }
    
    environment {
        NODE_ENV = 'production'
    }
    
    stages {
        stage("Checkout") {
            steps {
                checkout scm
            }
        }
        
        stage("deps"){
            steps {
                sh "npm install"
            }
        }
        
        stage("build"){
            steps {
                sh "npm run build"
            }
        }
        
        stage("archive"){
            steps {
                archiveArtifacts artifacts: 'dist/**', fingerprint: true
            }
        }
    }
    
    post {
        success {
            echo "ran successfully"
        }
        failure {
            echo "pipeline fail"
        }
    }
}
