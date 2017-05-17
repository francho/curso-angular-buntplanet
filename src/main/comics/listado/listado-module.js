import angular from "angular";
import uiRouter from "angular-ui-router";
import material from "angular-material";
import ListadoController from "./listado-controller";

export default angular
    .module('curso.comics.listado', [uiRouter, material])

    .config(['$stateProvider', $stateProvider => $stateProvider.state('curso.comics.listado', {
      url: '/listado',
      templateUrl: './comics/listado/listado.html',
      controller: ListadoController,
      controllerAs: '$ctrl'
    })])

    .name;
