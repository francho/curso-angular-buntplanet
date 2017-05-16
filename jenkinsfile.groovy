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
            test: {
              sh "${yarn()} test:report"
              step([$class        : 'XUnitBuilder',
                    testTimeMargin: '3000',
                    thresholdMode : 1,
                    thresholds    : [[$class              : 'FailedThreshold',
                                      failureNewThreshold : '',
                                      failureThreshold    : '',
                                      unstableNewThreshold: '',
                                      unstableThreshold   : ''],
                                     [$class              : 'SkippedThreshold',
                                      failureNewThreshold : '',
                                      failureThreshold    : '',
                                      unstableNewThreshold: '',
                                      unstableThreshold   : '']],
                    tools         : [[$class               : 'JUnitType',
                                      deleteOutputFiles    : true,
                                      failIfNotNew         : true,
                                      pattern              : 'test_results.xml',
                                      skipNoTestFiles      : false,
                                      stopProcessingIfError: true
                                     ]]
              ])
            },
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