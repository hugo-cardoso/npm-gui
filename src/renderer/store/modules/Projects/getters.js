export default {
  projects (state) {
    if (!state.searchTerm) {
      return state.projects
    } else {
      return state.projects.filter(project => {
        return project.name.includes(state.searchTerm)
      })
    }
  }
}
