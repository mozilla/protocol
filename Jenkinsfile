#!groovy

def buildSite(destination) {
    stage ('build') {
      try {
        sh "bin/build.sh " + destination
      } catch(err) {
        sh "bin/slack-notify.sh --stage 'build " + env.BRANCH_NAME + "' --status failure"
        throw err
      }
    }
}

def syncS3(String bucket) {
    stage ('s3 sync') {
        try {
          sh "cd dist && aws s3 sync . s3://" + bucket + " --acl public-read --delete --profile protocol"
        } catch(err) {
          sh "bin/slack-notify.sh --stage 's3 sync " + env.BRANCH_NAME + "' --status failure"
          throw err
        }
        sh "bin/slack-notify.sh --stage 's3 sync " + env.BRANCH_NAME + "' --status shipped"
    }
}

node {
    stage ('Prepare') {
      checkout scm
    }
    if ( env.BRANCH_NAME == 'master' ) {
      buildSite('stage')
      syncS3('mozilla-protocol-stage')
    } else if ( env.BRANCH_NAME == 'prod' ) {
      buildSite('prod')
      syncS3('mozilla-protocol')
    }
}
