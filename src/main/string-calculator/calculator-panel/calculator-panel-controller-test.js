import "should";
import CalculatorPanelController from "./calculator-panel-controller"
import FakeRootScope from '../../../test/utils/fake-root-scope'

describe('CalculatorPanelController', () => {
  it('calculate updates the result using string calculator', () => {
    const dummyOperation = '1,3';
    const expectedResult = 4;

    const stringCalculator = sinon.stub();
    stringCalculator.withArgs(dummyOperation).returns(expectedResult);

    const emptyRootScope = new FakeRootScope();

    const $ctrl = new CalculatorPanelController(emptyRootScope);

    $ctrl.onCalculate = function() {
    };

    $ctrl.operation = dummyOperation;
    $ctrl.calculate();
    $ctrl.result.should.equal(expectedResult);
  });

  it('loads operation and result from event', () => {
    const expectedOperation = {operation: '5,6', result: '11'};
    const fakeRootScope = new FakeRootScope();
    const $ctrl = new CalculatorPanelController(fakeRootScope);

    fakeRootScope.$broadcast('load-operation', expectedOperation);

    $ctrl.operation.should.deepEqual(expectedOperation.operation);
    $ctrl.result.should.deepEqual(expectedOperation.result);
  });
});
