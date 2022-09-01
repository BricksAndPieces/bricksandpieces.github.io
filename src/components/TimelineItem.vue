<script setup>
defineProps({
  title: String,
  subtitle: String,
  lastItem: Boolean,
});
</script>

<template>
  <div class="container">
    <div class="timeline" :class="{ last: lastItem }">
      <div class="company-icon">
        <slot name="logo"></slot>
      </div>
    </div>
    <div class="content">
      <h3>{{ title }}</h3>
      <h4>{{ subtitle }}</h4>
      <slot></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
:slotted(ul) {
  padding: 0;

  li {
    color: #646669;

    p {
      margin: 2px 0;
    }
  }
}

.container {
  display: flex;
  flex-direction: row;

  .timeline {
    position: relative;
    margin-right: 10px;

    .company-icon {
      width: 50px;
      aspect-ratio: 1/1;
      background-color: var(--accent-color);
      transition: background-color var(--color-transition-duration);
      border-radius: 100%;

      display: flex;
      justify-content: center;
      align-items: center;

      :slotted(img) {
        width: 46px;
        aspect-ratio: 1/1;
        border-radius: 50%;
      }
    }
  }

  .timeline:before {
    position: absolute;
    left: 50%;
    top: 0;
    content: " ";
    display: block;
    width: 4px;
    height: 100%;
    margin-left: -2px;
    background: var(--accent-color);
    transition: background-color var(--color-transition-duration);
    z-index: -1;
  }

  .last:before {
    background: linear-gradient(var(--accent-color), #ffffff00);
    height: 80%;
  }

  .content {
    h3 {
      color: var(--accent-color);
      margin: 0;
    }

    h4 {
      margin-top: 5px;
    }
  }
}
</style>
