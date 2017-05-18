
export default {
  templateUrl: './string-calculator/calculator-container/calculator-container.html',
  controller: class Container {
    constructor() {
      this.logEntries = [
        { operation: '1,4', result: 5},
        { operation: '1,4,6', result: 11}
      ];
    }
  }
}
