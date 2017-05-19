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
    <h1 class="md-display-1">Calculadora</h1>

    <p layout="row" layout-align="center center" class="md-display-4">{{$ctrl.result}}</p>
    
    <md-input-container layout="row">
      <label>Entrada de datos</label>
      <input ng-model="$ctrl.input">
    </md-input-container>
    
    <md-button layout="row" class="md-raised md-primary" ng-click="$ctrl.compute()">Calcular!</md-button>
  `,
  controller: CalculatorController
}









