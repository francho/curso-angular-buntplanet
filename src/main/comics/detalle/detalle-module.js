import angular from "angular";
import uiRouter from "angular-ui-router";
import material from "angular-material";

export default angular
    .module('curso.comics.detalle', [uiRouter, material])

    .config(['$stateProvider', $stateProvider => $stateProvider.state('curso.comics.detalle', {
      url: '/detalle/:id',
      template: '<h1>Detalle de comic</h1>'
    })])
    .name;
