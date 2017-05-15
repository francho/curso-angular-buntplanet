import FakePromise from './FakePromise';

describe('Las falsas promesas síncronas', function () {
  it("permiten obtener el valor que contienen", function () {
    FakePromise.resolved(42).get().should.equal(42);
  });

  it("permiten ejecutar then(onFulfilled, onRejected) según la definición del standard", function () {
    FakePromise.resolved(42).then((n) => n + n).get().should.equal(84);
  });

  it("aplanan un then() que devuelve una nueva promesa", function () {
    const result = FakePromise.resolved(42).then((n) => FakePromise.resolved(n + n)).get();
    result.should.equal(84);
  });
});