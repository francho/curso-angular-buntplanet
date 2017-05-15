import angular from "angular";
import uiRouter from "angular-ui-router";
import {DashboardComponent} from "./DashboardComponent";

const dashboardModule = angular.module('dashboard', [uiRouter])
    .component('dashboardComponent', DashboardComponent)
    .config(['$stateProvider', $stateProvider => $stateProvider.state('app.dashboard', {
      url: '/dashboard',
      component: 'dashboardComponent'
    })]);

export default dashboardModule.name;