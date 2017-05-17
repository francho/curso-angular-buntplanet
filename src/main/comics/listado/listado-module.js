import angular from "angular";
import uiRouter from "angular-ui-router";
import material from "angular-material";
import ListadoComponent from "./listado-component";

export default angular
  .module('curso.comics.listado', [uiRouter, material])

  .component('listadoComics', ListadoComponent)

  .config(['$stateProvider', $stateProvider => $stateProvider.state('curso.comics.listado', {
    url: '/listado',
    component: 'listadoComics'
  })])

  .name;
