// actions
const actions = {
  cards_addCard(context, card) {
    context.commit('cards_addCard', card)
  },
  cards_upsertCard(context, card) {
    context.commit('cards_upsertCard', card)
  },
  cards_removeField(context, payload) {
    if (payload.field == "id") {
      context.dispatch('alerts_addError', { msg: `${Date.now()} Field 'id' cannot be deleted.` })
    }
    else {
      context.commit('cards_removeField', payload)
    }
  },
  cards_upsertFieldOnCard(context, payload) {
    context.commit('cards_upsertFieldOnCard', payload)
  }
}

export { actions }