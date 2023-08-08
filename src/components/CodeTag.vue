<script setup>
import { ref } from "vue";

const props = defineProps({
  text: String,
  indent: Boolean,
  closing: Boolean,
});

let copyText = ref("#");
let timeoutId = ref(null);

function copyLink() {
  if (props.closing) return;

  const link = document.location.origin + "/#" + props.text;
  navigator.clipboard.writeText(link);

  copyText.value = "Copied!";
  if (timeoutId.value) clearTimeout(timeoutId.value);

  timeoutId.value = setTimeout(() => {
    copyText.value = "#";
    timeoutId.value = null;
  }, 1000);
}
</script>

<template>
  <p
    class="tag"
    :class="{ 'tag-indent': indent }"
    :id="text"
    @click="copyLink()"
  >
    <code class="tag-copy" :class="{ 'tag-pointer': !closing }"
      >&lt;{{ closing ? "/" : "" }}{{ text }}>
    </code>
    <code
      class="tag-copy-indicator"
      :class="{ 'tag-copy-indicator-shown': copyText == 'Copied!' }"
      v-if="!closing"
      >{{ copyText }}
    </code>
  </p>
</template>

<style scoped lang="scss">
@import "../assets/base.scss";

.tag {
  color: var(--bg-element-color);
  cursor: default;
}

.tag-indent {
  margin-left: 10px;
}

.tag-pointer {
  cursor: pointer;
}

.tag-copy-indicator {
  display: none;
  color: var(--bg-element-color);
}

.tag-copy:hover ~ .tag-copy-indicator,
.tag-copy-indicator-shown {
  display: inline;
  color: var(--accent-color);
}
</style>
