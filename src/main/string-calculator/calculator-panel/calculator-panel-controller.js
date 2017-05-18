import stringCalculator from "../string-calculator"

export default class CalculatorPanelController {
  constructor($rootScope) {
    this.operation = '';
    $rootScope.$on('load-operation', (event, eventInfo) => {
      this.operation = eventInfo.operation;
      this.result = eventInfo.result;
    });
  }

  calculate() {
    this.result = stringCalculator(this.operation);
    this.onCalculate({operation: this.operation, result: this.result});
  }

  $onInit() {
    console.log('CalculatorPanelController.$onInit');
  }

}

CalculatorPanelController.$inject = ['$rootScope'];
