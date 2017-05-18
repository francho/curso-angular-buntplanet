export default class Query {
  constructor(url, params) {
    this.url = url;
    this.params = params;
  }

  static empty() {
    return new Query();
  }

  static withoutParams(url) {
    return new Query(url, null);
  }

  equals(other) {
    return other instanceof Query
        && this.url === other.url
        && this.params === other.params;
  }
}