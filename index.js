// using newer syntax
import fs from "fs";
import path from 'path';
// latest version of inquirer
import inquirer from 'inquirer';
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
// This class makes the readme
class ReadmeObject {
    constructor(title, description) {
        this.title = title;
        this.description = description
        this._descriptionList = ["test1", "test2", "test3"];
        this._license = true;
    };
    get descriptionList() {
        if (this._descriptionList) {
            return this._descriptionList.map(key => `\n- ${key}`).join("\n");
        }
        return "";
    };
    // This makes the first section with the title and description. And a list of requirements if it has been added.
    get descriptionSection() {  
        return `# ${this.title}\n\n## Description\n\n${this.description}\n${this.descriptionList}`;
    }
    // This makes the contents section
    get contents() {
        if (this._contents) {
            return "\n\n## Table of Contents\n\n- Description\n\n- Contents";
        }
        return "";
    }
    // This makes the installation section
    get installation() {
        return "";
    }
    // This makes the usage section
    get usage() {
        return "";
    }
    // This makes the credits section
    get credits(){
        return "";
    }
    // This makes the features section
    get features() {
        return "";
    }
    // This makes the contribute section
    get contribute() {
        return "";
    }
    // This makes the licence section
    get license() {
        if (this._license) {
            return `\n\n## License\n\nThis project uses the license in the LICENSE file of the repo.`;
        }
        return "";
    }
    get readme() {
        return this.descriptionSection +
        this.contents +
        this.installation +
        this.usage +
        this.credits +
        this.features +
        this.contribute +
        this.license
// `
// ## Installation

// ${this.installation}

// ## Usage

// ${this.usage}

// ${this.screenshot}

// ## Credits

// ## Features
        
// If your project has a lot of features, list them here.
        
// ## How to Contribute${this.license}
// `
    }
}

// array of questions for user
const questions = [
    new Question("input", "title", "What is the project called?"),
    new Question("input", "description", "Please describe the project:")
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
            let readme = new ReadmeObject(answers.title, answers.description)
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

