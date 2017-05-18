export default class FaleRootScope {
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
};

