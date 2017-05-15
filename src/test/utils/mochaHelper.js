// Exponer Should en el objeto global para que estas expresiones funcionen:
//   Should.not.exist(spy.callArgs.search);
import Should from 'should';
global.Should = Should;

import ActionSpy from './ActionSpy';
global.ActionSpy = ActionSpy;

import QuerySpy from './QuerySpy';
global.QuerySpy = QuerySpy;