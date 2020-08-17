export default {
  toggleSearch ({commit, state}) {
    commit('SET_SEARCH_ACTIVE', !state.ui.searchActive)
  },
  closeSearch ({commit}) {
    commit('SET_SEARCH_ACTIVE', false)
    commit('SET_SEARCH_TERM', null)
  },
  setTabActive ({commit}, name) {
    commit('SET_TAB_ACTIVE', name)
  },
  searchDependencies ({commit}, term) {
    if (!term) {
      commit('SET_SEARCH_TERM', null)
      return
    }

    commit('SET_SEARCH_TERM', term)
  }
}
