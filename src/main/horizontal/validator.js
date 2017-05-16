import jjv from "jjv";

const env = jjv();

export default schema => json => {
  const errors = env.validate(schema, json);
  if (errors)
    throw new Error('Failed with error object ' + JSON.stringify(errors));
  return json;
};