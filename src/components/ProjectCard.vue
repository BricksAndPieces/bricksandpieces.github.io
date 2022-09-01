<script setup>
defineProps({
  title: String,
  message: String,
  languages: Array,
  githubUrl: String,
  externalUrl: String,
});
</script>

<template>
  <div class="card">
    <slot name="image" />

    <div class="card-message">
      <h3>{{ title }}</h3>
      <p>{{ message }}</p>

      <div class="icon-container">
        <i
          :class="'devicon-' + lang + '-plain'"
          v-for="lang of languages"
          :key="lang"
        />
        <div class="spacer" />
        <a :href="githubUrl" v-if="githubUrl"
          ><i class="link devicon-github-original"
        /></a>
        <a :href="externalUrl" v-if="externalUrl"
          ><i class="link material-icons">link</i></a
        >
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/base.scss";

.card {
  width: 100%;
  box-sizing: border-box;

  border-radius: 15px;
  border: var(--accent-color) solid 2px;
  transition: border-color var(--color-transition-duration);

  overflow: hidden;

  :slotted(img) {
    width: 100%;
    aspect-ratio: 16/9;
    object-fit: cover;
  }

  .card-message {
    padding: 10px;

    h3 {
      color: var(--accent-color);
      margin: 0;
    }

    h4 {
      margin-top: 5px;
    }

    .icon-container {
      display: flex;
      align-items: center;
      gap: 10px;

      .spacer {
        flex: 1;
      }

      a {
        text-decoration: none;
      }
    }

    i {
      font-size: 25px;
      user-select: none;
    }
  }
}
</style>
