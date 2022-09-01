<script setup>
import { onMounted, reactive } from "vue";

const state = reactive({ theme: "dark" });

onMounted(() => {
  const preferred = window.matchMedia("(prefers-color-scheme: dark)").matches
    ? "dark"
    : "light";

  setTheme(localStorage.getItem("theme") ?? preferred);
});

function toggleTheme() {
  const current = localStorage.getItem("theme");
  setTheme(current === "light" ? "dark" : "light");
}

function setTheme(theme) {
  localStorage.setItem("theme", theme);
  document.documentElement.setAttribute("theme", theme);
  state.theme = theme;
}
</script>

<template>
  <div class="container" @click="toggleTheme()">
    <svg
      width="24px"
      height="24px"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g
        id="🔍-Product-Icons"
        stroke="none"
        stroke-width="1"
        fill="none"
        fill-rule="evenodd"
      >
        <g
          id="ic_fluent_dark_theme_24_regular"
          fill="#212121"
          fill-rule="nonzero"
        >
          >
          <path
            d="M12,22 C17.5228475,22 22,17.5228475 22,12 C22,6.4771525 17.5228475,2 12,2 C6.4771525,2 2,6.4771525 2,12 C2,17.5228475 6.4771525,22 12,22 Z M12,20.5 L12,3.5 C16.6944204,3.5 20.5,7.30557963 20.5,12 C20.5,16.6944204 16.6944204,20.5 12,20.5 Z"
            id="🎨-Color"
          ></path>
        </g>
      </g>
    </svg>
  </div>
</template>

<style scoped lang="scss">
@import "../assets/base.scss";

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
    width: 20px;
    aspect-ratio: 1/1;

    path {
      fill: var(--accent-color);
    }
  }
}
</style>
