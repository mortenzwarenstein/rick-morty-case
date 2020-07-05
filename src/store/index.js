import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    queryParameters: [
      {
        name: 'Dimension',
        value: 'dimension',
        img: '/img/icon/portal.png',
        selected: false
      },
      {
        name: 'Location',
        value: 'location',
        img: '/img/icon/location.png',
        selected: false
      },
      {
        name: 'Episode',
        value: 'episode',
        img: '/img/icon/episode.png',
        selected: false
      },
    ]
  },
  getters: {
    getQueryParameters: (state) => state.queryParameters,
    getSelectedQuery: (state) => state.queryParameters.find(el => el.selected === true)
  },
  mutations: {
    SELECT_QUERY: (state, param) => {
      state.queryParameters.forEach(q => q.selected = false);
      let query = state.queryParameters.find(el => param.value === el.value);
      if(!query) return;
      query.selected = true;
    }
  },
  actions: {
  },
  modules: {
  }
})
