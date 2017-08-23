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
        sh 'rm -rf /var/mehapi/*'
        sh 'cp -R ./* /var/mehapi'
      }
    }
    stage('Run') {
      steps {
        sh 'tsc && node index.js'
      }
    }
  }
}