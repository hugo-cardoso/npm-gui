<template>
  <column-resizable :resizable="false">
    <template #header>
      <packages-column-header />
    </template>
    <template #content>
      <packages-column-list v-if="activeProject"/>
      <empty-list message="No project selected" v-else/>
    </template>
  </column-resizable>
</template>

<script>
import ColumnResizable from '@/components/ColumnResizable'
import PackagesColumnHeader from '@/components/PackagesColumn/PackagesColumnHeader'
import PackagesColumnList from '@/components/PackagesColumn/PackagesColumnList'
import EmptyList from '@/components/EmptyList'

import { mapState } from 'vuex'

export default {
  name: 'packages-column',
  components: {
    ColumnResizable,
    PackagesColumnHeader,
    PackagesColumnList,
    EmptyList
  },
  computed: {
    ...mapState('Projects', [
      'activeProject'
    ])
  }
}
</script>

<style></style>