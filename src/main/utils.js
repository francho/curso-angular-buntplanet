export const doAction = ($http) => (action) => {
  return $http[action.method](`http://localhost:3000${action.url}`, action.payload)
      .then((response) => response.data);
};

export const doQuery = ($http) => (data, mapper) => $http.get(`http://localhost:3000${data.url}`, {
  params: data.params
}).then((response) => response.data).then(mapper);

export const navigateTo = ($state) => (stateName, params) => $state.go(stateName, params);

