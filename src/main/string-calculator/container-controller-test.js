import {ContainerController} from "./container-component";

const entry = {input: "1,2", result: 3};

describe("El controlador del componente de Container de Calculadora", () => {
  it("Acumula nuevas operaciones", () => {
    const $ctrl = new ContainerController();

    $ctrl.logEntry(entry.input, entry.result);

    $ctrl.entries.should.deepEqual([entry]);
  });
});