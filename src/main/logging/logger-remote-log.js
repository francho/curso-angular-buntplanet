import angular from "angular";

export default (e, cause) => {
  const {message, stack} = e;
  console.error(message);
  console.error(stack);
  console.error("Cause: ", cause);

  var http = angular.injector(['ng']).get('$http'),
      url = 'log';

  http.post(url.toString(), {
    payload: {
      url: document.location.href,
      message,
      stack,
      cause,
      navigator: navigator.userAgent
    }
  });
}