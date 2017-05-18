import sc from "./string-calculator";

export class CalculatorController {
  constructor($rootScope) {
    this.$rootScope = $rootScope;
    this.input = '';
    this.result = null;
  }

  $onInit() {
    this.$rootScope.$on(
        'load-entry',
        (event, {input, result}) => {
          this.input = input;
          this.result = result;
        }
    );
  }

  compute() {
    this.result = sc(this.input);
    this.onCompute({
      input: this.input,
      result: this.result
    })
  }
}

CalculatorController.$inject = ['$rootScope'];

export default {
  bindings: {
    onCompute: '&'
  },
  template: `
    <h2>Calculadora</h2>
    <span>{{$ctrl.result}}</span>
    <input ng-model="$ctrl.input"/>
    <button ng-click="$ctrl.compute()">Calcular</button>
  `,
  controller: CalculatorController
}









