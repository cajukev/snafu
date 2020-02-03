export default function({ store, route, redirect }) {
    // go tell the store to update the page
    store.commit('updatePage', route.name)

    const routeDepth = route.meta.map((meta) => {
      if (meta.depth && typeof meta.depth !== 'undefined')
        return meta.depth
      return 0
    })
    
    // send depth to the store
    store.commit('setRouteTransitionDirection', routeDepth)
  }
