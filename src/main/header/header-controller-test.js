import HeaderController from "./header-controller";

describe("El controlador del componente de Header", () => {
  it("Sabe el índice de la opción de menú de la ruta actual", () => {
    const stateStub = {
      current: {
        name: 'curso.string-calculator'
      }
    };
    const $ctrl = new HeaderController(stateStub);

    $ctrl.selectedMenuOptionIndex.should.equal(1);
  });
});