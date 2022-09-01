<script setup>
import ThemeToggle from "./ThemeToggle.vue";
import AccentSelect from "./AccentSelect.vue";
import SocialIcon from "./SocialIcon.vue";
</script>

<template>
  <div class="float-right">
    <div class="container">
      <SocialIcon social="linkedin" />
      <SocialIcon social="github" />
      <!--      <ThemeToggle />-->
      <AccentSelect />
    </div>
  </div>
</template>

<style scoped lang="scss">
.float-right {
  position: relative;
  float: right;

  .container {
    display: flex;
    gap: 10px;
  }
}
</style>
