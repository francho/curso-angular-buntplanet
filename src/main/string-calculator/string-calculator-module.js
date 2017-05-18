import angular from "angular";
import uiRouter from "angular-ui-router";
import material from "angular-material";

import scContainerComponent from './container-component'
import scLogComponent from './log-component';
import scCalculatorComponent from './calculator-component';

export default angular
    .module('curso.string-calculator', [
      uiRouter,
      material
    ])

    .component('scContainer', scContainerComponent)
    .component('scLog', scLogComponent)
    .component('scCalculator', scCalculatorComponent)

    .config(['$stateProvider', $stateProvider => $stateProvider.state('curso.string-calculator', {
      url: '/string-calculator',
      component: 'scContainer'
    })])

    .name;
