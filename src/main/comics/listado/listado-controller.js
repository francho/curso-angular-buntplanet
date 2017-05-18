import Query from "../../horizontal/query";
import validator from "../../horizontal/validator";
import comicsSchema from "../comics-schema";

export default class ListadoController {
  constructor(doQuery, navigateTo) {
    this.doQuery = doQuery;
    this.navigateTo = navigateTo;
    this.comics = [];
  }

  $onInit() {
    this.doQuery(new Query("/comics", {_page: 1, _limit: 24}, null))
        .then(validator(comicsSchema))
        .then(json => this.comics = json);
  }

  getComics() {
    return this.comics;
  }

  goToDetail(comic) {
    this.navigateTo('curso.comics.detalle', {id: comic.id});
  }
}

ListadoController.$inject = ['doQuery', 'navigateTo'];