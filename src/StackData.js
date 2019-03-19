const stacks = [
    {
        title: "Process",
        items: [
            {
                title: "Agile",
                items: [
                    { title: "Philosophy" },
                    { title: "Scrum" },
                ]
            },
            {
                title: "Business Analysis",
                items: [
                    { title: "User Stories" },
                    { title: "Journey Mapping" },
                ]
            },
            {
                title: "Documentation Management",
                items: [
                    { title: "Confluence" },
                    { title: "SharePoint" },
                    { title: "Github Wikis" },
                    { title: "PDFs" },
                ]
            },
            {
                title: "User Experience (UX)",
                items: [
                    { title: "Usability Testing" },
                    { title: "User Research" },
                ]
            }
        ]
    },
    {
        title: "Change Mgmt",
        items: [


            {
                title: "Issue Management",
                items: [
                    { title: "JIRA" },
                    { title: "Team Foundation Server" },
                    { title: "Github Issues" },
                    { title: "Trello" },
                ]
            },
            {
                title: "Source Control",
                items: [
                    {
                        title: "Technology",
                        items: [
                            { title: "git" },
                            { title: "svn" },
                            { title: "HG" },
                        ]
                    },
                    {
                        title: "Server",
                        items: [
                            { title: "Stash (Bitbucket)" },
                            { title: "Github" },
                            { title: "Gitlab" },
                            { title: "Team Foundation Server (TFS)" },
                        ]
                    },
                    {
                        title: "Client",
                        items: [
                            { title: "git CLI" },
                            { title: "Source Tree" },
                            { title: "IDE Integration" },
                        ]
                    },
                ]
            },
        ]
    },
    {
        title: "Database",
        items: [


            {
                title: "Relational DB",
                items: [
                    { title: "MS SQL Server" },
                    { title: "MySQL" },
                    { title: "PostreSQL" },
                ]
            },
            {
                title: "Non-Relational DB",
                items: [
                    { title: "MongoDB" },
                    { title: "Redis" },
                    { title: "Couchbase" },
                ]
            },
            {
                title: "Tooling",
                items: [
                    { title: "SQL Server Management Studio" },
                    { title: "MySql Workench" },
                    { title: "RoboMongo" },
                ]
            },
            {
                title: "Patterns & Practices",
                items: [
                    {
                        title: "Database Design",
                        items: [
                            { title: "Normalization" },
                            { title: "Constraints" },
                            { title: "Primary Key / Foreign Key" },
                            { title: "Indexes" },
                        ]
                    },
                    {
                        title: "Database Objects",
                        items: [
                            { title: "Joins" },
                            { title: "Stored Procedures" },
                            { title: "Tables / Views" },
                        ]
                    },
                ]
            },
        ]
    },
    {
        title: "Business Intelligence",
        items: [


            {
                title: "Reporting",
                items: [
                    { title: "SSRS" },
                    { title: "Power BI" },
                    { title: "Crystal Reports" },
                    { title: "Tableau" },
                    { title: "GIS" },
                ]
            },
            {
                title: "Data Analysis",
                items: [
                    { title: "R" },
                    { title: "SAS" },
  
                ]
            },
            {
                title: "Warehousing",
                items: [
                    { title: "ETL" },
                    { title: "SSIS Package" },
                    {
                        title: "Patterns & Practices",
                        items: [
                            { title: "Star Schema" },
                            { title: "Facts & Dimensions" },
                        ]
                    },
                ]
            },
            {
                title: "Data Collection",
                items: [
                    { title: "Survey Gizmo" },
                    { title: "Google Forms" },
                ]
            },
            {
                title: "Integration Engine",
                items: [
                    { title: "Rhapsody" },
                    { title: "HL7 / VXU" },
                ]
            },
        ]
    },
    {
        title: "Windows Apps",
        items: [


            {
                title: "WinForms",
                items: [
                    { title: "Controls" },
                    { title: "Data Binding" },
                ]
            },
            {
                title: "WPF",
                items: [
                    { title: "XAML" },
                    { title: "MVVM" },
                    { title: "Bindings" },
                ]
            },
            {
                title: "Languages",
                items: [
                    { title: "C#" },
                    { title: "VB.NET" },
                ]
            },
            {
                title: "Platform",
                items: [
                    { title: ".NET Framework" },
                    { title: ".NET Standard" },
                    { title: ".NET Core" },
                ]
            },
            {
                title: "Patterns & Practices",
                items: [
                    { title: "ADO.NET Data Adapters" },
                    { title: "S.O.L.I.D." },
                    {
                        title: "GOF Design Patterns",
                        items: [
                            { title: "Inversion of Control (IoC)" },
                            { title: "Strategy Pattern" },
                        ]
                    },

                ]
            }
        ]
    },
    {
        title: "Web Server",
        items: [


            {
                title: "ASP.NET",
                items: [
                    { title: "MVC" },
                    { title: "Web API" },
                    { title: "WebForms" },
                    { title: "Windows Communication Foundation (WCF)" },
                ]
            },
            {
                title: "Node.js",
                items: [
                    { title: "Express" },
                ]
            },
            {
                title: "PHP",
                items: [
                    { title: "XAMPP" },
                    { title: "WAMP" },
                ]
            },
            {
                title: "Python",
                items: [
                    { title: "CherryPy" },
                ]
            },
            {
                title: "Ruby",
                items: [
                    { title: "Rails" },
                ]
            },
            {
                title: "Java",
                items: [
                    { title: "Tomcat" },
                    { title: "JBoss" },
                ]
            },
            {
                title: "Service Oriented Architecture (SOA)",
                items: [
                    { title: "REST" },
                    { title: "GraphQL" },
                    { title: "SOAP" },
                ]
            },
            {
                title: "Web Sockets",
                items: [
                    { title: "SignalR" },
                    { title: "Socket.io" },
                ]
            },
            {
                title: "Patterns & Practices",
                items: [
                    {
                        title: "RESTful API",
                        items: [
                            { title: "Richardson Maturity Model" },
                        ]
                    },
                    {
                        title: "Search Engine Optimization (SEO)",
                        items: [
                            { title: "Server-Side Rendering (SSR)" },
                        ]
                    },
                    {
                        title: "Optimization",
                        items: [
                            { title: "Bundling" },
                            { title: "Minification" },
                            { title: "Images" },
                        ]
                    },

                ]
            }
        ]
    },
    {
        title: "Web Client",
        items: [


            {
                title: "Templating",
                items: [
                    { title: "Razor" },
                    { title: "Handlebars" },
                ]
            },
            {
                title: "Single Page Application Frameworks (SPA)",
                items: [
                    { title: "React" },
                    { title: "Angular" },
                    { title: "View" },
                    { title: "Ember" },
                ]
            },
            {
                title: "Libraries",
                items: [
                    { title: "jQuery" },
                    { title: "jQuery Validate" },
                    { title: "moment" },
                    { title: "lodash" },
                ]
            },
            {
                title: "Progressive Web Apps (PWAs)",
                items: [
                    { title: "Service Worker" },
                    { title: "Workbox" },
                ]
            },
            {
                title: "Hybrid Apps",
                items: [
                    { title: "Phone Gap" },
                    { title: "Electron" },
                ]
            },
            {
                title: "Content Management System (CMS)",
                items: [
                    { title: "Wordpress" },
                    { title: "Sharepoint" },
                    {
                        title: "Static Site Generator",
                        items: [
                            { title: "Gatsby" }
                        ]
                    },
                ]
            },
        ]
    },
    {
        title: "Web Standards",
        items: [


            {
                title: "HTML",
                items: [
                    { title: "HTML5" },
                    { title: "Modules" },
                    { title: "Web Assembly" },
                    { title: "Shadow DOM" },
                ]
            },
            {
                title: "CSS",
                items: [
                    {
                        title: "Pre-Processor",
                        items: [
                            { title: "LESS" },
                            { title: "SASS" },
                            { title: "PostCSS" },
                        ]
                    },
                    {
                        title: "APIs",
                        items: [
                            { title: "Grid / Flexbox" },
                            { title: "CSS Variables" },
                        ]
                    },
                    {
                        title: "Methodologies",
                        items: [
                            { title: "BEM" },
                            { title: "JSS / CSS-in-JS" },
                            { title: "Atomic" },
                            { title: "CSS Modules" },
                            { title: "OOCSS / SMACSS" },
                            { title: "Outside-In Property Order" },
                        ]
                    },
                    {
                        title: "Typography",
                        items: [
                            { title: "Fonts" },
                            { title: "Icons" },
                        ]
                    },
                    {
                        title: "Patterns & Practices",
                        items: [
                            { title: "Specificity" },
                            { title: "Stack Context" },
                            { title: "Cascade" },
                        ]
                    },
                ]
            },
            {
                title: "Javascript",
                items: [
                    {
                        title: "Syntaxes",
                        items: [
                            { title: "Typescript" },
                            { title: "ES 2016" },
                            { title: "Babel" },
                        ]
                    },
                    {
                        title: "APIs",
                        items: [
                            { title: "Fetch" },
                            { title: "Promises" },
                            { title: "Polyfills" },
                        ]
                    },
                ]
            },

        ]
    },
    {
        title: "Design",
        items: [


            {
                title: "Interface Design",
                items: [
                    { title: "Responsive Design" },
                    { title: "Alignment" },
                    {
                        title: "Front-End Frameworks",
                        items: [
                            { title: "Bootstrap (3/4)" },
                            { title: "Material UI" },
                        ]
                    },
                ]
            },
            {
                title: "Interaction Design",
                items: [
                    { title: "Navigation" },
                    { title: "Emphasis" },
                    { title: "Information Hierarchy" },
                    { title: "Proximity" },
                ]
            },
            {
                title: "Design Systems",
                items: [
                    { title: "Storyboard.js" },
                    {
                        title: "Wireframing",
                        items: [
                            { title: "Balsamiq" },
                            { title: "Figma" },
                            { title: "Adobe XD" },
                        ]
                    },
                ]
            },
            {
                title: "Analytics",
                items: [
                    { title: "Google Analytics" },
                    { title: "Hubspot" },
                ]
            },
            {
                title: "Patterns & Practices",
                items: [
                    {
                        title: "Accessibility (A11y)",
                        items: [
                            { title: "Accessible Rich Internet Applications (AIRA)" },
                            { title: "Web Content Accessibility Guidelines (WCAG)" },
                        ]
                    },
                    { title: "Internationalization (i18n)" },
                ]
            },

        ]
    },
    {
        title: "Dev Experience (DX)",
        items: [


            {
                title: "Scaffolding",
                items: [
                    { title: "T4 Templates" },
                    { title: "Yeoman" },
                    {
                        title: "CLIs",
                        items: [
                            { title: "create-react-app" },
                            { title: "Vue CLI" },
                        ]
                    },
                ]
            },
            {
                title: "Package Manager",
                items: [
                    { title: "nuget" },
                    { title: "npm" },
                    { title: "yarn" },
                ]
            },
            {
                title: "Task Runner",
                items: [
                    { title: "npm scripts" },
                    { title: "gulp" },
                    { title: "grunt" },
                ]
            },
            {
                title: "Build Process",
                items: [
                    { title: "dotnet build" },
                    { title: "webpack" },
                ]
            },
            {
                title: "Integrated Development Environment (IDEs)",
                items: [
                    { title: "Visual Studio" },
                    { title: "Visual Studio Code" },
                    { title: "Eclipse" },
                ]
            },
            {
                title: "Terminal",
                items: [
                    { title: "Bash" },
                    { title: "Powershell" },
                ]
            },
            {
                title: "Static Code Analysis",
                items: [
                    { title: "ReSharper" },
                    { title: "EsLint" },
                    { title: "FX Cop" },
                    { title: "Flow.js" },
                ]
            }

        ]
    },
    {
        title: "Dev Ops",
        items: [
            {
                title: "Deployment",
                items: [
                    { title: "CI/CD" },
                    { title: "Serverless" },
                    { title: "Click Once" },
                    { title: "Squirrel" },
                ]
            },

            {
                title: "Hosting",
                items: [
                    {
                        title: "OS",
                        items: [
                            { title: "Windows Server" },
                            { title: "Linux" },
                        ]
                    },
                    {
                        title: "Web Server",
                        items: [
                            { title: "IIS" },
                            { title: "Kestrel" },
                            { title: "nginx" },
                            { title: "Tomcat" },
                        ]
                    },
                    {
                        title: "Cloud Provider",
                        items: [
                            { title: "AWS" },
                            { title: "Azure" },
                        ]
                    },
                    {
                        title: "Static Cloud",
                        items: [
                            { title: "gh-pages" },
                            { title: "Netlify" },
                            { title: "Surge.sh" },
                        ]
                    },
                    {
                        title: "CDN",
                        items: [
                            { title: "Cloudfront" },
                        ]
                    },
                ]
            },

            {
                title: "Authentication",
                items: [
                    { title: "Active Directory" },
                    { title: "OAuth 2.0" },
                    { title: "Forms Auth" },
                    { title: "JavaScript Web Tokens (JWT)" },
                ]
            },
            {
                title: "Scaling",
                items: [
                    { title: "Multi-Tenancy" },
                    { title: "Load Balancing" },
                    { title: "Eventual Consistency" },
                ]
            },
        ]
    },
    {
        title: "Debugging",
        items: [
            {
                title: "Local Debugging",
                items: [
                    { title: "Breakpoints" },
                    { title: "StackTrace" },
                ]
            },
            {
                title: "Forums",
                items: [
                    { title: "Stack Overflow" },
                    { title: "Github Issues" },
                    { title: "Minimal, Complete, Verifiable Example (MCVE)" },
                ]
            },
            {
                title: "Fiddles",
                items: [
                    { title: "jsFiddle" },
                    { title: "CodePen.io" },
                    { title: "CodeSandBox" },
                    { title: "Plunker" },
                    { title: "Gist / blocks.org" },
                    { title: "Dot Net Fiddle" },
                    { title: "SQL Fiddle" },
                ]
            },
            {
                title: "Performance",
                items: [
                    { title: "Fiddler" },
                    { title: "Dev Tools" },
                    { title: "Execution Plan" },
                    { title: "VS Profiling" },
                    { title: "Process Monitor" },
                ]
            },

        ]
    },
    {
        title: "Testing",
        items: [
            {
                title: "Unit Testing",
                items: [
                    { title: "MSTest" },
                    { title: "NUnit" },
                    { title: "Jest" },
                    { title: "Jasmine" },
                    { title: "Mocha" },
                ]
            },
            {
                title: "End-to-End (E2E) Testing",
                items: [
                    { title: "Test Cafe" },
                    { title: "Puppeteer / Headless Chrome" },
                ]
            },
            {
                title: "Cross Browser Testing",
                items: [
                    { title: "BrowserStack" },
                ]
            },
            {
                title: "Patterns & Practices",
                items: [
                    { title: "Assert, Act, Arrange (AAA)" },
                    { title: "Mocking, Faking, Stubbing"},
                    { title: "Behavior Driven Development (BDD)"},
                    { title: "Test Driven Development (TDD)"},
                ]
            }

        ]
    }
]

export default stacks;




