import stringCalculator from "../string-calculator"

export default class CalculatorPanelController {
  constructor() {
  }

  calculate() {
    this.result = stringCalculator(this.operation)
  }

  $onInit() {
    console.log('CalculatorPanelController.$onInit');
  }

}

CalculatorPanelController.$inject = [];
