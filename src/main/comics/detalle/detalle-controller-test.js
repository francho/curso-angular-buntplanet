import Query from "../../horizontal/query";
import DetalleController from "./detalle-controller";
import {buildComic, noOp} from "../comics-test-utils";

describe("El controlador del componente de Detalle de un comic", () => {
  it("inicializa su estado pidiendo el comic a partir del id que recibe por params de url", () => {
    const comicStub = buildComic();

    const doQuerySpy = QuerySpy.sync();
    doQuerySpy.addOutputStub(`/comics/${comicStub.id}`, comicStub);

    const $ctrl = new DetalleController(doQuerySpy.getDoQuery(), noOp, noOp, noOp, {id: comicStub.id});
    $ctrl.$onInit();

    $ctrl.getComic().should.deepEqual(comicStub);
  });

  it("se puede editar la descripcion del comic", () => {
    const $ctrl = new DetalleController(noOp, noOp, noOp, noOp, {id: null});

    $ctrl.isEditing().should.be.false();
    $ctrl.isNotEditing().should.be.true();

    $ctrl.edit();

    $ctrl.isEditing().should.be.true();
    $ctrl.isNotEditing().should.be.false();
  });

  describe("puede grabar los cambios a la descripcion del comic", () => {
    let doActionSpy,
        $ctrl,
        simpleToastSpy,
        comic = buildComic();

    beforeEach('Se guarda el comic', ()=> {
      doActionSpy = ActionSpy.sync();
      simpleToastSpy = sinon.spy();
      $ctrl = new DetalleController(noOp, doActionSpy.getDoAction(), noOp, simpleToastSpy, {id: null});
      $ctrl.comic = comic;
      $ctrl.save();
    });

    it("envia al servidor los cambios", () => {
      doActionSpy.lastAction.url.should.equal(`/comics/${comic.id}`);
      doActionSpy.lastAction.method.should.equal('put');
      doActionSpy.lastAction.payload.should.deepEqual(comic);
    });

    it("sale del modo de edicion", () => {
      $ctrl.isEditing().should.be.false();
    });

    it("saca un toast avisando de que ha grabado los cambios", () => {
      simpleToastSpy.firstCall.args.should.deepEqual(["Comic guardado correctamente"]);
    });
  });

  describe("puede borrar el comic", () => {
    let doActionSpy,
        $ctrl,
        simpleToastSpy,
        navigateToSpy,
        comic = buildComic();

    beforeEach('Se guarda el comic', ()=> {
      doActionSpy = ActionSpy.sync();
      simpleToastSpy = sinon.spy();
      navigateToSpy = sinon.spy();
      $ctrl = new DetalleController(noOp, doActionSpy.getDoAction(), navigateToSpy, simpleToastSpy, {id: null});
      $ctrl.comic = comic;
      $ctrl.delete();
    });

    it("envia al servidor la peticion de borrado", () => {
      doActionSpy.lastAction.url.should.equal(`/comics/${comic.id}`);
      doActionSpy.lastAction.method.should.equal('delete');
    });

    it("saca un toast avisando de que ha grabado los cambios", () => {
      simpleToastSpy.firstCall.args.should.deepEqual(["Comic borrado"]);
    });

    it("navega al listado", () => {
      navigateToSpy.firstCall.args.should.deepEqual(["curso.comics.listado"]);
    });
  });

});