import ListadoController from "./listado-controller";
import {buildComic, noOp} from "../comics-test-utils";

describe("El controlador del componente de Listado de comics", () => {
  it("inicializa su estado pidiendo la primera pagina de comics", () => {
    const comicsStub = [buildComic(), buildComic()];
    const doQuerySpy = QuerySpy.sync();
    doQuerySpy.addOutputStub("/comics", comicsStub);
    const $ctrl = new ListadoController(doQuerySpy.getDoQuery(), noOp, {});
    $ctrl.$onInit();

    $ctrl.getComics().should.deepEqual(comicsStub);
    doQuerySpy.lastQuery.params._page.should.equal(1);
    doQuerySpy.lastQuery.params._limit.should.equal(24);
  });

  it("valida el esquema de datos de la respuesta del servidor", () => {
    const doQuerySpy = QuerySpy.sync();
    doQuerySpy.addOutputStub("/comics", [{id: 1}]);
    const $ctrl = new ListadoController(doQuerySpy.getDoQuery(), noOp, {});
    (() => $ctrl.$onInit()).should.throw(/description.*required.*true/)
  });

  it("navega al detalle de un comic", () => {
    const comic = buildComic();
    const navigateToSpy = sinon.spy();
    const $ctrl = new ListadoController(null, navigateToSpy, {});
    $ctrl.goToDetail(comic);

    navigateToSpy.firstCall.args.should.deepEqual([
      "curso.comics.detalle",
      {id: comic.id}
    ]);
  });
});