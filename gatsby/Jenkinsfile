pipeline {
  agent {
    docker {
      image 'node:12'
    }
  }

  options {
    timeout(time: 20, unit: 'MINUTES')
    ansiColor('xterm')
  }

  stages {
    stage('Install') {
      steps {
        sh 'npm ci'
      }
    }

    stage('Build') {
      steps {
        sh 'npm run clean'
        sh 'npm run build:pp'
        sh 'test -e public/index.html || exit 1'
      }
    }

    /*
    stage('Test') {
      steps {
        sh 'npm run lint:js'
        sh 'npm run test'
      }
    }
    */

    stage('Deploy') {
      when { branch 'master' }
      environment { GITHUB = credentials('github-halkeye') }
      steps {
        sh 'git config --global user.email "jenkins@gavinmogan.com"'
        sh 'git config --global user.name "jenkins.gavinmogan.com"'
        sh "npm run deploy:github -- -r ${env.GIT_URL.replace("https://", "https://${GITHUB_USR}:${GITHUB_PSW}@")}"
      }
    }

  }
}
