import "should";
import CalculatorContainerController from "./calculator-container-controller"


describe('CalculatorContainerController', () => {
  it('is the owner of logEntries', () => {
    const $ctrl = new CalculatorContainerController();
    $ctrl.logEntries.should.Array();
  });

  it('can add an entry to the log', () => {
    const $ctrl = new CalculatorContainerController();

    $ctrl.logEntries = [{operation: 'dumy', result: 0}];

    $ctrl.addEntryLog('3,2', 5);

    $ctrl.logEntries.should.deepEqual([
      {operation: 'dumy', result: 0},
      {operation: '3,2', result: 5}
    ])
  });
});
