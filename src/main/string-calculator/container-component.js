export default {
  template: `
    <div layout="row">
      <sc-log entries="$ctrl.entries" flex="50"></sc-log>
      <sc-calculator on-compute="$ctrl.logEntry(input, result)" flex="50"></sc-calculator>
    </div>
  `,
  controller: class ContainerController {
    constructor() {
      this.entries = [];
    }

    logEntry(input, result) {
      this.entries.push({
        input: input,
        result: result
      });
    }
  }
}












