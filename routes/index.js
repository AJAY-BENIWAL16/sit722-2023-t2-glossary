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
  'reference': 'What is Infrastructure as Code (IaC)? (no date) www.redhat.com. Available at: https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac#:~:text=choose%20Red%20Hat%3F- (Accessed: 5 August 2023).' },

{
  'id': 21,
      'Term': 'Dependency Injection',
      'Description': "Dependency Injection means arranging a class to get the things it needs from the outside, rather than making them inside the class. This makes the code easier to handle and test.",
      'reference': 'Martin Fowler. (2004). Inversion of Control Containers and the Dependency Injection pattern.  Available at: https://martinfowler.com/articles/injection.html'
},
    {
      'id': 22,
      'Term': 'Infrastructure Automation',
      'Description': "Infrastructure Automation involves using tools and scripts to make computers and systems set themselves up automatically. This helps avoid mistakes and keeps everything consistent.",
      'reference': 'HashiCorp. (n.d.). What is Infrastructure as Code (IAC)? Available at: https://www.hashicorp.com/resources/what-is-infrastructure-as-code'
    },
    {
      'id': 23,
      'Term': 'Log Management',
      'Description': "Log Management is about collecting, saving, and analyzing the information that programs and computers write down about what they're doing. This helps find problems, check how well things are working, and keep things safe.",
      'reference': 'Loggly. (n.d.). What is Log Management?  Available at: https://www.loggly.com/ultimate-guide/what-is-log-management/'
    },
    {
      'id': 24,
      'Term': 'Azure Kubernetes Service (AKS)',
      'Description': "Azure Kubernetes Service (AKS) is a helpful tool from Microsoft. It helps put small pieces of software into containers and manages them so they're easy to use, no matter if there's a lot or a little.",
      'reference': 'Microsoft. (n.d.). Azure Kubernetes Service (AKS).  Available at: https://azure.microsoft.com/en-us/services/kubernetes-service/'
    },
    {
      'id': 25,
      'Term': 'Site Reliability Engineering (SRE)',
      'Description': "Site Reliability Engineering (SRE) is like making sure a big computer system runs smoothly. People who do this mix computer programming with taking care of things to make sure everything works fast and never breaks.",
      'reference': 'Google Cloud. (n.d.). What is Site Reliability Engineering (SRE)?  Available at: https://cloud.google.com/solutions/site-reliability-engineering'
    },
    {
      'id': 26,
      'Term': 'Container Orchestration',
      'Description': "Container Orchestration is like being the conductor of a big orchestra of software. It's about making sure all the different pieces of software work together in a balanced and smooth way.",
      'reference': 'Red Hat. (n.d.). What is Container Orchestration?  Available at: https://www.redhat.com/en/topics/containers/what-is-container-orchestration'
    },
    {
      'id': 27,
      'Term': 'Azure Functions Premium Plan',
      'Description': "Azure Functions Premium Plan is a special way to use a Microsoft service that lets you run your small pieces of code quickly and often. This is good for when lots of people want to use your code at the same time.",
      'reference': 'Microsoft. (n.d.). Azure Functions Premium Plan.  Available at: https://azure.microsoft.com/en-us/services/functions/'
    },
    {
      'id': 28,
      'Term': 'Immutable Infrastructure',
      'Description': "Immutable Infrastructure is like treating your computer setup like paper plates. Once you make it, you don't change it; you just make a new one when you need to. This makes things strong and steady.",
      'reference': 'Pulumi. (n.d.). What is Immutable Infrastructure?  Available at: https://www.pulumi.com/blog/immutable-infrastructure-explained/'
    },
    {
      'id': 29,
      'Term': 'Azure Monitor',
      'Description': "Azure Monitor is a helper in Microsoft's computer world. It helps keep an eye on all the things happening in your computer programs, like a helpful assistant pointing out problems before they become big.",
      'reference': 'Microsoft. (n.d.). What is Azure Monitor?  Available at: https://azure.microsoft.com/en-us/services/monitor/'
    },
    {
      'id': 30,
      'Term': 'Chaos Engineering',
      'Description': "Chaos Engineering is like practicing for when things go wrong. You pretend bad stuff happens to your computer system on purpose to learn how to fix it faster and make it work better.",
      'reference': 'Gremlin. (n.d.). What is Chaos Engineering?  Available at: https://www.gremlin.com/chaos-engineering/'
    },
    {
  
  "id": 31,
  "Term": "Kubectl",
  "Description": "Kubectl is a command-line tool used for interacting with Kubernetes clusters. It allows users to deploy and manage applications, inspect and debug running containers, and perform various administrative tasks within a Kubernetes environment.",
  "reference": "Glossary (no date) Kubernetes. Available at: https://kubernetes.io/docs/reference/glossary/?fundamental=true."
},

