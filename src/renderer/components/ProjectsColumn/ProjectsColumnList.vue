<template>
  <div class="projects-list">
    <projects-column-list-item v-for="project in projects" :project="project" :key="project.name"/>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import ProjectsColumnListItem from '@/components/ProjectsColumn/ProjectsColumnListItem'

export default {
  name: 'project-list',
  components: {
    ProjectsColumnListItem
  },
  computed: {
    ...mapGetters('Projects', [
      'projects'
    ])
  }
}
</script>

<style lang="scss">
  .projects-list {
    width: 100%;
    display: flex;
    flex-direction: column;

    &__item {
      width: 100%;
      height: 50px;
      border-bottom: 1px solid var(--backgroundDarken);
      background-color: var(--background);
      padding: 0 8px;
      display: flex;
      flex-direction: column;
      align-items: center;
      position: relative;
      cursor: pointer;
      transition: all .15s ease-in;
      overflow: hidden;

      &-lines {
        width: 100%;
        height: 50px;
        display: flex;
        flex-direction: column;
        transition: all .15s ease-in;

        &--options {
          transform: translateY(-47px);
        }
      }

      &-line {
        width: 100%;
        min-height: 48px;
        height: 48px;
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      &:hover {
        background-color: var(--backgroundLighten);
      }

      &--active {
        &::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 2px;
          height: 100%;
          background-color: var(--purple);
        }

        .projects-list__item-icon {
          color: var(--purple);
        }
      }

      &-icon {
        min-width: 40px;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--foreground);
      }

      &-title {
        color: var(--foreground);
        font-size: 15px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        flex: 1;
      }

      &-options-btn {
        width: 35px;
        height: 100%;
        display: flex;
        background-color: transparent;
        -webkit-appearance: none;
        border: 0;
        color: var(--comment);
        justify-content: center;
        align-items: center;

        &:hover {
          color: var(--foreground);
        }

        &:focus {
          outline: none;
        }
      }

      &-options-group {
        display: flex;
        height: 100%;
      }

      &-option {
        width: 50px;
        height: 100%;
        background-color: transparent;
        border: 0;
        appearance: none;
        display: flex;
        align-items: center;
        justify-content: center;
        color: var(--comment);
        font-size: 17px;
        cursor: pointer;

        &:focus {
          outline: none;
        }

        &:hover {
          color: var(--foreground);
        }

        &--red {
          color: var(--red);
        }
      }
    }
  }
</style>