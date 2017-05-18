export default class PaginationController {

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
