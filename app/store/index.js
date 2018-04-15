import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  logs: []
}

const getters = {
  logs(state) {
    return state.logs
  }
}

const mutations = {
  addLogLine(state, text) {
    state.logs.push(text)
    if (state.logs.length > 10) {
      state.logs.shift()
    }
  }
}

const actions = {
  addLogLine(context, text) {
    const formatted = `${(new Date()).toLocaleString()}: ${text}`
    context.commit('addLogLine', formatted)
  },
}

import connector from './socket/connector'

import cards from './modules/cards'
import alerts from './modules/alerts'

export default new Vuex.Store({
  state,
  actions,
  getters,
  mutations,
  modules: {
    cards,
    alerts
  },
  plugins: [connector],
  strict: process.env.NODE_ENV !== 'production'
})