import Vue from 'vue'
import Vuex from 'vuex'
import { clamp } from 'lodash'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    pencils: 0,
    pencilPrice: 1,
    money: 0,
    sellers: 0,
    sellerPrice: 10
  },
  getters: {
    pencilCount({ pencils }) {
      return pencils
    },
    moneyAmount({ money }) {
      return money
    },
    pencilPrice({ pencilPrice }) {
      return pencilPrice
    },
    sellerCount({ sellers }) {
      return sellers
    },
    canBuySeller({ sellerPrice, money }) {
      return money >= sellerPrice
    }
  },
  mutations: {
    SET_PENCILS(state, n: number) {
      state.pencils = n
    },
    SET_PENCIL_PRICE(state, n: number) {
      state.pencilPrice = n
    },
    SET_MONEY(state, n: number) {
      state.money = n
    },
    SET_SELLERS(state, n: number) {
      state.sellers = n
    }
  },
  actions: {
    createPencil({ commit, state }) {
      commit('SET_PENCILS', state.pencils + 1)
    },
    sellPencil({ commit, state }, n: number = 1) {
      commit('SET_PENCILS', state.pencils - n)
      commit('SET_MONEY', state.pencilPrice * n + state.money)
    },
    buySeller({ commit, state }) {
      commit('SET_MONEY', state.money - state.sellerPrice)
      commit('SET_SELLERS', state.sellers + 1)
    },
    workPencilSellers({ commit, state, dispatch }) {
      const sellAmount = clamp(state.pencils, state.sellers)
      if (sellAmount > 0) {
        dispatch('sellPencil', sellAmount)
      }
    }
  }
})
