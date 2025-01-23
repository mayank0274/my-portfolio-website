export interface IProject {
  title: string;
  githubUrl: string;
  liveUrl: string;
  description: string;
  tags: string[];
  highlightInfo?: string;
}

export const TECH_STACK: string[] = [
  "html5",
  "css3",
  "javascript",
  "typescript",
  "reactjs",
  "nextjs",
  "nodejs",
  "expressjs",
  "mongodb",
  "mern stack",
  "rest api's",
  "react native"
];

export const PROJECTS_LIST: IProject[] = [
  {
    title: "iTracker",
    githubUrl: "",
    liveUrl: "",
    description:
      "A real time location sharing android application",
    tags: ["typescript", "reactjs", "react native","nodejs","expressjs","scocket.io"],
    highlightInfo: "",
  },
  {
    title: "learnSlate",
    githubUrl: "https://github.com/mayank0274/learnSlate",
    liveUrl: "https://learnnslate.netlify.app/",
    description:
      "A whiteboard application in react and fabricjs with functionalities like draw different shapes , insert image on canvas , open pdf on canvas for teaching and take notes during class",
    tags: ["javascript", "reactjs", "fabricjs", "whiteboard"],
    highlightInfo: "",
  },
  {
    title: "lets-talk",
    githubUrl: "https://github.com/mayank0274/Lets-talk",
    liveUrl: "https://lets-talks.netlify.app/",
    description:
      "A chat application in MERN stack with functionalities of one 2 one and group chats , manage groups , sending text as well as media messages,export chat etc.",
    tags: ["javascript", "reactjs", "nodejs", "expressjs", "mongodb"],
  },
  {
    title: "plugins for an open source code editor",
    liveUrl: "https://acode.app/plugin/acode.plugin.restapi",
    githubUrl: "https://github.com/mayank0274/api-tester",
    description:
      "Build some plugins/extensions for an open source android code editor like rest api tester , chatgpt plugin , color pallete generator , font icons etc",
    tags: ["javascript", "api's"],
    highlightInfo: "35k+ users",
  },
];
