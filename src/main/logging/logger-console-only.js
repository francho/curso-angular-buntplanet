export default (e, cause) => {
  const {message, stack} = e;
  console.error(message);
  console.error(stack);
}