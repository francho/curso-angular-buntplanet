export default class HeaderController {
  constructor($state) {
    this.menuOptions = [
      {state: 'curso.comics.listado', name: 'Listado de Comics'},
      {state: 'curso.stringcalculator', name: 'String Calculator'}
    ];

    this.selectedMenuOptionIndex = this.menuOptions
        .map(menuOption => menuOption.state)
        .indexOf($state.current.name);
  }
}

HeaderController.$inject = ['$state'];

