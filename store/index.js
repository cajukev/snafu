import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      page: 'index',
      routeDepth: '1',
      routeTransitionDirection: 'right'
    },
    mutations: {
      updatePage(state, pageName) {
        state.page = pageName
      },
      setRouteTransitionDirection(state, newRouteDepth) {
        newRouteDepth < state.routeDepth ? state.routeTransitionDirection = 'right' : state.routeTransitionDirection = 'left'
        
        state.routeDepth = newRouteDepth
      }
    }
  })
}

export default createStore