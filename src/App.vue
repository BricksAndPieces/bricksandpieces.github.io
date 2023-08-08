<script setup>
import ProjectCard from "./components/ProjectCard.vue";
import TimelineItem from "./components/TimelineItem.vue";
import CodeTag from "./components/CodeTag.vue";

import { experience, projects, education } from "./content.js";
</script>

<template>
  <ul class="circles">
    <li v-for="i in 10" :key="i"></li>
  </ul>

  <div class="centered">
    <div class="centered-container">
      <CodeTag text="head" />
      <CodeTag text="about" :indent="true" />

      <h1>Ishan Shetty</h1>
      <h3 style="margin-bottom: 12px">
        Creative Coder, Full-Stack Developer & Honors Undergraduate Student.
        Interested in Machine Learning, its applications, and the problems that
        can be solved using this technology.
      </h3>

      <h4 style="margin-top: 0; display: flex; gap: 15px">
        <a href="https://www.linkedin.com/in/ishan-shetty/" target="_blank"
          >LinkedIn <i class="devicon-linkedin-plain"
        /></a>
        <a href="https://www.github.com/BricksAndPieces" target="_blank"
          >Github <i class="devicon-github-plain"
        /></a>
      </h4>

      <a href="/resume.pdf" target="_blank">
        <button>
          <span>VIEW MY RESUME</span>
        </button>
      </a>

      <CodeTag text="about" :indent="true" :closing="true" />
      <CodeTag text="head" :closing="true" />

      <CodeTag text="body" />
      <CodeTag text="experience" :indent="true" />

      <h2>Here are some of the places I've worked at...</h2>
      <TimelineItem
        v-for="(e, index) in experience"
        :key="e"
        :title="e.title"
        :subtitle="e.subtitle"
        :logo="e.logo"
        :last-item="index === experience.length - 1"
      >
        <template v-for="d in e.description" :key="d">
          <p v-if="typeof d === 'string'">{{ d }}</p>
          <ul v-else>
            <li v-for="l in d" :key="l">
              <p>{{ l }}</p>
            </li>
          </ul>
        </template>
        <p>Tools / Technologies used:</p>
        <div class="tools-icons-container">
          <i v-for="t in e.tools" :key="t" :class="t" />
        </div>
      </TimelineItem>

      <CodeTag text="experience" :indent="true" :closing="true" />
      <CodeTag text="projects" :indent="true" />

      <h2>Here are some of the projects I've worked on...</h2>
      <div class="project-container">
        <ProjectCard
          v-for="p in projects"
          :key="p"
          :title="p.title"
          :message="p.message"
          :languages="p.languages"
          :github-url="p.githubUrl"
          :external-url="p.externalUrl"
          :thumbnail="p.image"
        />
      </div>

      <a href="https://github.com/bricksandpieces" target="_blank">
        <button>
          <span>SEE MORE ON GITHUB</span>
        </button>
      </a>

      <CodeTag text="projects" :indent="true" :closing="true" />
      <CodeTag text="education" :indent="true" />

      <h2>This is where I got my formal education from...</h2>
      <TimelineItem
        v-for="(e, index) in education"
        :key="e"
        :title="e.title"
        :subtitle="e.subtitle"
        :logo="e.logo"
        :last-item="index === education.length - 1"
      >
        <template v-for="d in e.description" :key="d">
          <p v-if="typeof d === 'string'">{{ d }}</p>
          <ul v-else>
            <li v-for="l in d" :key="l">
              <p v-html="l" />
            </li>
          </ul>
        </template>
      </TimelineItem>

      <CodeTag text="education" :indent="true" :closing="true" />
      <CodeTag text="body" :closing="true" />

      <CodeTag text="footer" />

      <p>
        Made with <a href="https://vuejs.org/" target="_blank">Vue</a> by Ishan
        Shetty
      </p>

      <button onclick="window.scrollTo(0, 0)">
        <span>BACK TO TOP</span>
      </button>

      <CodeTag text="footer" :closing="true" />
    </div>
  </div>
</template>

<style scoped lang="scss">
@import "assets/base.scss";
@import "assets/animated-circles.css";

.centered {
  display: flex;
  justify-content: center;

  .centered-container {
    display: block;
    width: min(600px, 100vw);
    padding: 20px;
    z-index: 1;
  }
}

.tools-icons-container {
  display: flex;
  gap: 10px;
  align-items: center;
  font-size: 25px;
  margin-bottom: 20px;
  flex-wrap: wrap;
}

.project-container {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-bottom: 20px;
}

button {
  background-color: var(--accent-color);
  transition: background-color var(--color-transition-duration);
  padding: 10px;
  border-radius: 10px;
  border: none;
  cursor: pointer;

  span {
    color: #323437;
    font-weight: bold;
    font-size: 18px;
  }
}

h1,
h2 {
  color: var(--accent-color);
}

h3 {
  font-weight: 500;
}
</style>
