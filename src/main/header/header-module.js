import angular from "angular";
import uiRouter from "angular-ui-router";
import material from "angular-material";
import HeaderController from "./header-controller";

export default angular
    .module('curso.header', [uiRouter, material])
    .component('header', {
      templateUrl: './header/header.html',
      controller: HeaderController
    })
    .name;
