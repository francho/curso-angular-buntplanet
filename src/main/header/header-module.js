import angular from "angular";
import uiRouter from "angular-ui-router";
import material from "angular-material";
import headerComponent from "./header-component";

export default angular
    .module('curso.header', [uiRouter, material])
    .component('header', headerComponent)
    .name;
