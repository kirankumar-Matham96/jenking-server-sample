pipeline {
  
  agent any

  tools {nodejs "nodejs"}

  stages {
    stage('Install Dependencies') {
      steps {
        sh 'npm install'
      }
    }

    stage('Run Tests') {
      steps {
        sh 'npm test'
      }
    }
  }
}