import { createStore } from 'vuex'
export const store = createStore({ 
  state: {
    session: null,
  },
  getters:{
    session(state){
      return state.session  || {}
    }
  },
  mutations: {
    session( state , session ){
      state.session = session
    }
  },
  actions: {
  }
})
