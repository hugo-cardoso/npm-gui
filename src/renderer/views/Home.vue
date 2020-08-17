<template>
  <div class="columns">
    <projects-column />
    <packages-column />
    <package-info-column />
  </div>
</template>

<script>
  import ProjectsColumn from '@/components/ProjectsColumn/ProjectsColumn'
  import PackagesColumn from '@/components/PackagesColumn/PackagesColumn'
  import PackageInfoColumn from '@/components/PackageInfoColumn/PackageInfoColumn'

  export default {
    name: 'landing-page',
    components: {
      ProjectsColumn,
      PackagesColumn,
      PackageInfoColumn
    }
  }
</script>

<style lang="scss">
  .columns {
    width: 100%;
    height: 100%;
    display: flex;
    background-color: var(--background);
  }
</style>
