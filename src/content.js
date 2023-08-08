import acuityLogo from "./assets/logos/acuity-logo.jpg";
import cignaLogo from "./assets/logos/cigna-logo.jpg";
import eitLogo from "./assets/logos/eit-logo.jpg";
import ephsLogo from "./assets/logos/ephs-logo.jpg";
import talonLogo from "./assets/logos/talon-logo.jpg";
import umnLogo from "./assets/logos/umn-logo.jpg";

import projectBoids from "./assets/project-demo/boids.gif";
import projectDiscord from "./assets/project-demo/discord-bot.png";
import projectHanoi from "./assets/project-demo/hanoi-robot.gif";
import projectMario from "./assets/project-demo/mario-ai.gif";
import projectSnake from "./assets/project-demo/snake-ai.gif";

export const experience = [
  {
    title: "Technology Intern",
    subtitle: "The Cigna Group | Summer 2023",
    logo: cignaLogo,
    tools: [
      "fa-brands fa-aws",
      "devicon-terraform-plain",
      "devicon-java-plain",
      "devicon-python-plain",
      "devicon-jupyter-plain-wordmark",
    ],
    description: [
      "System Architect (Role):",
      [
        "Engaged as a System Architect to observe architectural decision-making in a large enterprise company",
        "Created a pre-modernization claims process database diagram for documentation purposes",
      ],
      "Cloud Engineer (Innovation Project):",
      [
        "Built an analytics data pipeline and reporting api for the admin side of a survey website using AWS and terraform",
        "Utilized SPARQL to query AWS Neptune and provide analytics data to the frontend using API Gateway",
      ],
    ],
  },
  {
    title: "Software Engineering Intern",
    subtitle: "AcuityMD | Summer 2022",
    logo: acuityLogo,
    tools: [
      "devicon-react-plain",
      "devicon-graphql-plain",
      "devicon-typescript-plain",
      "devicon-html5-plain-wordmark",
      "devicon-css3-plain-wordmark",
      "devicon-docker-plain",
      "devicon-jest-plain",
    ],
    description: [
      [
        "Collaborated within an agile environment to deliver features for a sales platform tailored to medical device companies",
        "Developed an interactive map using the Mapbox API, enabling clients to effortlessly create sales territories and regions",
        "Implemented the frontend of an @mentions and notifications system, fostering seamless user interactions.",
      ],
    ],
  },
  {
    title: "Associate Software Engineer",
    subtitle: "ExperienceIT | 2021 - 2022",
    logo: eitLogo,
    tools: [
      "devicon-angularjs-plain",
      "devicon-typescript-plain",
      "devicon-html5-plain-wordmark",
      "devicon-css3-plain-wordmark",
      "devicon-docker-plain",
    ],
    description: [
      [
        "Contributed to a small, agile team, actively engaged in diverse projects for various clients",
        "Consulted for United Health Group, creating and maintaining a medical portal site utilized by doctors",
        "Built and deployed a full-stack web app for a horse barreling startup based on client requirements and feedback",
      ],
    ],
  },
  {
    title: "Captain",
    subtitle: "FRC Team 2502 | 2020 - 2021",
    logo: talonLogo,
    tools: [
      "devicon-java-plain",
      "devicon-wordpress-plain",
      "devicon-html5-plain-wordmark",
      "devicon-css3-plain-wordmark",
    ],
    description: [
      [
        "One of four team captains elected by a 40+ member team in charge of five leads and subteams",
        "Conducted weekly team meetings, monthly leadership meetings and maintained effective communication via email",
        "Fostered relationships and promoted team brand by engaging with sponsors and community",
      ],
    ],
  },
  // {
  //   title: "Media Lead",
  //   subtitle: "FRC Team 2502 | 2019 - 2020",
  //   logo: talonLogo,
  //   tools: [
  //     "devicon-java-plain",
  //     "devicon-wordpress-plain",
  //     "devicon-html5-plain-wordmark",
  //     "devicon-css3-plain-wordmark",
  //   ],
  //   description: [
  //     [
  //       "Selected by team captains via an application",
  //       "Media subteam was founded after I noticed a significant lack in management of our website",
  //       "In charge of maintaining team website, social media, and photography equipment",
  //       "Revamped the team website over the course of a year",
  //     ],
  //   ],
  // },
];

