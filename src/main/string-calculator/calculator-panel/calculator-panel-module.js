import angular from "angular";
import uiRouter from "angular-ui-router";
import material from "angular-material";
import calculatorPanelComponent from './calculator-panel-component';

export default angular
    .module('curso.string-calculator.calculator-pane', [uiRouter, material])

    .component('calculatorPanel', calculatorPanelComponent)

    .name;
