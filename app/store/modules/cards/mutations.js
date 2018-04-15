import Vue from 'vue'
import * as H from './helpers'
import { state } from './state'

// mutations
const mutations = {
  cards_addCard(state, card) {
    if(!H.ensureValidNewID(card, state.cards.cards)){
      // TODO: notify
      return
    }
    state.cards.cards[card['id']] = card
  },
  cards_upsertCard(state, card) {
    // find by key
    // if not then find by id
    // replace card in state
    state.cards.cards[card['id']] = card
  },
  cards_upsertFieldOnCard(state, { field, value, card_id }) {
    // needed to keep newly created fields reactive
    // see https://vuejs.org/v2/guide/reactivity.html
    Vue.set(state.cards.cards[card_id], field, value)
  },
  cards_removeField(state, { field, card_id }) {
    Vue.delete(state.cards.cards[card_id], field)
  }
}

export { mutations }