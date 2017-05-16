import angular from "angular";
import uiRouter from "angular-ui-router";
import material from "angular-material";

export default angular
    .module('curso.string-calculator', [
      uiRouter,
      material
    ])

    .config(['$stateProvider', $stateProvider => $stateProvider.state('curso.string-calculator', {
      url: '/string-calculator',
      template: '<h1>String calculator!!!</h1>'
    })])

    .name;
