const inquirer = require("inquirer");
const fs = require("fs");

const generateMarkdown = require('./utils/generateMarkdown')

const questions = [
  { name: "title",
    message: "What is the title of your project?" },
  {
    name: "description",
    message: "Enter a description for your project",
    type: "editor",
  },
  {
    name: "installation",
    message: "Enter installation information for your project",
    type: "editor",
  },
  {
    name: "usage",
    message: "Enter usage information for your project",
    type: "editor",
  },
  {
    name: "contributing",
    message: "Enter information about how to contribute to your project",
    type: "editor",
  },
  {
    name: "tests",
    message: "Enter information about how to run tests for your project",
    type: "editor",
  },
  {
    name: "license",
    message: "What license would you like to use?",
    async source(answers, input) {
      const choices = [
        "MIT",
        "ISC",
        "GNU AGPLv3",
        "GNU GPLv3",
        "GNU LGPLv3",
        "Mozilla Public License 2.0",
        "Apache License 2.0",
      ];
      if (!input) return choices;
      return choices.filter((c) => c.includes(input.toUpperCase()));
    },
    type: "autocomplete",
  },
  {
    name: "githubName",
    message: "What is your GitHub username?",
  },
  {
    name: "email",
    message: "What is your email address?",
  },

// Function call to initialize app
init();
