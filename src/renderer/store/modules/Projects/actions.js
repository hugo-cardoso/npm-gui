import { remote, shell } from 'electron'
import fs from 'fs'

export default {
  setActiveProject ({commit}, projectPackage) {
    commit('SET_ACTIVE_PROJECT', projectPackage)
  },
  toggleSearch ({commit, state}) {
    commit('SET_SEARCH_ACTIVE', !state.ui.searchActive)
  },
  searchFolderProject ({commit, dispatch}) {
    let projectFolder = remote.dialog.showOpenDialog({
      properties: ['openDirectory']
    })

    if (!projectFolder) return
    projectFolder = projectFolder[0]

    const files = fs.readdirSync(projectFolder).map(file => file)
    const hasPackageJson = files.includes('package.json')

    if (!hasPackageJson) return

    const packageJson = JSON.parse(fs.readFileSync(`${projectFolder}/package.json`))

    dispatch('addProject', packageJson)
    commit('ADD_PROJECT_PATH', {
      name: packageJson.name,
      path: projectFolder
    })
  },
  addProject ({commit, state}, projectPackage) {
    const {
      projects
    } = state

    const projectsNames = projects.map(({name}) => name)

    // TODO
    if (projectsNames.includes(projectPackage.name)) return

    commit('ADD_PROJECT', projectPackage)
    console.log(projectPackage)
  },
  removeProject ({commit, state, dispatch}, project) {
    commit('REMOVE_PROJECT', project.name)
    if (project.name === state.activeProject.name) {
      dispatch('setActiveProject', null)
    }
  },
  searchProjects ({commit}, term) {
    if (!term) {
      commit('SET_SEARCH_TERM', null)
      return
    }

    commit('SET_SEARCH_TERM', term)
  },
  openFolder ({state}, project) {
    shell.openItem(state.projectsPaths[project.name])
  }
}
