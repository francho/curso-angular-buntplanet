export default class Action {
  constructor(url, method, payload) {
    this.url = url;
    this.method = method;
    this.payload = payload;
  }

  static empty() {
    return new Action();
  }

  static update(url, payload) {
    return new Action(url, 'put', payload);
  }

  static delete(url) {
    return new Action(url, 'delete');
  }

  equals(other) {
    return other instanceof Action
        && this.url === other.url
        && this.method === other.method
        && JSON.stringify(this.payload) === JSON.stringify(other.payload);
  }
}