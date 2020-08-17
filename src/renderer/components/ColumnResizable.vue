<template>
  <div 
    ref="column"
    class="column"
    :class="{'no-resizable': !resizable, 'lighten': lighten}"
    :style="{
      'minWidth': minWidth + 'px',
      'width': initialWidth + 'px'
    }"
  > 
    <slot name="header"></slot>
    <div class="content">
      <slot name="content"></slot>
    </div>
    <div ref="risableLine" class="column__resizable-line" :class="side" @mousedown="initResize" v-if="resizable"></div>
  </div>
</template>

<script>
export default {
  props: {
    side: {
      type: String,
      default: 'right'
    },
    resizable: {
      type: Boolean,
      default: () => true
    },
    lighten: {
      type: Boolean,
      default: () => false
    },
    minWidth: {
      type: Number,
      default: 100
    },
    initialWidth: {
      type: Number,
      default: 300
    }
  },
  methods: {
    initResize (event) {
      window.addEventListener('mousemove', this.resize, false)
      window.addEventListener('mouseup', this.stopResize, false)
    },
    resize (event) {
      const element = this.$refs.column
      if (this.side === 'right') {
        element.style.width = (event.clientX - element.offsetLeft) + 'px'
      } else {
        element.style.width = (window.innerWidth - event.clientX) + 'px'
      }
    },
    stopResize (event) {
      window.removeEventListener('mousemove', this.resize, false)
      window.removeEventListener('mouseup', this.stopResize, false)
    }
  }
}
</script>

<style lang="scss" scoped>
  .column {
    height: 100%;
    background-color: var(--background);
    position: relative;
    overflow-y: auto;
    display: flex;
    flex-direction: column;

    &.no-resizable {
      width: auto;
      flex: 1;
    }

    &.lighten {
      background-color: var(--currentLine);
    }

    &__resizable-line {
      width: 1px;
      height: 100%;
      position: absolute;
      top: 0;
      background-color: var(--backgroundDarken);
      cursor: ew-resize;

      &::before {
        content: '';
        position: absolute;
        width: 4px;
        height: 100%;
        background-color: transparent;
        z-index: 1;
      }

      &.left {
        left: 0;

        &::before {
          left: 0;
        }
      }

      &.right {
        right: 0;

        &::before {
          content: '';
          right: 0;
        }
      }
    }
  }

  .content {
    height: 100%;
    flex: 1;
    overflow-y: auto;
    padding-bottom: 60px;
  }
</style>