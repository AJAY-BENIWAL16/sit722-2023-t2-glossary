var express = require('express');
var router = express.Router();





const items = [
  { 'id': 1, 'Term': 'DevOps',
  'Description': 'DevOps is a software development methodology that aims to mitigate the gap between development and operations teams. It accelerates the software development process, increases efficiency, and ensures faster and more reliable releases.',
  'reference': 'SearchITOperations. (n.d.). What Is DevOps? The Ultimate Guide. [online] Available at: https://www.techtarget.com/searchitoperations/definition/DevOps.' },

{ 'id': 2, 'Term': 'SDLC',
  'Description': 'The Software Development Life Cycle is a structured process that produces high-quality software efficiently. It has six phases and different models like waterfall, spiral, and Agile to ensure well-tested and production-ready software in the shortest possible time.',
  'reference': 'Altvater, A. (2020). What is SDLC? Understand the Software Development Life Cycle. [online] Stackify. Available at: https://stackify.com/what-is-sdlc/.' },

{ 'id': 3, 'Term': 'Cloud Computing',
  'Description': 'Cloud computing is a new method where IT resources are accessible via the Internet with flexible pay-as-you-go pricing that eliminates the need for physical data centers and allows access to computing power, storage, and databases as required from a cloud service provider.',
  'reference': 'AWS (2022). What is Cloud Computing? - Amazon Web Services. [online] Amazon Web Services, Inc. Available at: https://aws.amazon.com/what-is-cloud-computing/.' },

{ 'id': 4, 'Term': 'VS Code',
  'Description': 'Visual Studio Code is a free source code editor for desktop and web use. It is compatible with Windows, macOS, and Linux, and includes built-in support for JavaScript, Node.js, and an extensive range of extensions for various programming languages, runtimes, environments, and cloud services.',
  'reference': 'Heller, M. (2022). What is Visual Studio Code? Microsoft’s extensible code editor. [online] InfoWorld. Available at: https://www.infoworld.com/article/3666488/what-is-visual-studio-code-microsofts-extensible-code-editor.html.' },

{ 'id': 5, 'Term': 'Microservices',
  'Description': 'Microservices architecture is a development approach where applications are constructed from small, modular services, each with a defined API for seamless communication with other services, enabling flexibility and scalability.',
  'reference': 'SearchAppArchitecture. (n.d.). What are Microservices? [online] Available at: https://www.techtarget.com/searchapparchitecture/definition/microservices.' },

{ 'id': 6, 'Term': 'Git',
  'Description': 'Git, a DevOps tool, is an open-source version control system for efficient source code management for projects of all sizes. Git enables collaborative work and seamless tracking of code changes by multiple developers.',
  'reference': 'Simplilearn.com. (n.d.). What is Git: Features, Command and Workflow in Git. [online] Available at: https://www.simplilearn.com/tutorials/git-tutorial/what-is-git.' },

{ 'id': 7, 'Term': 'Virtual Machine',
  'Description': 'A virtual machine (VM) is a software-based emulation of a computer system, including its hardware components, running on top of a physical host machine. It allows multiple operating systems to coexist on the same physical hardware, enabling efficient utilization of resources and isolation of applications.',
  'reference': 'Inc, Dz. (2017). 48 DevOps Terms You Should Know (A DevOps Glossary). [online] Medium. Available at: https://medium.com/@DZoneInc/48-devops-terms-you-should-know-a-devops-glossary-37e60fd23752.' },

{ 'id': 8, 'Term': 'Node.js',
  'Description': 'Node.js, an open-source platform, offers cross-platform compatibility, functioning on Linux, macOS, and Windows without reliance on specific operating systems. As a JavaScript runtime environment, Node.js enables the execution of JavaScript code, providing the necessary environment to run and perform tasks written in the language.',
  'reference': 'Semah, B. (2022). What Exactly is Node.js? Explained for Beginners. [online] freeCodeCamp.org. Available at: https://www.freecodecamp.org/news/what-is-node-js/.' },

{ 'id': 9, 'Term': 'Blockchain',
  'Description': 'Blockchain enables secure information sharing by utilizing distributed databases or ledgers, where nodes from public or private networks work collaboratively to update the system.',
  'reference': 'McKinsey (2022). What is blockchain? | McKinsey. [online] www.mckinsey.com. Available at: https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-blockchain.' },

{ 'id': 10, 'Term': 'Agile Methodology',
  'Description': 'The Agile methodology is a project management approach that focuses on breaking projects into phases and prioritizing continuous collaboration and improvement. Teams follow a cyclic process of planning, execution, and evaluation to achieve flexibility and adaptability throughout the project lifecycle.',
  'reference': 'Atlassian (n.d.). What is Agile? [online] Atlassian. Available at: https://www.atlassian.com/agile#:~:text=What%20is%20the%20Agile%20methodology.' },

{ 'id': 11, 'Term': 'Plan', 
  'Description': 'In this stage, project objectives, scope, and requirements are defined, and a roadmap is created to guide the software development process. Effective planning ensures clear communication among stakeholders and establishes a solid foundation for successful project execution.',
  'reference': 'Team, C. (no date) The 7 DevOps Lifecycle Phases: How To Manage Costs At Each Step, www.cloudzero.com. Available at: https://www.cloudzero.com/blog/devops-lifecycle' },

{ 'id': 12, 'Term': 'Create',
  'Description': 'The create stage involves the actual development process, where software engineers write code, design databases, and create user interfaces based on the project requirements. This stage is critical for transforming the planned ideas into tangible software solutions.',
  'reference': 'JakobTheDev (2020) The Eight Phases of a DevOps Pipeline, Medium. Available at: https://medium.com/taptuit/the-eight-phases-of-a-devops-pipeline-fda53ec9bba.' },

{ 'id': 13, 'Term': 'Verify',
  'Description': 'In the verify stage, the software undergoes rigorous testing and validation against predefined requirements and performance criteria. This process ensures that the software functions as intended and meets the desired quality standards before moving to production.',
  'reference': 'Team, C. (no date) The 7 DevOps Lifecycle Phases: How To Manage Costs At Each Step, www.cloudzero.com. Available at: https://www.cloudzero.com/blog/devops-lifecycle' },

{ 'id': 14, 'Term': 'Preprod (or Staging)',
  'Description': 'Preproduction, also known as staging, provides a controlled environment for testing the software in a production-like setting before actual deployment. It allows for identifying and resolving potential issues, minimizing risks during the actual release.',
  'reference': 'Team, C. (no date) The 7 DevOps Lifecycle Phases: How To Manage Costs At Each Step, www.cloudzero.com. Available at: https://www.cloudzero.com/blog/devops-lifecycle' },

{ 'id': 15, 'Term': 'Release',
  'Description': 'The release stage marks the deployment of the tested and verified software to the production environment, making it available to end-users. A well-executed release process ensures a smooth transition from development to the live environment.',
  'reference': 'JakobTheDev (2020) The Eight Phases of a DevOps Pipeline, Medium. Available at: https://medium.com/taptuit/the-eight-phases-of-a-devops-pipeline-fda53ec9bba.' },

{ 'id': 16, 'Term': 'Configure',
  'Description': 'During the configure stage, the software configuration is managed to ensure it can adapt to changing requirements or environments seamlessly. Proper configuration management streamlines the maintenance process and reduces the chances of errors caused by misconfiguration.',
  'reference': 'Team, C. (no date) The 7 DevOps Lifecycle Phases: How To Manage Costs At Each Step, www.cloudzero.com. Available at: https://www.cloudzero.com/blog/devops-lifecycle' },

{ 'id': 17, 'Term': 'Monitor',
  'Description': 'The monitor stage involves continuous monitoring of the live system to detect performance issues, security threats, and user behavior patterns. Real-time monitoring enables proactive identification and resolution of problems, ensuring a reliable and optimized software environment.',
  'reference': 'JakobTheDev (2020) The Eight Phases of a DevOps Pipeline, Medium. Available at: https://medium.com/taptuit/the-eight-phases-of-a-devops-pipeline-fda53ec9bba.' },

{ 'id': 18, 'Term': 'Continuous Integration (CI)',
  'Description': 'Continuous Integration (CI) is the practice of automatically integrating code changes into a shared repository multiple times a day. It involves running automated tests to ensure early detection of issues and maintaining code quality.',
  'reference': 'Ref: What is CI/CD? | GitLab (no date) about.gitlab.com. Available at: https://about.gitlab.com/topics/ci-cd/.' },

{ 'id': 19, 'Term': 'Continuous Delivery (CD)',
  'Description': 'Continuous Delivery (CD) is an extension of CI where code changes are automatically tested, integrated, and deployed to a staging environment for further testing and validation. It enables a faster and more reliable software release process.',
  'reference': 'Ref: What is CI/CD? | GitLab (no date) about.gitlab.com. Available at: https://about.gitlab.com/topics/ci-cd/.' },

{ 'id': 20, 'Term': 'Infrastructure as Code (IaC)',
  'Description': 'Infrastructure as Code (IaC) is the practice of managing and provisioning infrastructure using code and configuration files. It allows for versioning, repeatability, and consistency in infrastructure setup, enabling more efficient and scalable infrastructure management.',
  'reference': 'What is Infrastructure as Code (IaC)? (no date) www.redhat.com. Available at: https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac#:~:text=choose%20Red%20Hat%3F- (Accessed: 5 August 2023).' }

  
  
  
];



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'GLOSSARY', glossary: items });
});

module.exports = router;

