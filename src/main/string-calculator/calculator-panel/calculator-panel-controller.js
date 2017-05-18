import stringCalculator from "../string-calculator"

export default class CalculatorPanelController {
  constructor($rootScope) {
    this.operation = '';
    $rootScope.$on('load-operation', (event, eventDetails) => {
      this.operation = eventDetails.operation;
      this.result = eventDetails.result;
    });
  }

  calculate() {
    this.result = stringCalculator(this.operation);
    this.onCalculate({operation: this.operation, result: this.result});
  }

  $onInit() {
  }

}

CalculatorPanelController.$inject = ['$rootScope'];
