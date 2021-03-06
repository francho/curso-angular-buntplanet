export default class ListadoController {
  constructor($http, navigateTo) {
    this.$http = $http;
    this.navigateTo = navigateTo;
  }

  goToDetail(comic) {
    this.navigateTo('curso.comics.detalle',comic);
  }

  $onInit() {
    this.$http.get('http://localhost:3000/comics').then(comics => {
      this.comics = comics.data;
    });
  }
}

ListadoController.$inject = ['$http', 'navigateTo'];
