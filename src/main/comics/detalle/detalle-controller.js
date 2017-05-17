export default class DetalleController {

  constructor($http, $stateParams, $sce) {
    this.$http = $http;
    this.$stateParams = $stateParams;
    this.$sce = $sce;
  }

  delete() {

  }

  $onInit() {
    var comicId = this.$stateParams.id;
    this.$http.get(`http://localhost:3000/comics/${comicId}`).then(response => {
      this.comic = response.data;
      this.comic.descriptionTrustHtml = this.$sce.trustAsHtml(this.comic.description);
    });
  }
}

DetalleController.$inject = ['$http', '$stateParams', '$sce'];
