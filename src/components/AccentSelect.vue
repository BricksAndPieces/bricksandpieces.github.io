<script setup>
import { onMounted, ref } from "vue";

let accentIdx = ref(0);
let accentColors = ["green", "blue", "yellow"];

onMounted(() => {
  const stored = localStorage.getItem("accent");
  if (stored !== undefined && accentColors.includes(stored))
    accentIdx.value = accentColors.indexOf(stored);

  setAccent();
});

function cycleAccentColor() {
  accentIdx.value++;
  accentIdx.value %= accentColors.length;
  setAccent();
}

function setAccent() {
  document.documentElement.setAttribute(
    "accent",
    accentColors[accentIdx.value]
  );
  localStorage.setItem("accent", accentColors[accentIdx.value]);
}
</script>

<template>
  <div class="container" @click="cycleAccentColor()">
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 14c-.092.064-2 2.083-2 3.5 0 1.494.949 2.448 2 2.5.906.044 2-.891 2-2.5 0-1.5-1.908-3.436-2-3.5zM9.586 20c.378.378.88.586 1.414.586s1.036-.208 1.414-.586l7-7-.707-.707L11 4.586 8.707 2.293 7.293 3.707 9.586 6 4 11.586c-.378.378-.586.88-.586 1.414s.208 1.036.586 1.414L9.586 20zM11 7.414 16.586 13H5.414L11 7.414z"
      />
    </svg>
  </div>
</template>

<style scoped lang="scss">
.container {
  width: 40px;
  aspect-ratio: 1/1;
  display: flex;
  justify-content: center;
  align-items: center;

  background-color: var(--bg-element-color);
  border-radius: 50%;
  cursor: pointer;

  svg {
    width: 30px;
    aspect-ratio: 1/1;

    path {
      fill: var(--accent-color);
      transition: fill var(--color-transition-duration);
    }
  }
}

.hidden {
  display: none;
}
</style>
