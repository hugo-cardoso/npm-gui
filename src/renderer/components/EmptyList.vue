<template>
  <div class="empty-list">
    <p class="empty-list__message">{{ message }}</p>
  </div>
</template>

<script>
export default {
  name: 'empty-list',
  props: {
    message: {
      type: String,
      required: true
    }
  }
}
</script>

<style lang="scss">
  .empty-list {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &__message {
      font-size: 14px;
      color: var(--comment);
    }
  }
</style>