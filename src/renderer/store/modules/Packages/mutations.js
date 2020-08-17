export default {
  SET_SEARCH_ACTIVE: (store, value) => {
    store.ui.searchActive = value
  },
  SET_TAB_ACTIVE: (store, value) => {
    store.ui.tabActive = value
  },
  SET_SEARCH_TERM: (store, value) => {
    store.searchTerm = value
  }
}
