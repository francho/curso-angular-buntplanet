def yarn = { -> "${tool 'yarn'}/bin/yarn" }

pipeline {
  agent {
    label 'slave3'
  }
  stages {
    stage("Dependencies") {
      steps {
        sh "${yarn()}"
      }
    }
    stage("Verifications") {
      steps {
        parallel lint: { sh "${yarn()} lint" },
            test: { sh "${yarn()} test" },
            coverage: {
              sh "${yarn()} coverage"
              step([$class             : 'CoberturaPublisher',
                    autoUpdateHealth   : false,
                    autoUpdateStability: false,
                    coberturaReportFile: 'coverage/cobertura-coverage.xml',
                    failUnstable       : false,
                    maxNumberOfBuilds  : 0,
                    zoomCoverageChart  : false
              ])
            }
      }
    }
    stage("Build") {
      steps {
        sh "${yarn()} build"
      }
    }
  }
}