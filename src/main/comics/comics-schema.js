export const comicSchema = {
  type: "object",
  properties: {
    id: {
      type: "number"
    },
    description: {
      type: ["null", "string"]
    }
  },
  required: ["id", "description"]
};

export default {
  type: "array",
  minItems: 0,
  items: comicSchema,
  uniqueItems: true
};