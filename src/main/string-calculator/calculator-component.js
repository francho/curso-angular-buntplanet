export default {
  template: `
    <h2>Calculadora</h2>
    <span>{{$ctrl.result}}</span>
    <input ng-model="$ctrl.input"/>
    <button ng-click="$ctrl.compute()">Calcular</button>
  `,
  controller: class CalculatorController {
    constructor() {
      this.input = '1,2,3';
      this.result = null;
    }

    compute() {
      this.result = 6;
    }
  }
}