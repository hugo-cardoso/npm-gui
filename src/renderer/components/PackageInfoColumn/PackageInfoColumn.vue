<template>
  <column-resizable :initialWidth="350" :minWidth="170" side="left">
    <template #content>
      <empty-list message="No package selected"/>
    </template>
  </column-resizable>
</template>

<script>
import ColumnResizable from '@/components/ColumnResizable'
import EmptyList from '@/components/EmptyList'

export default {
  name: 'package-info-column',
  components: {
    ColumnResizable,
    EmptyList
  }
}
</script>
