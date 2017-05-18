import {LogController} from "./log-component";

const entry = {
  input: "1,2",
  result: 3
};


const spyRootScope = {
  $broadcast: sinon.spy(),
  expectBroadcast(event, data) {
    this.$broadcast.firstCall.args.should.deepEqual([event,data]);
  }
};


describe("El controlador del componente de Log", () => {
  it("Lanza un evento load-entry", () => {
    const $ctrl = new LogController(spyRootScope);
    $ctrl.load(entry);
    spyRootScope.expectBroadcast('load-entry', entry);
  });
});