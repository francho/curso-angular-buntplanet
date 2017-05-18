import angular from "angular";
import uiRouter from "angular-ui-router";
import material from "angular-material";

import calculatorContainer from "./calculator-container/calculator-container-module"

export default angular
  .module('curso.string-calculator', [
    uiRouter,
    material,
    calculatorContainer
  ])

  .config(['$stateProvider', $stateProvider => $stateProvider.state('curso.string-calculator', {
    url: '/string-calculator',
    component: 'calculatorContainer'
  })])

  .name;
