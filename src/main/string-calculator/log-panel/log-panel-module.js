import angular from "angular";
import uiRouter from "angular-ui-router";
import material from "angular-material";
import logPanelComponent from './log-panel-component';

export default angular
    .module('curso.string-calculator.log-pane', [uiRouter, material])

    .component('logPanel', logPanelComponent)

    .name;
