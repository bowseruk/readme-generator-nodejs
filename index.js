// using newer syntax
import fs from "fs";
import path from 'path';
// latest version of inquirer
import inquirer from 'inquirer';
import ReadmeObject from "./modules/readme.js";
// import generateMarkdown from "utils/generateMarkdown";

// The class is a helper for questions in inquierer
class Question {
    constructor(type, name, message, choices = []) {
        this.type = type;
        this.name = name;
        this.message = message;
        if (choices.length > 0) {
            this.choices = choices;
        }
    }
}

// array of questions for user
const questions = [
    new Question("input", "title", "What is the project called?"),
    new Question("input", "description", "Please describe the project:"),
    new Question("input", "usage", "Describe how to use the project:")
];

// function to write README file
function writeToFile(fileName, data) {

}

// function to initialize program
function init() {
    inquirer
        .prompt([
            /* Pass your questions in here */
            ...questions
        ])
        .then((answers) => {
            // Use user feedback for... whatever!!
            let readme = new ReadmeObject(answers.title, answers.description, answers.usage)
            console.log(readme.readme);
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}

// function call to initialize program
init();

