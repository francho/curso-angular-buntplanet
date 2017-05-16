import angular from "angular";
import uiRouter from "angular-ui-router";
import material from "angular-material";
import listadoModule from "./listado/listado-module";
import detalleModule from "./detalle/detalle-module";

export default angular
    .module('curso.comics', [
      uiRouter,
      material,
      listadoModule,
      detalleModule
    ])

    .config(['$stateProvider', $stateProvider => $stateProvider.state('curso.comics', {
      url: '/comics',
      abstract: true,
      template: '<div ui-view></div>'
    })])

    .name;
