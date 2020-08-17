<template>
  <div 
    class="projects-list__item"
    :class="{'projects-list__item--active': activeProject && (activeProject.name == project.name)}"
    :key="project.name"
    @contextmenu="handleToggleOptions"
    @click="setActiveProject(project)"
    >
    <div class="projects-list__item-lines" :class="{'projects-list__item-lines--options': optionsActive}">
      <div class="projects-list__item-line">
        <div class="projects-list__item-icon">
          <i class="mdi mdi-folder-text-outline"></i>
        </div>
        <p class="projects-list__item-title">{{ project.name }}</p>
        <div class="projects-list__item-options-btn" @click="handleToggleOptions">
          <i class="mdi mdi-dots-vertical"></i>
        </div>
      </div>
      <div class="projects-list__item-line projects-list__item-line--options">
        <button class="projects-list__item-option" @click="handleToggleOptions">
          <i class="mdi mdi-keyboard-return"></i>
        </button>

        <div class="projects-list__item-options-group">
          <button class="projects-list__item-option" alt="Open directory" @click="openFolder(project)">
            <i class="mdi mdi-folder-outline"></i>
          </button>
          <button class="projects-list__item-option projects-list__item-option--red" alt="Remove" @click="removeProject(project)">
            <i class="mdi mdi-delete-outline"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'projects-column-list-item',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  data () {
    return {
      optionsActive: false
    }
  },
  computed: {
    ...mapState('Projects', [
      'activeProject'
    ])
  },
  methods: {
    ...mapActions('Projects', [
      'setActiveProject',
      'removeProject',
      'openFolder'
    ]),
    handleToggleOptions (event) {
      this.optionsActive = !this.optionsActive
    }
  }
}
</script>

<style>

</style>