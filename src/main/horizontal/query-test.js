import assert from 'assert';
import sinon from 'sinon';
import Query from './query';

describe('Query', function () {
  it('diferencia entre dos queries diferentes', function() {
    let query1 = Query.withoutParams('url'),
        query2 = Query.withoutParams('url/fake');

    assert(!query1.equals(query2));
  });

  it('diferencia entre dos queries iguales', function() {
    let query1 = Query.withoutParams('url'),
        query2 = Query.withoutParams('url');

    assert(query1.equals(query2));
  });

  it('el method es GET para una query por defecto', function() {
    let query = Query.withoutParams('url');

    assert.equal(query.method, 'GET');
  });

  it('el method es POST para una query', function() {
    let query = Query.post('url');

    assert.equal(query.method, 'POST');
  });

  it('query tiene mapeador', function() {
    const mapper = sinon.spy();
    let query = Query.withoutParams('url', mapper);

    assert.equal(query.mapper, mapper);
  });
});