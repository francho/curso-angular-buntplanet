
export default class LogPanelController {
  constructor($rootScope) {
    this.$rootScope = $rootScope;
  }

  loadOperation(operation) {
    this.$rootScope.$broadcast('load-operation', operation);
  }

  $onInit() {
  }

}

LogPanelController.$inject = ['$rootScope'];
