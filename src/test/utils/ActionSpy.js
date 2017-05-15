import Q from "q";
import Action from '../../main/horizontal/Action'
import FakePromise from "./FakePromise";

class ActionSpy {
  constructor(promisesAdapter, doneCallback) {
    this.hasBeenCalled = false;
    this.lastAction = Action.empty();
    this.doneCallback = doneCallback;
    this.promise = promisesAdapter.resolved(this.output);
  }

  reset() {
    this.hasBeenCalled = false;
    this.lastAction = Action.empty();
  }

  getDoAction() {
    return ((action) => {
      this.hasBeenCalled = true;
      this.lastAction = action;
      return this.promise;
    }).bind(this);
  }

  afterCalling(callback) {
    if (!this.doneCallback)
      throw Error("You need to provide the done() callback to use this method");
    this.promise.then(() => {
      try {
        callback();
        this.doneCallback();
      } catch (error) {
        throw this.doneCallback(error);
      }
    });
  }
}

export default {
  async: (doneCallback) => {
    if (!doneCallback || typeof doneCallback !== 'function')
      throw Error("You need to provide the done callback from mocha's it() block");
    return new ActionSpy({resolved: Q.when}, doneCallback);
  },
  sync: () => new ActionSpy(FakePromise)
};