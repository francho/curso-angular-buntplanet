export default {
  template: `
    <h2>Log de cálculos</h2>
    <ul>
      <li ng-repeat="entry in $ctrl.entries">{{entry.input}} => {{entry.result}}</li>
    </ul>
  `,
  controller: class LogController {
    constructor() {
      this.entries = [
        {input: "1,2,3", result: 6},
        {input: "1,2,3,4", result: 10},
      ]
    }
  }
}