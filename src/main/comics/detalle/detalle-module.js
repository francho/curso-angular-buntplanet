import angular from "angular";
import uiRouter from "angular-ui-router";
import material from "angular-material";
import detalleComponent from './detalle-component';

export default angular
    .module('curso.comics.detalle', [uiRouter, material])

    .component('detalleComic', detalleComponent)

    .config(['$stateProvider', $stateProvider => $stateProvider.state('curso.comics.detalle', {
      url: '/detalle/:id',
      component: 'detalleComic'
    })])

    .name;
