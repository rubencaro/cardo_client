import { state } from './state'

// getters
const getters = {
  cards_list: state => {
    return state.cards.cards
  },
  cards_filled_field_names: (state, getters) => {
    return getters.cards_field_names.filter(
      f => { return f.value != null && f.value.length > 0 }
    )
  },
  cards_field_names: state => {
    return state.cards.field_names
  },
  cards_card: (state) => (id) => {
    return state.cards.cards[id]
  }
}

export { getters }