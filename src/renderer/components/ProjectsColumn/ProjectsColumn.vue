<template>
  <column-resizable :initialWidth="300" :minWidth="170">
    <template #header>
      <column-header />
    </template>
    <template #content>
      <projects-list v-if="projects.length"/>
      <empty-list message="No projects added" v-else/>
    </template>
  </column-resizable>
</template>

<script>
import ColumnResizable from '@/components/ColumnResizable'
import ColumnHeader from '@/components/ProjectsColumn/ProjectsColumnHeader'
import ProjectsList from '@/components/ProjectsColumn/ProjectsColumnList'
import EmptyList from '@/components/EmptyList'

import { mapState } from 'vuex'

export default {
  name: 'projects-column',
  components: {
    ColumnResizable,
    ColumnHeader,
    ProjectsList,
    EmptyList
  },
  computed: {
    ...mapState('Projects', [
      'projects'
    ])
  }
}
</script>

<style>

</style>