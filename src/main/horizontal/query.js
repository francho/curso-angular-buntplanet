export default class Query {
  constructor(url, params, mapper = a => a, method = 'GET') {
    this.url = url;
    this.params = params;
    this.mapper = mapper;
    this.method = method;
  }

  static empty() {
    return new Query();
  }

  static withoutParams(url, mapper) {
    return new Query(url, null, mapper);
  }

  static post(url, params) {
    return new Query(url, params, null, 'POST');
  }

  equals(other) {
    return other instanceof Query
        && this.url === other.url
        && this.params === other.params
        && this.mapper.toString() === other.mapper.toString()
        && this.method === other.method;
  }
}