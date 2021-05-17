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
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is the title of your project?",
  },
  {
    type: "input",
    name: "description",
    message: "Give a description of your project?",
  },
  {
    type: "input",
    name: "instructions",
    message: "Give installation instructions for your project?",
  },
  {
    type: "input",
    name: "usage",
    message: "Give usage information fpr your project?",
  },
  {
    type: "list",
    name: "license",
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
    message: "Give contribution guidelines to your project?",
  },
  {
    type: "input",
    name: "test",
    message: "Give test instructions for your project?",
  },
  { 
    type: "input",
    name: "questions",
    message: "Are there are any questions?"
  }
]
let data = inquirer.prompt(questions)
.then((data) => {

  fs.writeFile('READMEtest.md', data, (err) =>
    err ? console.log(err) : console.log('Successfully created README.md!')
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
