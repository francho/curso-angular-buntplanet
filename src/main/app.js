import angular from "angular";
import uiRouter from "angular-ui-router";
import material from "angular-material";
import {doAction, doQuery, navigateTo} from "./utils";
import loggingModule from "./logging/logging-module";
import headerModule from "./header/header-module";

angular
    .module('curso', [
      uiRouter,
      material,
      loggingModule,
      headerModule,
    ])
    .factory('doAction', ['$http', doAction])
    .factory('doQuery', ['$http', doQuery])
    .factory('navigateTo', ['$state', navigateTo])

    .config(['$mdInkRippleProvider', $mdInkRippleProvider => $mdInkRippleProvider.disableInkRipple()])
    .config(['$mdThemingProvider', $mdThemingProvider => $mdThemingProvider.theme('default').primaryPalette('blue').accentPalette('blue')])
    .config(['$mdAriaProvider', $mdAriaProvider => $mdAriaProvider.disableWarnings()])

    .config(['$stateProvider', $stateProvider => $stateProvider.state('curso', {
      url: '',
      abstract: true,
      template: `
        <header></header>
        <div ui-view></div>
      `
    })])
    .config(['$urlRouterProvider', $urlRouterProvider => $urlRouterProvider.otherwise('/listado')]);

document.addEventListener('DOMContentLoaded', () => angular.bootstrap(document, ['curso']));
