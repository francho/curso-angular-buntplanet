import Sinon from 'sinon';
import ListadoController from './listado-controller';

const comic = {id: 12345};
describe('el controlador del componente de listado de comics', () => {
  it('navega la detalle de un comic', () => {
    const navigateSpy = Sinon.spy();

    const $ctrl = new ListadoController(null, navigateSpy);
    $ctrl.goToDetail(comic);

    navigateSpy.firstCall.args.should.deepEqual(['curso.comics.detalle', comic])
  })
});
