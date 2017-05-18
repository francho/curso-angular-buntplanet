export default {
  "type": "array",
  "minItems": 0,
  "items": {
    type: 'object',
    properties: {
      id: {
        type: 'number'
      },
      description: {
        type: ['null', 'string']
      }
    },
    required: ['id', 'description']
  },
  "uniqueItems": true
};