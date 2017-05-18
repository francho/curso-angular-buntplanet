import assert from "assert";
import Query from "./query";

describe('Query', function () {
  it('diferencia entre dos queries diferentes', function () {
    let query1 = Query.withoutParams('url'),
        query2 = Query.withoutParams('url/fake');

    assert(!query1.equals(query2));
  });

  it('diferencia entre dos queries iguales', function () {
    let query1 = Query.withoutParams('url'),
        query2 = Query.withoutParams('url');

    assert(query1.equals(query2));
  });

  it('el method es GET para una query por defecto', function () {
    let query = Query.withoutParams('url');

    assert.equal(query.method);
  });
});