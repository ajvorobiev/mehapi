pipeline {
  agent {
    node {
      label 'game'
    }
    
  }
  stages {
    stage('Build') {
      steps {
        sh 'npm install'
        sh 'tsc && npm build'
      }
    }
    stage('Deploy') {
      steps {
        sh 'rm -r /var/mehapi/*'
        sh 'cp ./* /var/mehapi'
      }
    }
    stage('Run') {
      steps {
        sh 'tsc && node index.js'
      }
    }
  }
}