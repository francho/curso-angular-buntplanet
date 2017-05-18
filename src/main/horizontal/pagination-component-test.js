import PaginationController from "./pagination-component-controller";
import {noOp} from "../comics/comics-test-utils";

describe("El controlador del componente de Paginación", () => {
  describe("Sabe cambiar de página", () => {
    let $ctrl;

    beforeEach(() => {
      $ctrl = new PaginationController();
      $ctrl.onChange = noOp;
      $ctrl.lastPage = 10;
    });

    it("Empieza por la página 1 por defecto", () => {
      $ctrl.$onInit();
      $ctrl.page.should.equal(1);
    });

    it("Se le puede indicar otra página inicial", () => {
      $ctrl.initPage = 33;
      $ctrl.$onInit();
      $ctrl.page.should.equal(33);
    });

    it("Sabe cambiar a la primera página", () => {
      $ctrl.initPage = 2;
      $ctrl.$onInit();
      $ctrl.first();
      $ctrl.page.should.equal(1);
    });

    it("Sabe si está en la primera página", () => {
      $ctrl.$onInit();
      $ctrl.first();
      $ctrl.isFirst().should.be.true();
    });

    it("Sabe cambiar a la página anterior", () => {
      $ctrl.initPage = 3;
      $ctrl.$onInit();
      $ctrl.prev();
      $ctrl.page.should.equal(2);
    });

    it("Sabe cambiar a la página siguiente", () => {
      $ctrl.$onInit();
      $ctrl.next();
      $ctrl.page.should.equal(2);
    });

    it("Sabe cambiar a la última página", () => {
      $ctrl.$onInit();
      $ctrl.last();
      $ctrl.page.should.equal(10);
    });

    it("Sabe si está en la última página", () => {
      $ctrl.$onInit();
      $ctrl.last();
      $ctrl.isLast().should.be.true();
    });

    it("No cambia a una página anterior a la primera", () => {
      $ctrl.$onInit();
      $ctrl.first();
      $ctrl.prev();
      $ctrl.page.should.equal(1);
    });

    it("No cambia a una página posterior a la última", () => {
      $ctrl.$onInit();
      $ctrl.last();
      $ctrl.next();
      $ctrl.page.should.equal(10);
    });
  });

  it("Cuando cambia de página avisa con el callback de onChange", () => {
    const onChangeSpy = sinon.spy();
    const $ctrl = new PaginationController();
    $ctrl.onChange = onChangeSpy;
    $ctrl.lastPage = 10;
    $ctrl.$onInit();
    $ctrl.next();

    onChangeSpy.firstCall.args.should.deepEqual([
      {page: 2}
    ]);
  })
});