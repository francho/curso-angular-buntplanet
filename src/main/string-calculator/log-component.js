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
    <h2>Log de cálculos</h2>
    <ul>
      <li ng-repeat="entry in $ctrl.entries">
        {{entry.input}} => {{entry.result}}
        <button ng-click="$ctrl.load(entry)">Cargar</button>
      </li>
    </ul>
  `,
  controller: LogController
}