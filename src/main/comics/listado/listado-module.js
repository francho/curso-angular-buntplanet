import angular from "angular";
import uiRouter from "angular-ui-router";
import material from "angular-material";

class CocoteroController {
  constructor($http) {
    this.cocotero = [];
    $http.get("http://localhost:3000/")
        .then(response => {
          this.cocotero = [1, 2, 3];
        })
  }
}

CocoteroController.$inject = ['$http'];

export default angular
    .module('curso.comics.listado', [uiRouter, material])

    .component('cocotero', {
      template: `
        <p>Cocotero: {{$ctrl.cocotero}}</p>
      `,
      controller: CocoteroController,
    })

    .config(['$stateProvider', $stateProvider => $stateProvider.state('curso.comics.listado', {
      url: '/listado',
      template: `
        <h1>Listado de comics</h1>
        <cocotero></cocotero>
      `
    })])

    .name;
