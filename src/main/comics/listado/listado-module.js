import angular from "angular";
import uiRouter from "angular-ui-router";
import material from "angular-material";

export default angular
    .module('curso.comics.listado', [uiRouter, material])

    .config(['$stateProvider', $stateProvider => $stateProvider.state('curso.comics.listado', {
      url: '/listado',
      template: '<h1>Listado de comics</h1>'
    })])

    .name;
