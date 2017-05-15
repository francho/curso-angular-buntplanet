def yarn = { -> "${tool 'yarn'}/bin/yarn" }

pipeline {
  agent any
  stages {
    stage("build") {
      steps {
        sh "${yarn()}"
        sh "${yarn()} lint"
        sh "${yarn()} test"
        sh "${yarn()} coverage"
        sh "${yarn()} build"
      }
    }
  }
}