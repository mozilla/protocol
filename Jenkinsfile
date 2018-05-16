#!groovy

def buildSite(destination) {
    stage ('build') {
      try {
        sh "bin/build.sh " + destination
      } catch(err) {
        sh "bin/irc-notify.sh --stage 'build " + env.BRANCH_NAME + "' --status 'failed'"
        throw err
      }
    }
}

def syncS3(String bucket) {
    stage ('s3 sync') {
        try {
          sh "cd dist && aws s3 sync . s3://" + bucket + " --acl public-read --delete --profile protocol"
        } catch(err) {
          sh "bin/irc-notify.sh --stage 's3 sync " + env.BRANCH_NAME + "' --status 'failed'"
          throw err
        }
        sh "bin/irc-notify.sh --stage 's3 sync " + env.BRANCH_NAME + "' --status 'shipped'"
    }
}

node {
    stage ('Prepare') {
      checkout scm
    }
    if ( env.BRANCH_NAME == 'jenkins-s3' ) { // TODO: switch to master branch after test
      buildSite('stage')
      syncS3('mozilla-protocol-stage')
    } else if ( env.BRANCH_NAME == 'prod' ) {
      buildSite('prod')
      syncS3('mozilla-protocol')
    }
}
