export default class CalculatorContainerController {
  constructor() {
    this.logEntries = [];
  }

  addEntryLog(operation,result) {
    this.logEntries.push({operation: operation, result: result});
  }
}
