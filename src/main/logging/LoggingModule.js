import angular from 'angular';
import logger from './logger-console-only';

const loggingModule = angular
    .module('logging', [])
    .factory('$exceptionHandler', () => logger);

export default loggingModule.name;