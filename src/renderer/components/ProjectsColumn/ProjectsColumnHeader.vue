<template>
  <div class="column-header">
    <div class="column-header__wrapper-top">
      <p class="column-header__title">Projects</p>
      <div class="column-header__actions">

        <button 
          class="column-header__action"
          :class="{'column-header__action--active': ui.searchActive}"
          @click="toggleSearch"
        >
          <i class="mdi mdi-magnify"></i>
        </button>


        <button 
          class="column-header__action"
          @click="searchFolderProject"
        >
          <i class="mdi mdi-plus"></i>
        </button>

      </div>
    </div>
    <div class="column-header__wrapper-bottom" v-show="ui.searchActive">
      <div class="column-header__search" v-show="ui.searchActive">
        <div class="column-header__search-form">
          <input ref="searchInput" class="column-header__search-input" type="text" @input="handleSearchProjects">
          <button class="column-header__search-close-btn" @click="toggleSearch">
            <i class="mdi mdi-close"></i>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

const moduleName = 'Projects'

export default {
  name: 'projects-column-header',
  computed: {
    ...mapState(moduleName, [
      'ui'
    ])
  },
  methods: {
    ...mapActions(moduleName, [
      'toggleSearch',
      'searchFolderProject',
      'searchProjects'
    ]),
    handleSearchProjects (event) {
      this.searchProjects(event.target.value)
    }
  }
}
</script>

<style lang="scss" src="@/assets/scss/column_header.scss">

</style>