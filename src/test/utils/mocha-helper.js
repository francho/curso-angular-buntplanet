// Exponer Should en el objeto global para que estas expresiones funcionen:
//   Should.not.exist(spy.callArgs.search);
import Should from 'should';
global.Should = Should;

import sinon from 'sinon';
global.sinon = sinon;

import ActionSpy from './action-spy';
global.ActionSpy = ActionSpy;

import QuerySpy from './query-spy';
global.QuerySpy = QuerySpy;