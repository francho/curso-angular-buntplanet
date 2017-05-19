export class ContainerController {
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

export default {
  template: `
    <md-content class="md-padding" ng-cloak>
  <md-card>

    <md-card-title>
      <md-card-title-text>
        <md-subheader>String calculator</md-subheader>
      </md-card-title-text>
    </md-card-title>

    <md-card-content>
      <div layout="row">
        <sc-log layout="column" flex="50" entries="$ctrl.entries"></sc-log>
        <sc-calculator layout="column" flex="50" on-compute="$ctrl.logEntry(input, result)"></sc-calculator>
      </div>
    </md-card-content>
  </md-card>
</md-content>


  `,
  controller: ContainerController
}












