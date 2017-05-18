import "should";
import LogPanelController from "./log-panel-controller"
import FakeRootScope from '../../../test/utils/fake-root-scope'


describe('LogPanelController',()=> {
  it('send load operation broadcast', ()=> {
    const expectedEvent = 'load-operation';
    const expectedArgs = {operation: '1,2', result: 3};
    const fakeRootScope = new FakeRootScope();

    sinon.mock(fakeRootScope).expects("$broadcast").once().withExactArgs(expectedEvent, expectedArgs);

    const $ctrl = new LogPanelController(fakeRootScope);

    $ctrl.loadOperation(expectedArgs);
  });
});
