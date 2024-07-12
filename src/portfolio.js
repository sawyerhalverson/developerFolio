/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 1800 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Sawyer Halverson",
  title: "Hey, I'm Sawyer",
  subTitle: (
    <>
I'm passionate about full stack development! I love learning, problem-solving, and building solutions that are not only useful but also have a meaningful impact.    </>
  ),
  
  resumeLink:
    "https://drive.google.com/file/d/1ccK2oR-c4KCj1SjRHLSiPkXspLVU1-Wc/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
  
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/sawyerhalverson",
  linkedin: "https://www.linkedin.com/in/sawyerhalverson/",
  gmail: "shalverson321@gmail.com",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I Do",
  subTitle: "Here are some of my favorite technologies for building!",
  skills: [
    emoji(
      ""
    ),
    emoji(""),
    emoji(
      ""
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */
softwareSkills: [
  {
    skillName: "JavaScript",
    fontAwesomeClassname: "fab fa-js"
  },
  {
    skillName: "Swift",
    fontAwesomeClassname: "fab fa-swift"
  },
  {
    skillName: "Python",
    fontAwesomeClassname: "fab fa-python"
  },
  {
    skillName: "React JS",
    fontAwesomeClassname: "fab fa-react"
  },
  {
    skillName: "Node JS",
    fontAwesomeClassname: "fab fa-node"
  },
  {
    skillName: "AWS",
    fontAwesomeClassname: "fab fa-aws"
  },
  {
    skillName: "Docker",
    fontAwesomeClassname: "fab fa-docker"
  },
  {
    skillName: ".NET",
    customIconUrl: "dotnet.svg"
  },
  {
    skillName: "Azure DevOps",
    customIconUrl: "azure-devops.svg"
  },
  {
    skillName: "HTML/CSS",
    customIconUrl: "html-css.svg"
  },
  {
    skillName: "R",
    customIconUrl: "Rlogo.svg"
  },
  {
    skillName: "C#",
    customIconUrl: "cshrp.svg"
  },
  {
    skillName: "C++",
    customIconUrl: "cplusplus.svg"
  },
  {
    skillName: "SQL",
    customIconUrl: "sql-database-generic.svg"
  },
  {
    skillName: "Salesforce Apex",
    customIconUrl: "sf.svg"
  },
  {
    skillName: "Blazor",
    customIconUrl: "blazor.svg"
  },
  {
    skillName: "Firebase",
    customIconUrl: "Firebase_icon.svg"
  },
],



  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Brigham Young University",
      logo: require("./assets/images/byugood.png"),
      subHeader: "Master of Science in Information Systems Management",
      duration: "September 2023 - April 2025",
      // desc: "Emphasis in Software Engineering. Graduated summa cum laude",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Brigham Young University",
      logo: require("./assets/images/byugood.png"),
      subHeader: "Bachelor of Science in Information Systems",
      duration: "September 2018 - April 2023",
      // desc: "Graduated summa cum laude",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: false, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Frontend/Design", //Insert stack or technology you have experience in
      progressPercentage: "90%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Backend",
      progressPercentage: "70%"
    },
    {
      Stack: "Programming",
      progressPercentage: "60%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Software Engineer",
      company: "Garmin",
      companylogo: require("./assets/images/garmin.png"),
      date: "May 2024 – August 2024",
      desc: "Developed a full-stack application with C# and Blazor for managing vast activity data from Garmin devices.",
      descBullets: [
        "Optimized data stream for hundreds of terabytes of data.",
        "Built user interface for streamlined user interaction.",
        "Deployed on Microsoft Azure and IIS."
      ]
      
      
    },
    {
      role: "Salesforce Software Engineer",
      company: "Solvd.cloud",
      companylogo: require("./assets/images/solvd.jpeg"),
      date: "May 2023 – September 2023",
      desc: "Developed multiple custom Apex applications in Salesforce, conducting rigorous QA testing for each.",
      descBullets: [
        "Managed cloud deployments from sandbox to production for enterprise-scale clients.",
        "Performed 5 rounds of QA testing for each application"
      ]
        },
    {
      role: "Software Engineer",
      company: "Moxie",
      companylogo: require("./assets/images/moxie.jpeg"),
      date: "Apr 2022 – May 2023",
      desc: "Engineered Python-based data pipelines using APIs for efficient data transfer.",
      descBullets: [
        "Maintained Snowflake database schema for extensive employee and transaction data.",
        "Built custom React app for employee use in the field."
      ]
          }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: false // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Projects",
  subtitle: "Some of my favorite personal projects",
  projects: [
    {
      image: require("./assets/images/stuberlogo.png"),
      projectName: "Stuber",
      projectDesc: "Rideshare app for students.",
      footerLink: [
        {
          name: "See more",
          url: "/stuber"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/finalportol.png"),
      projectName: "Portol",
      projectDesc: "Manage all your NFC tags.",
      footerLink: [
        {
          name: "See more",
          url: "/portol"
        }
      ]
    },
    {
      image: require("./assets/images/stretchifylogo.png"),
      projectName: "Stretchify",
      projectDesc: "Make stretching fun.",
      footerLink: [
        {
          name: "See more",
          url: "/stretchify"
        }
      ]
    },
    {
      image: require("./assets/images/lifepilot2.png"),
      projectName: "Lifepilot",
      projectDesc: "Take control of your time.",
      footerLink: [
        {
          name: "See more",
          url: "/lifepilot"
        }
      ]
    },
    
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications"),
  // subtitle:
  //   "Achievements, Certifications, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "AWS Certified Solutions Architect",
      subtitle:
        "",
      image: require("./assets/images/awssalogo.png"),
      imageAlt: "Google Code-In Logo",
      footerLink: [
        {
          name: "View Certification",
          url: "https://drive.google.com/file/d/12em5Qw72J81Ri7OXvBqZQEDP2vGm6emD/view?usp=sharing"
        }
      ]
    },
    {
      title: "BYU Sandbox Hackathon - First Place",
      subtitle:
        "",
      image: require("./assets/images/sandboxlogo.png"),
      imageAlt: "Google Assistant Action Logo",
      footerLink: [
        {
          name: "View Hackathon Project",
          url: "https://www.youtube.com/watch?v=UQAv3xu3fVM"
        }
      ]
    },

    {
      title: "Salesforce Admin & Platform App Builder",
      subtitle: "",
      image: require("./assets/images/sfreal.png"),
      imageAlt: "PWA Logo",
      footerLink: [
        {name: "View Admin Certification", url: "https://drive.google.com/file/d/1QFlv5tcpyntlNLul09cd3Hs4khiS3Tgf/view?usp=sharing"},
        {
          name: "View PAB Certification",
          url: "https://drive.google.com/file/d/1QnCvHXIOVrUHRQLkZBVoUZwwSF0pZ8Wu/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.usejournal.com/create-a-google-assistant-action-and-win-a-google-t-shirt-and-cloud-credits-4a8d86d76eae",
      title: "Win a Google Assistant Tshirt and $200 in Google Cloud Credits",
      description:
        "Do you want to win $200 and Google Assistant Tshirt by creating a Google Assistant Action in less then 30 min?"
    },
    {
      url: "https://medium.com/@saadpasta/why-react-is-the-best-5a97563f423e",
      title: "Why REACT is The Best?",
      description:
        "React is a JavaScript library for building User Interface. It is maintained by Facebook and a community of individual developers and companies."
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "Build Actions For Google Assistant",
      subtitle: "Codelab at GDG DevFest Karachi 2019",
      slides_url: "https://bit.ly/saadpasta-slides",
      event_url: "https://www.facebook.com/events/2339906106275053/"
    }
  ],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: true // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me"),
  subtitle:
    "",
  // number: "+92-0000000000",
  email_address: "shalverson321@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set true to display this section, defaults to false
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
