export default class FakePromise {
  constructor(data, error) {
    this.data = data;
    this.error = error;
  }

  static resolved(data) {
    return new FakePromise(data, null);
  }

  static rejected(error) {
    return new FakePromise(null, error);
  }

  then(onFullfilled, onRejected) {
    const data = onFullfilled.call(onFullfilled, this.data);
    return data instanceof FakePromise ? data : new FakePromise(data, null);
  }

  get() {
    return this.data;
  }
};