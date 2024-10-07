pipeline {
  
  agent any

  node {
    stage('Install Node.js') {
        tool name: 'NodeJS', type: 'NodeJSInstallation'
    }
    stage('Install Dependencies') {
        sh 'npm install'
    }
  }

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