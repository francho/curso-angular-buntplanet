import Q from "q";
import Query from "../../main/horizontal/query";
import FakePromise from "./fake-promise";

class QuerySpy {
  constructor(promisesAdapter, doneCallback) {
    this.hasBeenCalled = false;
    this.queries = [];
    this.lastQuery = Query.empty();
    this.outputStubs = {};
    this.promisesAdapter = promisesAdapter;
    this.doneCallback = doneCallback;
  }

  reset() {
    this.hasBeenCalled = false;
    this.queries = [];
    this.lastQuery = {};
  }

  addOutputStub(url, output) {
    this.outputStubs[url] = output;
  }

  getDoQuery() {
    return (query => {
      this.hasBeenCalled = true;
      this.queries.push(query);
      this.lastQuery = query;
      const output = this.outputStubs[query.url];

      if (!output) {
        console.log("Actual stubs: ");
        console.log(this.outputStubs);
        throw new Error(`No stub defined for query ${query.url}`);
      }

      return this.promisesAdapter.resolved(output);
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
    return new QuerySpy({resolved: Q.when}, doneCallback);
  },
  sync: () => new QuerySpy(FakePromise)
};