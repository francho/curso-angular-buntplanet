import angular from 'angular';
import logger from './logger-console-only';

const loggingModule = angular
    .module('curso.logging', [])
    .factory('$exceptionHandler', () => logger);

export default loggingModule.name;