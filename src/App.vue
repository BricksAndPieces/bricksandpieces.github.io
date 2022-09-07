<script setup>
import ProjectCard from "./components/ProjectCard.vue";
import TimelineItem from "./components/TimelineItem.vue";
import CodeTag from "./components/CodeTag.vue";
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
        title="Software Engineering Intern"
        subtitle="AcuityMD | Summer 2022"
      >
        <template #logo>
          <img src="./assets/logos/acuity-logo.jpg" alt="Logo" />
        </template>
        <ul>
          <li>
            <p>
              Built an interactive map using the Mapbox API to allow clients to
              create sales territories & regions
            </p>
          </li>
          <li>
            <p>
              Built the frontend aspect of an @mentions and notifications system
              to allow users to mention each other
            </p>
          </li>
          <li><p>Operated within a fully-remote, agile team</p></li>
        </ul>
        <p>Tools / Technologies used:</p>
        <div class="tools-icons-container">
          <i class="devicon-react-plain" />
          <i class="devicon-graphql-plain" />
          <i class="devicon-typescript-plain" />
          <i class="devicon-html5-plain-wordmark" />
          <i class="devicon-css3-plain-wordmark" />
          <i class="devicon-docker-plain" />
          <i class="devicon-jest-plain" />
        </div>
      </TimelineItem>
      <TimelineItem
        title="Associate Software Engineer I"
        subtitle="ExperienceIT | 2021 - 2022"
      >
        <template #logo>
          <img src="./assets/logos/eit-logo.jpg" alt="Logo" />
        </template>
        <ul>
          <li>
            <p>
              Worked for United Health Group as a consultant to create and
              maintain a medical portal site used by doctors
            </p>
          </li>
          <li>
            <p>
              Built a full-stack web application for a horse barreling startup
              and moved to a production environment
            </p>
          </li>
          <li>
            <p>
              Lead frontend developer on the project working with Angular and
              Angular Material
            </p>
          </li>
          <li><p>Operated within a hybrid, agile team</p></li>
        </ul>
        <p>Tools / Technologies used:</p>
        <div class="tools-icons-container">
          <i class="devicon-angularjs-plain" />
          <i class="devicon-typescript-plain" />
          <i class="devicon-html5-plain-wordmark" />
          <i class="devicon-css3-plain-wordmark" />
          <i class="devicon-docker-plain" />
        </div>
      </TimelineItem>
      <TimelineItem title="Captain" subtitle="FRC Team 2502 | 2020 - 2021">
        <template #logo>
          <img src="./assets/logos/talon-logo.jpg" alt="Logo" />
        </template>
        <ul>
          <li><p>Elected by the team via an application</p></li>
          <li>
            <p>One of four team captains in charge of a 40+ member team</p>
          </li>
          <li><p>Supervise 5 business leads and subteams</p></li>
          <li>
            <p>
              Conduct weekly team meetings, captain meetings, and monthly team
              leadership meetings
            </p>
          </li>
          <li>
            <p>
              Communicate effectively with the team through weekly emails and
              over Slack
            </p>
          </li>
          <li>
            <p>Foster relationships by engaging with sponsors and community</p>
          </li>
          <li><p>Promote team brand</p></li>
        </ul>
        <p>Tools / Technologies used:</p>
        <div class="tools-icons-container">
          <i class="devicon-java-plain" />
          <i class="devicon-wordpress-plain" />
          <i class="devicon-html5-plain-wordmark" />
          <i class="devicon-css3-plain-wordmark" />
        </div>
      </TimelineItem>
      <TimelineItem
        title="Media Lead"
        subtitle="FRC Team 2502 | 2019 - 2020"
        :last-item="true"
      >
        <template #logo>
          <img src="./assets/logos/talon-logo.jpg" alt="Logo" />
        </template>
        <ul>
          <li><p>Selected by team captains via an application</p></li>
          <li>
            <p>
              Media subteam was founded after I noticed a significant lack in
              management of our website
            </p>
          </li>
          <li>
            <p>
              In charge of maintaining team website, social media, and
              photography equipment
            </p>
          </li>
          <li><p>Revamped the team website over the course of a year</p></li>
        </ul>
        <p>Tools / Technologies used:</p>
        <div class="tools-icons-container">
          <i class="devicon-java-plain" />
          <i class="devicon-wordpress-plain" />
          <i class="devicon-html5-plain-wordmark" />
          <i class="devicon-css3-plain-wordmark" />
        </div>
      </TimelineItem>

      <CodeTag text="experience" :indent="true" :closing="true" />
      <CodeTag text="projects" :indent="true" />

      <h2>Here are some of the projects I've worked on...</h2>
      <div style="display: flex; flex-direction: column; gap: 20px">
        <ProjectCard
          title="Snake AI"
          message="
            A neural network coded entirely from scratch using the java standard libraries. The code repository includes
            the neural network, traditional training algorithms and genetic training algorithms. The project also
            includes multiple examples of the AI in use - most interesting of which is the Snake AI.
          "
          :languages="['java', '']"
          github-url="https://github.com/BricksAndPieces/Neural-Network-Framework"
        >
          <template #image>
            <img
              src="@/assets/project-demo/snake-ai.gif"
              alt="Project Demo Image"
            />
          </template>
        </ProjectCard>
        <ProjectCard
          title="Super Mario Bros AI"
          message="
            An AI made using the NEAT algorithm which is able to play the NES Super Mario Bros and SNES Super Mario
            World. The AI is currently at a state where it is able to easily beat multiple levels from Super Mario Bros.
            Made using python and OpenAI Gym Retro.
          "
          :languages="['python']"
          ><template #image>
            <img
              src="@/assets/project-demo/mario-ai.gif"
              alt="Project Demo Image"
            /> </template
        ></ProjectCard>
        <ProjectCard
          title="Discord Bot"
          message="
            A bot that uses the Reddit and Discord APIs to link the two services together. Users on the Discord chat
            service were able to access posts on Reddit through Discord. This bot was marketed and showcased on several
            of the largest bot listing sites and was used by over 300 servers and accessible by nearly 90,000 users.
           "
          :languages="['java']"
          ><template #image>
            <img
              src="@/assets/project-demo/discord-bot.png"
              alt="Project Demo Image"
            /> </template
        ></ProjectCard>
        <ProjectCard
          title="Boids Flocking Ecosystem"
          message="
            A java simulation of the boids algorithm which mimics the flocking behavior seen in fish and birds. Simulation
            includes the default flocking algorithm and a modified version with multiple flocks with a predator and prey
            relationship.
          "
          :languages="['java']"
          github-url="https://github.com/BricksAndPieces/Boids-Ecosystem/"
          external-url="https://bricksandpieces.github.io/Boids-Ecosystem/"
          ><template #image>
            <img
              src="@/assets/project-demo/boids.gif"
              alt="Project Demo Image"
            /> </template
        ></ProjectCard>

        <!-- Blank spacing tag -->
        <div />
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
        title="University of Minnesota - Twin Cities"
        subtitle="BS in Data/Computer Science | 2020 - 2024"
      >
        <template #logo>
          <img src="@/assets/logos/umn-logo.jpg" alt="Logo" />
        </template>
        <p>
          Attended the University of Minnesota - Twin Cities through the PSEO
          (Post Secondary Enrollment Opportunity) program during my senior year
          of high school. Enrolled at UMN for college and currently a junior in
          terms of credits.
        </p>
        <p>Relevant Courses:</p>
        <ul>
          <li><p>CSCI 2021 - Machine Architecture and Organization</p></li>
          <li><p>CSCI 2041 - Advanced Programming Principles</p></li>
          <li><p>CSCI 1913 - Intro to Algorithms and Data Structures</p></li>
        </ul>
        <p>Achievements:</p>
        <ul>
          <li>
            <p>
              Minnehack 2nd Place Winner -
              <a href="https://devpost.com/software/burnout-8q0ula">Burnout</a>
            </p>
          </li>
          <li>
            <p>
              Minnehack Best use of Twilio -
              <a href="https://devpost.com/software/burnout-8q0ula">Burnout</a>
            </p>
          </li>
        </ul>
      </TimelineItem>
      <TimelineItem
        title="Eden Prairie High School"
        subtitle="High School Diploma | 2016 - 2021"
        :last-item="true"
      >
        <template #logo>
          <img src="./assets/logos/ephs-logo.jpg" alt="Logo" />
        </template>
        <p>
          Attended Eden Prairie High School for grades 9-12 and took several CS
          relevant courses during this time period. Also participated in
          multiple clubs that allowed for more extra-circular experiences.
        </p>
        <p>Relevant Courses:</p>
        <ul>
          <li><p>AP Computer Science Principles</p></li>
          <li><p>AP Computer Science</p></li>
          <li><p>iOS Development</p></li>
        </ul>
        <p>Activities:</p>
        <ul>
          <li><p>FIRST Robotics - Team 2502 (Talon Robotics)</p></li>
          <li><p>Futurist's Academy</p></li>
          <li><p>Math Team</p></li>
        </ul>
        <p>Achievements:</p>
        <ul>
          <li><p>National Merit Scholar</p></li>
          <li><p>AP Scholar with Distinction</p></li>
        </ul>
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
