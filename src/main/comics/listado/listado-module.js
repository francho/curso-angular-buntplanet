import angular from "angular";
import uiRouter from "angular-ui-router";
import material from "angular-material";
import listadoComponent from './listado-component'

export default angular
    .module('curso.comics.listado', [uiRouter, material])

    .component('listadoComics', listadoComponent)

    .config(['$stateProvider', $stateProvider => $stateProvider.state('curso.comics.listado', {
      url: '/listado?page',
      component: 'listadoComics'
    })])

    .name;
