import assert from 'assert';
import Action from './Action';

describe('Action', function () {
  it('diferencia entre dos acciones diferentes', function() {
    let action1 = new Action('url', 'name', {payload: []}),
        action2 = new Action('ur2l', 'name', {payload: []});

    assert(!action1.equals(action2));
  });

  it('diferencia entre dos acciones iguales', function() {
    let action1 = new Action('url', 'name', {payload: []}),
        action2 = new Action('url', 'name', {payload: []});

    assert(action1.equals(action2));
  });
});