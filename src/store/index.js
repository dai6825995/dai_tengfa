import { createStore } from 'vuex'

export default createStore({
  state: {
    isloading: false
  },
  getters: {
  },
  mutations: {
    setisloading(state) {
      state.isloading = !state.isloading
    }
  },
  actions: {
  },
  modules: {
  }
})
