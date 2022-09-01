<script setup>
const props = defineProps({
  text: String,
  indent: Boolean,
  closing: Boolean,
});

function copyLink() {
  const link = document.location.origin + "/#" + props.text;
  navigator.clipboard.writeText(link);
}
</script>

<template>
  <p
    class="tag"
    :class="{ 'tag-indent': indent }"
    :id="text"
    @click="copyLink()"
  >
    <code>&lt;{{ closing ? "/" : "" }}{{ text }}></code>
  </p>
</template>

<style scoped lang="scss">
@import "../assets/base.scss";

.tag {
  color: var(--bg-element-color);
  cursor: pointer;
}

.tag-indent {
  margin-left: 10px;
}
</style>
