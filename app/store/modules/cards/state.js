// initial state
const state = {
  cards: {
    cards: {
      "1": { "name": "asdf", "id": "1" },
      "2": { "name": "asdf2", "id": "2" }
    },
    field_names: [
      {
        text: 'Select field name',
        value: null
      },
      {
        text: 'Name',
        value: 'name'
      },
      {
        text: 'Description',
        value: 'description'
      },
      {
        text: 'ID',
        value: 'id'
      },
      {
        text: 'Priority',
        value: 'priority'
      }
    ]
  }
}

export { state }