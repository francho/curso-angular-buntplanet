export default class ListadoController {
  constructor($http) {
    this.$http = $http;
  }

  $onInit() {
    this.$http.get('http://localhost:3000/comics').then(comics => {
      this.comics = comics.data;
    });
  }
}

ListadoController.$inject = ['$http'];
