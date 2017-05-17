import angular from "angular";
import uiRouter from "angular-ui-router";
import material from "angular-material";

class CocoteroController {
  constructor($http/* inyectar aquí una factoria de app.js */) {
    this.comics = [];
    $http.get("http://localhost:3000/comics?_limit=3")
        .then(response => {
          this.comics = response.data;
        })
  }

  goToDetail(comic) {
    // usar la nueva dependencia para navegar a /comics/detalle/xxx
  }
}

CocoteroController.$inject = ['$http'];

export default angular
    .module('curso.comics.listado', [uiRouter, material])

    .component('listadoComics', {
      template: `
        <ul>
          <li ng-repeat="comic in $ctrl.comics"
          ng-click="$ctrl.goToDetail(comic)">{{comic.title}}</li>
        </ul>
      `,
      controller: CocoteroController,
    })

    .config(['$stateProvider', $stateProvider => $stateProvider.state('curso.comics.listado', {
      url: '/listado',
      template: `
        <h1>Listado de comics</h1>
        <listado-comics></listado-comics>
      `
    })])

    .name;
