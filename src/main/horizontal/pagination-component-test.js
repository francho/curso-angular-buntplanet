import PaginationController from "./pagination-component-controller";
import {noOp} from "../comics/comics-test-utils";

describe("El controlador del componente de Paginación", () => {
  it("Empieza por la página 1 por defecto", () => {
    const $ctrl = new PaginationController();
    $ctrl.$onInit();
    $ctrl.page.should.equal(1);
  });

  it("Se le puede indicar otra página inicial", () => {
    const $ctrl = new PaginationController();
    $ctrl.initPage = 33;
    $ctrl.$onInit();
    $ctrl.page.should.equal(33);
  });

  it("Sabe si está en la primera página", () => {
    const $ctrl = new PaginationController();
    $ctrl.$onInit();
    $ctrl.isFirst().should.be.true();
    $ctrl.isFirst().should.be.true();
  });

  it("Sabe cambiar a la primera página", () => {
    const $ctrl = new PaginationController();
    $ctrl.onChange = noOp;
    $ctrl.initPage = 2;
    $ctrl.$onInit();
    $ctrl.first();
    $ctrl.page.should.equal(1);
  });

  it("Sabe cambiar a la página anterior", () => {
    const $ctrl = new PaginationController();
    $ctrl.onChange = noOp;
    $ctrl.initPage = 3;
    $ctrl.$onInit();
    $ctrl.prev();
    $ctrl.page.should.equal(2);
  });

  it("Sabe cambiar a la página siguiente", () => {
    const $ctrl = new PaginationController();
    $ctrl.onChange = noOp;
    $ctrl.lastPage = 10;
    $ctrl.$onInit();
    $ctrl.next();
    $ctrl.page.should.equal(2);
  });

  it("Sabe cambiar a la última página", () => {
    const $ctrl = new PaginationController();
    $ctrl.onChange = noOp;
    $ctrl.lastPage = 10;
    $ctrl.$onInit();
    $ctrl.last();
    $ctrl.page.should.equal(10);
  });

  it("No cambia a una página anterior a la primera", () => {
    const $ctrl = new PaginationController();
    $ctrl.onChange = noOp;
    $ctrl.$onInit();
    $ctrl.prev();
    $ctrl.page.should.equal(1);
  });

  it("No cambia a una página posterior a la última", () => {
    const $ctrl = new PaginationController();
    $ctrl.onChange = noOp;
    $ctrl.lastPage = 10;
    $ctrl.initPage = 10;
    $ctrl.$onInit();
    $ctrl.next();
    $ctrl.page.should.equal(10);
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