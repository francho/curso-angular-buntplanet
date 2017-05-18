import angular from "angular";
import uiRouter from "angular-ui-router";
import material from "angular-material";
import calculatorPanel from "./calculator-panel/calculator-panel-module";

export default angular
    .module('curso.string-calculator', [
      uiRouter,
      material,
      calculatorPanel
    ])

    .config(['$stateProvider', $stateProvider => $stateProvider.state('curso.string-calculator', {
      url: '/string-calculator',
      template: '<h1>String calculatorPanel!!!</h1><calculator-panel></calculator-panel>'
    })])

    .name;
