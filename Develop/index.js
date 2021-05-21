// const inquirer = require("inquirer");
// const fs = require("fs");

// inquirer.prompt([
//     {type: "input", name: "title", message: "What is the title of your project?"},
//     {type: "input", name: "description", message: "Give a description of your project?"},
//     {type: "input", name: "tableOfContent", message: "Give a description of your project?"},
// ]);

// // this creates a README.md file
// fs.appendFile("README.md", `${process.argv[2]}\n`, (err) =>
//   err ? console.error(err) : console.log("Commit logged!")
// );

// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const generateMD = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
inquirer
  .prompt([
    {
      type: "input",
      name: "github",
      message: "What is your Github Username?",
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?",
    },
    {
      type: "input",
      name: "title",
      message: "What is the title of your project?",
    },
    {
      type: "input",
      name: "description",
      message: "Please write a small description of your project?",
    },
    {
      type: "input",
      name: "installation",
      message: "What command should be run to install dependencies?",
    },
    {
      type: "input",
      name: "usage",
      message: "What does the user need to know about using this repo?",
    },
    {
      type: "list",
      name: "license",
      message: "What kind of license should your project have?",
      choices: [
        "apache-2.0",
        "artistic-2.0",
        "bsd-3-clause",
        "bsd-3-clause-clear",
        "ecl-2.0",
        "agpl-3.0",
        "gpl-3.0",
        "isc",
        "mit",
        "ncsa",
        "unlicense",
        "zlib",
      ],
    },
    {
      type: "input",
      name: "contribution",
      message:
        "What does the user need to know about contributing to the repo?",
    },
    {
      type: "input",
      name: "test",
      message: "What command should be run to run tests?",
    },
    {
      type: "input",
      name: "questions",
      message: "Are there are any questions?",
    },
  ])
  .then((data) => {
    // console.log("----------------");
    // console.log(data);
    // console.log("----------------");
    // const fileName = data
    // const generate = generator(JSON.stringify(data));
    // let answers = JSON.stringify(data);
    console.log(data);
    // const { github, email, title, description, instructions, usage, license, contribution, test, questions } = data;
    // console.log(`Title: ${data.title}`)
    let answers = generateMD(data);
    fs.writeFile("READMEtest.md", answers, (err, data) =>
      err ? console.log(err) : console.log("Successfully created README.md!")
    );
  });

// // TODO: Create a function to write README file
// // premade code
// function writeToFile(fileName, data) {

//   const fileName = questions
// // copied from activies
//   fs.writeFile('README.md', data, (err) =>
//   err ? console.error(err) : console.log('Success!')
//   );
// };

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();
