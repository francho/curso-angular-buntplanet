import angular from "angular";
import material from "angular-material";


import calculatorContainer from './calculator-container-component'

import logPanel from '../log-panel/log-panel-module'
import calculatorPanel from '../calculator-panel/calculator-panel-module'

export default angular
    .module('curso.string-calculator.calculator-container', [material, logPanel, calculatorPanel])

    .component('calculatorContainer', calculatorContainer)

    .name;
