var express = require('express');
var router = express.Router();





const items = [
  { 'id': 1, 'Term': 'Devops', 'Description': 'DevOps is a software development methodology that has been implemented in recent years, it aims to mitigate the gap between development and operations teams. It accelerates the  software development proccess, increase efficiency, and ensure faster and more reliable releases.', 'reference': 'SearchITOperations. (n.d.). What Is DevOps? The Ultimate Guide. [online] Available at: https://www.techtarget.com/searchitoperations/definition/DevOps. ‌' },
  { 'id': 2, 'Term': 'SDLC', 'Description': 'The Software Development Life Cycle  is a structured process that produce high-quality software efficiently. It has six phases and different models like waterfall, spiral, and Agile to ensure well-tested and production-ready software in the shortest possible time.  ', 'reference': 'Altvater, A. (2020). What is SDLC? Understand the Software Development Life Cycle. [online] Stackify. Available at: https://stackify.com/what-is-sdlc/. ' },
  { 'id': 3, 'Term': 'Cloud Computing ', 'Description': 'Cloud computing is a new method  IT resources are accessible via the Internet with flexible pay-as-you-go pricing that eliminates the need for physical data centers and allows access to computing power, storage, and databases as required from a cloud service provider. ', 'reference': 'AWS (2022). What is Cloud Computing? - Amazon Web Services. [online] Amazon Web Services, Inc. Available at: https://aws.amazon.com/what-is-cloud-computing/.' },
  { 'id': 4, 'Term': 'VS CODE', 'Description': ' Visual Studio Code is a free source code editor for desktop and web use, it is compatible with Windows, macOS, Linux, It includes built-in support for JavaScript, Node.js, and an extensive range of extensions for various programming languages, runtimes, environments, and cloud services. ', 'reference': 'Heller, M. (2022). What is Visual Studio Code? Microsoft’s extensible code editor. [online] InfoWorld. Available at: https://www.infoworld.com/article/3666488/what-is-visual-studio-code-microsofts-extensible-code-editor.html.' },
  { 'id': 5, 'Term': 'Microservices', 'Description': ' Microservices architecture is a development approach where applications are constructed from small, modular services, each with a defined API for seamless communication with other services, enabling flexibility and scalability.', 'reference': 'SearchAppArchitecture. (n.d.). What are Microservices? [online] Available at: https://www.techtarget.com/searchapparchitecture/definition/microservices.' },
  { 'id': 6, 'Term': 'GIT', 'Description': ' Git, a DevOps tool, is an open-source version control system for efficient source code management for projects of all sizes.  Git enables collaborative work and seamless tracking of code changes by multiple developers.', 'reference': 'Simplilearn.com. (n.d.). What is Git: Features, Command and Workflow in Git. [online] Available at: https://www.simplilearn.com/tutorials/git-tutorial/what-is-git.' },
  { 'id': 7, 'Term': 'virtual Machine', 'Description': 'VM is a software-based emulation of a computer system, including its hardware components, running on top of a physical host machine. It allows multiple operating systems to coexist on the same physical hardware, enabling efficient utilization of resources and isolation of applications.  ', 'reference': ' Inc, Dz. (2017). 48 DevOps Terms You Should Know (A DevOps Glossary). [online] Medium. Available at: https://medium.com/@DZoneInc/48-devops-terms-you-should-know-a-devops-glossary-37e60fd23752.' },
  { 'id': 8, 'Term': 'NodeJS', 'Description': ' Node.js, an open-source platform,  It offers cross-platform compatibility, functioning on Linux, macOS, and Windows without reliance on specific operating systems. As a JavaScript runtime environment, Node.js enables the execution of JavaScript code, providing the necessary environment to run and perform tasks written in the language. ', 'reference': 'Semah, B. (2022). What Exactly is Node.js? Explained for Beginners. [online] freeCodeCamp.org. Available at: https://www.freecodecamp.org/news/what-is-node-js/.' },
  { 'id': 9, 'Term': 'Blockchain', 'Description': ' Blockchain enables secure information sharing by utilizing distributed databases or ledgers, where nodes from public or private networks work collaboratively to update the system. ', 'reference': 'McKinsey (2022). What is blockchain? | McKinsey. [online] www.mckinsey.com. Available at: https://www.mckinsey.com/featured-insights/mckinsey-explainers/what-is-blockchain.' },
  { 'id': 10, 'Term': 'Agile Methodology', 'Description': 'The Agile methodology is a project management approach that focuses on breaking projects into phases and prioritizing continuous collaboration and improvement. Teams follow a cyclic process of planning, execution, and evaluation to achieve flexibility and adaptability throughout the project lifecycle.  ', 'reference': 'Atlassian (n.d.). What is Agile? [online] Atlassian. Available at: https://www.atlassian.com/agile#:~:text=What%20is%20the%20Agile%20methodology.   ' },
  
  
];



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'GLOSSARY', glossary: items });
});

module.exports = router;

