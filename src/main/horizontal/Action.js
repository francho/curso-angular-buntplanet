export default class Action {
  constructor(url, name, payload) {
    this.url = url;
    this.name = name;
    this.payload = payload;
  }

  static empty() {
    return new Action();
  }

  equals(other) {
    return other instanceof Action
        && this.url === other.url
        && this.name === other.name
        && JSON.stringify(this.payload) === JSON.stringify(other.payload);
  }
}