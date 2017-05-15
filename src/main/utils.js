export const doAction = ($http) => (action) => $http.post(action.url, {
  name: action.name,
  payload: action.payload
}).then((response) => response.data);

export const doQuery = ($http) => (data, mapper) => $http.get(data.url, {
  params: data.params
}).then((response) => response.data).then(mapper);

export const navigateTo = ($state) => (stateName, params) => $state.go(stateName, params);

