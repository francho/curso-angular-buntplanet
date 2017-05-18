import {CalculatorController} from "./calculator-component";
import {noOp} from "../utils";

const entry = {
  input: "1,2",
  result: 3
};

describe("El controlador del componente de Calculadora", () => {
  describe("Calcula el resultado", () => {

    it("Actualiza el resultado", () => {
      const $ctrl = new CalculatorController(null);
      $ctrl.input = entry.input;
      $ctrl.onCompute = noOp;

      $ctrl.compute();

      $ctrl.result.should.equal(entry.result);
    });

    it("Notifica a terceros el nuevo cálculo", () => {
      const onComputeSpy = sinon.spy();
      const $ctrl = new CalculatorController(null);
      $ctrl.input = entry.input;
      $ctrl.onCompute = onComputeSpy;

      $ctrl.compute();

      onComputeSpy.firstCall.args.should.deepEqual([
        entry
      ]);
    });
  });

  it("actualiza su estado cuando llega un evento de load-entry", () => {
    const fakeRootScope = {
      callbacks: {},
      $on(event, callback) {
        this.callbacks[event] = callback;
      },
      trigger(event, data) {
        this.callbacks[event](event, data);
      }
    };

    const $ctrl = new CalculatorController(fakeRootScope);
    $ctrl.$onInit();

    fakeRootScope.trigger('load-entry', entry);

    $ctrl.input.should.equal(entry.input);
    $ctrl.result.should.equal(entry.result);
  });
});