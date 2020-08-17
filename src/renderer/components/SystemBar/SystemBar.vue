<template>
  <div class="system-bar" style="-webkit-app-region: drag">
    <div class="system-bar__buttons">
      <button class="system-bar__button system-bar__button--close" @click="closeWindow"></button>
      <button class="system-bar__button system-bar__button--minimize" @click="minimizeWindow"></button>
      <button class="system-bar__button system-bar__button--maximize" @click="maximizeWindow"></button>
    </div>
    <h1 class="system-bar__title" v-if="activeProject">NPM GUI - {{ activeProject.name }}</h1>
    <h1 class="system-bar__title" v-else>NPM GUI</h1>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex'

export default {
  name: 'system-bar',
  computed: {
    ...mapState([
      'activeProject'
    ])
  },
  methods: {
    ...mapActions('System', [
      'minimizeWindow',
      'maximizeWindow',
      'closeWindow',
      'moveWindow'
    ])
  }
}
</script>

<style lang="scss">

  .system-bar {
    width: 100%;
    height: 35px;
    background-color: var(--backgroundDarken);
    padding: 0 8px;
    display: flex;
    align-items: center;
    position: relative;
    border-bottom: 1px solid var(--backgroundDarken);
    -webkit-app-region: drag;

    &__title {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translateX(-50%) translateY(-50%);
      font-size: 14px;
      color: var(--foreground);
    }

    &__buttons {
      display: flex;
    }

    &__button {
      width: 12px;
      height: 12px;
      background-color: var(--foreground);
      appearance: none;
      border: none;
      border-radius: 50%;
      margin-right: 8px;
      border: 1px solid rgba(0,0,0, .2);

      &--close {
        background-color: var(--red);
      }

      &--minimize {
        background-color: var(--orange);
      }

      &--maximize {
        background-color: var(--green);
      }
    }
  }

</style>