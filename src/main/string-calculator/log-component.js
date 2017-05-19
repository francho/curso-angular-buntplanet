export class LogController {
  constructor($rootScope) {
    this.$rootScope = $rootScope;
  }

  load(entry) {
    this.$rootScope.$broadcast('load-entry', entry);
  }

}

LogController.$inject = ['$rootScope'];

export default {
  bindings: {
    entries: '<'
  },
  template: `
    <h1 class="md-display-1">Resultados</h1>
    <md-list>
      <md-list-item ng-repeat="entry in $ctrl.entries">
        <span>{{entry.input}} ==> {{entry.result}}</span>
        <md-button ng-click="$ctrl.load(entry)" class="md-secondary">CARGAR</md-button>
      </md-list-item>
    </md-list>
  `,
  controller: LogController
}