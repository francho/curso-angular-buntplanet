import PaginationController from "./pagination-component-controller";

export default {
  bindings: {
    lastPage: '@',
    initPage: '@',
    onChange: '&'
  },
  template: `
    <md-button class="md-icon-button md-primary" ng-disabled="$ctrl.isFirst()" ng-click="$ctrl.first()"><md-icon md-font-set="md">skip_previous</md-icon></md-button>
    <md-button class="md-icon-button md-primary" ng-disabled="$ctrl.isFirst()" ng-click="$ctrl.prev()"><md-icon md-font-set="md">fast_rewind</md-icon></md-button>
    <md-button class="md-icon-button md-primary" ng-disabled="true">{{$ctrl.page}}</md-button>
    <md-button class="md-icon-button md-primary" ng-disabled="$ctrl.isLast()" ng-click="$ctrl.next()"><md-icon md-font-set="md">fast_forward</md-icon></md-button>
    <md-button class="md-icon-button md-primary" ng-disabled="$ctrl.isLast()" ng-click="$ctrl.last()"><md-icon md-font-set="md">skip_next</md-icon></md-button>
  `,
  controller: PaginationController
}