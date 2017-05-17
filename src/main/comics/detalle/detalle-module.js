import angular from "angular";
import uiRouter from "angular-ui-router";
import material from "angular-material";
import DetalleController from "./detalle-controller"

export default angular
  .module('curso.comics.detalle', [uiRouter, material])

  .config(['$stateProvider', $stateProvider => $stateProvider.state('curso.comics.detalle', {
    url: '/detalle/:id',

  })])
  .component({
    templateUrl: './comics/detalle/detalle.html',
    controller: DetalleController,
    controllerAs: '$ctrl'
  })
  .name;
