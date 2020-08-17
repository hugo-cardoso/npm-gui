export default {
  packages (state, _, rootState) {
    let dependencies

    if (state.ui.tabActive === 'production') {
      dependencies = rootState.Projects.activeProject.dependencies || {}
    } else {
      dependencies = rootState.Projects.activeProject.devDependencies || {}
    }

    if (state.searchTerm) {
      const searchedKeys = Object.keys(dependencies).filter(dependency => dependency.includes(state.searchTerm))
      let searchedDependencies = {}
      searchedKeys.forEach(dependency => {
        searchedDependencies[dependency] = dependencies[dependency]
      })
      return searchedDependencies
    } else {
      return dependencies
    }
  },
  packagesCount (state, getters, rootState) {
    if (!rootState.Projects.activeProject) return 0
    return Object.keys(getters.packages).length
  }
}
