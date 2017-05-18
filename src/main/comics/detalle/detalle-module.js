import angular from "angular";
import uiRouter from "angular-ui-router";
import material from "angular-material";
import DetalleComponent from "./detalle-component"

export default angular
  .module('curso.comics.detalle', [uiRouter, material])

  .component('detalleComponent', DetalleComponent)
  .config(['$stateProvider', $stateProvider => $stateProvider.state('curso.comics.detalle', {
    url: '/detalle/:id',
    component: 'detalleComponent'
  })])

  .name;
