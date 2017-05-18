import {LogController} from './log-component';
import {CalculatorController} from './calculator-component';

const fakeRootScope = {
  callbacks: {},
  $on(event, callback) {
    this.callbacks[event] = callback;
  },
  $broadcast(event, data) {
    this.callbacks[event](event, data);
  }
};

const entry = {
  input: "1,2",
  result: 3
};

describe("El log y la calculadora colaboran", () => {
  it("cuando el log lanza load-entry, la calculadora cambia su estado", ()=> {
    const log = new LogController(fakeRootScope);
    const calculadora = new CalculatorController(fakeRootScope);
    calculadora.$onInit();

    log.load(entry);

    calculadora.input.should.equal(entry.input);
    calculadora.result.should.equal(entry.result);
  });
});


