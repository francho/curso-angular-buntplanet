import angular from "angular";
import uiRouter from "angular-ui-router";
import material from "angular-material";
import calculatorPanel from "./calculator-panel/calculator-panel-module";
import logPanel from "./log-panel/log-panel-module";

export default angular
  .module('curso.string-calculator', [
    uiRouter,
    material,
    calculatorPanel,
    logPanel
  ])

  .config(['$stateProvider', $stateProvider => $stateProvider.state('curso.string-calculator', {
    url: '/string-calculator',
    template: `
        <div layout="row">
          <log-panel></log-panel>
          <calculator-panel></calculator-panel>
        </div>
        `
  })])

  .name;
