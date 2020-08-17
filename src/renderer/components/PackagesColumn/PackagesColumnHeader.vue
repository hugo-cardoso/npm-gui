<template>
  <div class="column-header">
    <div class="column-header__wrapper-top">
      <p class="column-header__title">Dependencies</p>
      <div class="column-header__actions">

        <button 
          class="column-header__action"
          :class="{'column-header__action--active': ui.searchActive}"
          @click="toggleSearch"
        >
          <i class="mdi mdi-magnify"></i>
        </button>

      </div>
    </div>
    <div class="column-header__wrapper-bottom" v-show="ui.searchActive">
      <div class="column-header__search" v-show="ui.searchActive">
        <div class="column-header__search-form">
          <input ref="searchInput" class="column-header__search-input" type="text" :value="searchTerm" @input="handleSearchDependencies">
          <button class="column-header__search-close-btn" @click="handleCloseSearch">
            <i class="mdi mdi-close"></i>
          </button>
        </div>
      </div>
    </div>
    <div class="column-header__wrapper-tabs">
      <div class="column-header__wrapper-tabs-tab" :class="{'column-header__wrapper-tabs-tab--active': ui.tabActive === 'production'}" @click="setTabActive('production')">Production</div>
      <div class="column-header__wrapper-tabs-tab" :class="{'column-header__wrapper-tabs-tab--active': ui.tabActive === 'development'}" @click="setTabActive('development')">Development</div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
  name: 'packages-column-header',
  computed: {
    ...mapState('Packages', [
      'ui',
      'searchActive',
      'searchTerm'
    ])
  },
  methods: {
    ...mapActions('Packages', [
      'setTabActive',
      'toggleSearch',
      'closeSearch',
      'searchDependencies'
    ]),
    handleSearchDependencies (event) {
      this.searchDependencies(event.target.value)
    },
    handleCloseSearch () {
      this.closeSearch()
    }
  }
}
</script>

<style lang="scss" src="@/assets/scss/column_header.scss"></style>