export const projects = [
  {
    title: "Tower of Hanoi Robot",
    message:
      "A robot that is able to solve the Tower of Hanoi puzzle using a custom algorithm. The robot is able to solve the puzzle in a reasonable amount of time and is able to solve the puzzle for any number of disks.",
    languages: ["python", "ubuntu"],
    githubUrl: "https://github.com/grude013/csci5551-tower-of-hanoi",
    image: projectHanoi,
  },
  {
    title: "Snake AI",
    message:
      "A neural network coded entirely from scratch using the java standard libraries. The code repository includes the neural network, traditional training algorithms and genetic training algorithms. The project also includes multiple examples of the AI in use - most interesting of which is the Snake AI.",
    languages: ["java"],
    githubUrl: "https://github.com/BricksAndPieces/Neural-Network-Framework",
    image: projectSnake,
  },
  {
    title: "Super Mario Bros AI",
    message:
      "An AI made using the NEAT algorithm which is able to play the NES Super Mario Bros and SNES Super Mario World. The AI is currently at a state where it is able to easily beat multiple levels from Super Mario Bros. Made using python and OpenAI Gym Retro.",
    languages: ["python"],
    image: projectMario,
  },
  {
    title: "Discord Bot",
    message:
      "A bot that uses the Reddit and Discord APIs to link the two services together. Users on the Discord chat service were able to access posts on Reddit through Discord. This bot was marketed and showcased on several of the largest bot listing sites and was used by over 300 servers and accessible by nearly 90,000 users.",
    languages: ["java"],
    image: projectDiscord,
  },
  {
    title: "Boids Flocking Ecosystem",
    message:
      "A java simulation of the boids algorithm which mimics the flocking behavior seen in fish and birds. Simulation includes the default flocking algorithm and a modified version with multiple flocks with a predator and prey relationship.",
    languages: ["java"],
    githubUrl: "https://github.com/BricksAndPieces/Boids-Ecosystem/",
    externalUrl: "https://bricksandpieces.github.io/Boids-Ecosystem/",
    image: projectBoids,
  },
];

export const education = [
  {
    title: "University of Minnesota - Twin Cities",
    subtitle: "BS in Data/Computer Science | 2020 - 2024",
    logo: umnLogo,
    description: [
      "Attended the University of Minnesota - Twin Cities through the PSEO (Post Secondary Enrollment Opportunity) program during my senior year of high school. Enrolled at UMN for college and currently a senior in terms of credits.",
      "Relevant Courses:",
      [
        "CSCI 2021 - Machine Architecture and Organization",
        "STAT 3301 - Regression and Statistical Computing",
        "CSCI 4061 - Introduction to Operating Systems",
        "CSCI 5551 - Introduction to Intelligent Robotic Systems",
        "CSCI 4511W - Introduction to Artificial Intelligence",
      ],
      // "Activities:",
      // [
      //   "TA for CSCI 3081W - Program Design and Development",
      //   "Research with the Drone Research Lab",
      // ],
      "Achievements:",
      [
        'Minnehack 2nd Place Winner - <a href="https://devpost.com/software/burnout-8q0ula">Burnout</a>',
        'Minnehack Best use of Twilio - <a href="https://devpost.com/software/burnout-8q0ula">Burnout</a>',
      ],
    ],
  },
  {
    title: "Eden Prairie High School",
    subtitle: "High School Diploma | 2016 - 2021",
    logo: ephsLogo,
    lastItem: true,
    description: [
      "Attended Eden Prairie High School for grades 9-12 and took several CS relevant courses during this time period. Also participated in multiple clubs that allowed for more extra-circular experiences.",
      "Relevant Courses:",
      [
        "AP Computer Science Principles",
        "AP Computer Science",
        "iOS Development",
      ],
      "Activities:",
      [
        "FIRST Robotics - Team 2502 (Talon Robotics)",
        "Futurist's Academy",
        "Math Team",
      ],
      "Achievements:",
      ["National Merit Scholar", "AP Scholar with Distinction"],
    ],
  },
];
