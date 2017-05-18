import "should";
import CalculatorPanelController from "./calculator-panel-controller"

class dummyRootScope {
  constructor() {
    this.callbacks = [];
  }

  $on(event, callback) {
    this.callbacks.push({event: event, callback: callback})
  }

  $broadcast(event, params) {
    for (let listener of this.callbacks) {
      if (listener.event === event) {
        listener.callback(event, params);
      }
    }
  }
}

describe('CalculatorPanelController', () => {
  it('calculate updates the result using string calculator', () => {
    const dummyOperation = '1,3';
    const expectedResult = 4;

    const stringCalculator = sinon.stub();
    stringCalculator.withArgs(dummyOperation).returns(expectedResult);

    const emptyRootScope = new dummyRootScope();

    const $ctrl = new CalculatorPanelController(emptyRootScope);

    $ctrl.onCalculate = function() {
    };

    $ctrl.operation = dummyOperation;
    $ctrl.calculate();
    $ctrl.result.should.equal(expectedResult);
  });

  it('loads operation and result from event', () => {
    const expectedOperation = {operation: '5,6', result: '11'};
    const fakeRootScope = new dummyRootScope();
    const $ctrl = new CalculatorPanelController(fakeRootScope);

    fakeRootScope.$broadcast('load-operation', expectedOperation);

    $ctrl.operation.should.deepEqual(expectedOperation.operation);
    $ctrl.result.should.deepEqual(expectedOperation.result);
  });
});
