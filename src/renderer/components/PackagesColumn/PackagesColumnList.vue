<template>
  <div class="packages">
    <div class="packages-list" v-if="activeProject && packagesCount">
      <div 
        class="packages-list__item"
        v-for="(packageVersion, packageName) in packages"
        :key="packageName"
        >
        <div class="packages-list__item-title">
          <span class="name">{{ packageName }}</span>:
          <span class="version">{{ packageVersion }}</span>
        </div>
      </div>
    </div>
    <empty-list :message="`No ${ ui.tabActive } dependencies`" v-else/>
  </div>
</template>

<script>
import EmptyList from '@/components/EmptyList'

import { mapState, mapGetters } from 'vuex'

export default {
  name: 'packages-column-list',
  components: {
    EmptyList
  },
  computed: {
    ...mapState('Projects', [
      'activeProject'
    ]),
    ...mapState('Packages', [
      'ui'
    ]),
    ...mapGetters('Packages', [
      'packages',
      'packagesCount'
    ])
  }
}
</script>

<style lang="scss">

  .packages {
    width: 100%;
    height: 100%;
  }

  .packages-list {
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-bottom: 50px;

    &__item {
      width: 100%;
      height: 50px;
      border-bottom: 1px solid var(--backgroundDarken);
      padding: 0 8px;
      position: relative;
      display: flex;
      align-items: center;
      transition: all .15s ease-in;

      &:hover {
        background-color: var(--backgroundLighten);
      }
      
      &-title {
        color: var(--foreground);
        font-size: 14px;

        .name {
          color: var(--cyan);
          font-weight: 700;
        }

        .version {
          color: var(--foreground);
        }
      }
    }
  }


</style>