import stringCalculator from "../string-calculator"

export default class CalculatorPanelController {
  constructor() {
    this.operation ='';
  }

  calculate() {
    this.result = stringCalculator(this.operation);
    this.onCalculate({operation: this.operation, result: this.result});
  }

  $onInit() {
    console.log('CalculatorPanelController.$onInit');
  }

}

CalculatorPanelController.$inject = [];
