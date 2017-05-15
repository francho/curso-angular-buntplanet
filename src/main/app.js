import angular from "angular";
import uiRouter from "angular-ui-router";
import material from "angular-material";
import {doAction, doQuery, navigateTo} from "./utils";
import {HeaderComponent} from "./header/HeaderComponent";
import loggingModule from "./logging/LoggingModule";
import dashboardModule from "./dashboard/DashboardModule";

angular
    .module('curso', [
      uiRouter,
      material,
      loggingModule,
      dashboardModule
    ])
    .factory('doAction', ['$http', doAction])
    .factory('doQuery', ['$http', doQuery])
    .factory('navigateTo', ['$state', navigateTo])

    .component('headerComponent', HeaderComponent)

    .config(['$mdInkRippleProvider', $mdInkRippleProvider => $mdInkRippleProvider.disableInkRipple()])
    .config(['$mdThemingProvider', $mdThemingProvider => $mdThemingProvider.theme('default').primaryPalette('blue').accentPalette('blue')])
    .config(['$mdAriaProvider', $mdAriaProvider => $mdAriaProvider.disableWarnings()])

    .config(['$stateProvider', $stateProvider => $stateProvider.state('app', {
      url: '',
      abstract: true,
      component: 'headerComponent'
    })])
    .config(['$urlRouterProvider', $urlRouterProvider => $urlRouterProvider.otherwise('/dashboard')]);

document.addEventListener('DOMContentLoaded', () => angular.bootstrap(document, ['curso']));

