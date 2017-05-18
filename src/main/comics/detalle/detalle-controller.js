import Query from "../../horizontal/query";
import Action from "../../horizontal/action";

export default class DetalleController {
  constructor(doQuery, doAction, navigateTo, simpleToast, $stateParams) {
    this.doQuery = doQuery;
    this.doAction = doAction;
    this.navigateTo = navigateTo;
    this.simpleToast = simpleToast;
    this.id = $stateParams.id;
    this.comic = {};
    this.editing = false;
  }

  $onInit() {
    this.doQuery(Query.withoutParams(`/comics/${this.id}`))
        .then(comic => this.comic = comic);
  }

  getComic() {
    return this.comic;
  }

  isEditing() {
    return this.editing;
  }

  isNotEditing() {
    return !this.editing;
  }

  edit() {
    this.editing = true;
  }

  save() {
    this.doAction(Action.update(`/comics/${this.comic.id}`, this.comic))
        .then(result => this.editing = false)
        .then(ignored => this.simpleToast('Comic guardado correctamente'));
  }

  delete() {
    this.doAction(Action.delete(`/comics/${this.comic.id}`))
        .then(ignored => this.simpleToast('Comic borrado'))
        .then(ignored => this.navigateTo('curso.comics.listado'));
  }
}

DetalleController.$inject = ['doQuery', 'doAction', 'navigateTo', 'simpleToast', '$stateParams'];