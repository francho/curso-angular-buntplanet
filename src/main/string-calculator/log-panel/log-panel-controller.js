
export default class LogPanelController {
  constructor() {
    this.logEntries = [
      { operation: '1,4', result: 5},
      { operation: '1,4,6', result: 11}
    ]
  }

  calculate() {
  }

  $onInit() {
  }

}

LogPanelController.$inject = [];
