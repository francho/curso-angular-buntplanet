import rollbar from "./rollbar";

export default (e, cause) => {
  const {message, stack} = e;
  console.error(message);
  console.error(stack);
  console.error("Cause: ", cause);

  rollbar.error(e);
}