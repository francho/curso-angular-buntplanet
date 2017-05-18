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
  controller: class PaginationController {

    $onInit() {
      this.page = parseInt(this.initPage, 10) || 1;
    }

    change() {
      this.onChange({page: this.page})
    }

    first() {
      this.page = 1;
      this.change();
    }

    prev() {
      this.page = Math.max(1, this.page - 1);
      this.change();
    }

    next() {
      this.page = Math.min(this.lastPage, this.page + 1);
      this.change();
    }

    last() {
      this.page = this.lastPage;
      this.change();
    }

    isFirst() {
      return this.page === 1;
    }

    isLast() {
      return this.page === this.lastPage;
    }
  }
}