{
  "id": 32,
  "Term": "Azure DevOps",
  "Description": "Azure DevOps includes a suite of tools and services provided by Microsoft Azure, designed to facilitate the entire DevOps lifecycle, covering tasks from project planning and coding to testing and deployment.",
  "reference": "Microsoft Azure Tutorial (no date) www.tutorialspoint.com. Available at: https://www.tutorialspoint.com/microsoft_azure/index.htm."
},

{
  "id": 33,
  "Term": "Kubernetes Pods",
  "Description": "Kubernetes Pods represent the smallest units that can be deployed in a Kubernetes cluster, housing one or more containers with shared network and storage resources.",
  "reference": "Glossary (no date) Kubernetes. Available at: https://kubernetes.io/docs/reference/glossary/?fundamental=true."
},

{
  "id": 34,
  "Term": "Azure Resource Group",
  "Description": "An Azure Resource Group serves as a logical container for efficiently managing and organizing Azure resources, simplifying the administration and monitoring of interconnected resources.",
  "reference": "Microsoft Azure Tutorial (no date) www.tutorialspoint.com. Available at: https://www.tutorialspoint.com/microsoft_azure/index.htm."
},

{
  "id": 35,
  "Term": "Kubernetes Namespace",
  "Description": "Kubernetes Namespaces offer a means to logically partition and segregate resources within a cluster, enhancing resource management and access control.",
  "reference": "Glossary (no date) Kubernetes. Available at: https://kubernetes.io/docs/reference/glossary/?fundamental=true."
},

{
  "id": 36,
  "Term": "Azure Functions",
  "Description": "Azure Functions is a serverless computing service within Azure that enables the execution of event-triggered code without the need for managing underlying infrastructure.",
  "reference": "Microsoft Azure Tutorial (no date) www.tutorialspoint.com. Available at: https://www.tutorialspoint.com/microsoft_azure/index.htm."
},

{
  "id": 37,
  "Term": "Kubernetes Ingress",
  "Description": "Kubernetes Ingress is an API object used to oversee external access to services inside a cluster, typically utilized for routing and load balancing of HTTP traffic.",
  "reference": "Glossary (no date) Kubernetes. Available at: https://kubernetes.io/docs/reference/glossary/?fundamental=true."
},

{
  "id": 38,
  "Term": "Azure DevOps Pipelines",
  "Description": "Azure DevOps Pipelines is a service that streamlines application development by automating the build, testing, and deployment processes, providing robust continuous integration and continuous delivery (CI/CD) capabilities.",
  "reference": "Microsoft Azure Tutorial (no date) www.tutorialspoint.com. Available at: https://www.tutorialspoint.com/microsoft_azure/index.htm."
},

{
  "id": 39,
  "Term": "Kubernetes Helm",
  "Description": "Helm is a Kubernetes package manager designed to simplify the deployment and management of applications and services through the use of preconfigured charts.",
  "reference": "Glossary (no date) Kubernetes. Available at: https://kubernetes.io/docs/reference/glossary/?fundamental=true."
},

{
  "id": 40,
  "Term": "Staging Environment",
  "Description": "It is a controlled and isolated environment where software and applications are tested before deployment to the production environment. It allows for thorough testing, identification of issues, and validation of changes to minimize risks during the actual release.",
  "reference": "Reynolds, J. (2022) What Is a Staging Environment? How to Get It Right, Plutora. Available at: https://www.plutora.com/blog/what-staging-environment-how-get-it-right (Accessed: 10 September 2023)."
}

  ];
   
  
  



/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'GLOSSARY', glossary: items });
});

module.exports = router;