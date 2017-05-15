export default class HeaderController {
  constructor($state) {
    this.menuOptions = [
      { state: 'app.listado', name: 'Listado' }
    ];

    this.selectedMenuOptionIndex = this.menuOptions
        .map(menuOption => menuOption.state)
        .indexOf($state.current.name);
  }
}

HeaderController.$inject = ['$state'];