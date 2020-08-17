export default {
  SET_SEARCH_ACTIVE: (store, value) => {
    store.ui.searchActive = value
  },
  ADD_PROJECT: (store, value) => {
    store.projects.push(value)
  },
  REMOVE_PROJECT: (store, value) => {
    store.projects = store.projects.filter(project => {
      return project.name !== value
    })
  },
  SET_SEARCH_TERM: (store, value) => {
    store.searchTerm = value
  },
  SET_PROJECTS_SEARCHEDS: (store, value) => {
    store.projectsSearcheds = value
  },
  SET_ACTIVE_PROJECT (store, projectPackage) {
    store.activeProject = projectPackage
  },
  ADD_PROJECT_PATH (store, project) {
    store.projectsPaths[project.name] = project.path
  }
}
