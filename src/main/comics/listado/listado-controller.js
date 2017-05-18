import Query from "../../horizontal/query";
import validator from "../../horizontal/validator";
import comicsSchema from "../comics-schema";

export default class ListadoController {
  constructor(doQuery, navigateTo, $stateParams) {
    this.doQuery = doQuery;
    this.navigateTo = navigateTo;
    this.comics = [];
    this.initPage = $stateParams.page || 1;
  }

  $onInit() {
    this.loadPage(this.initPage);
  }

  getComics() {
    return this.comics;
  }

  goToDetail(comic) {
    this.navigateTo('curso.comics.detalle', {id: comic.id});
  }

  loadPage(page) {
    this.doQuery(new Query("/comics", {_page: page, _limit: 24}, null))
        .then(validator(comicsSchema))
        .then(json => this.comics = json);
  }
}

ListadoController.$inject = ['doQuery', 'navigateTo', '$stateParams'];