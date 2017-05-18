import angular from "angular";
import uiRouter from "angular-ui-router";
import material from "angular-material";
import {doAction, doQuery, navigateTo} from "./utils";
import loggingModule from "./logging/logging-module";
import headerModule from "./header/header-module";
import comicsModule from "./comics/comics-module";
import stringCalculatorModule from "./string-calculator/string-calculator-module";
import paginationComponent from "./horizontal/pagination-component";

const simpleToast = $mdToast => text => {
  return $mdToast.show($mdToast.simple().textContent(text));
};

angular
    .module('curso', [
      uiRouter,
      material,
      loggingModule,
      headerModule,
      comicsModule,
      stringCalculatorModule
    ])

    .component('pagination', paginationComponent)

    .factory('doAction', ['$http', doAction])
    .factory('doQuery', ['$http', doQuery])
    .factory('navigateTo', ['$state', navigateTo])
    .factory('simpleToast', ['$mdToast', simpleToast])

    .config(['$mdInkRippleProvider', $mdInkRippleProvider => $mdInkRippleProvider.disableInkRipple()])
    .config(['$mdThemingProvider', $mdThemingProvider => $mdThemingProvider.theme('default').primaryPalette('blue').accentPalette('blue')])
    .config(['$mdAriaProvider', $mdAriaProvider => $mdAriaProvider.disableWarnings()])
    .config(['$mdIconProvider', $mdIconProvider => $mdIconProvider.fontSet('md', 'material-icons')])

    .config(['$stateProvider', $stateProvider => $stateProvider.state('curso', {
      url: '',
      abstract: true,
      template: `
        <header></header>
        <div ui-view></div>
      `
    })])
    .config(['$urlRouterProvider', $urlRouterProvider => $urlRouterProvider.otherwise('/comics/listado')]);

document.addEventListener('DOMContentLoaded', () => angular.bootstrap(document, ['curso']));

