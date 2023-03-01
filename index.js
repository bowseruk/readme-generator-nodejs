// using newer syntax
import fs from "fs";
import path from 'path';
import util from 'util';

const writeFileAsync = util.promisify(fs.writeFile);
// latest version of inquirer
import inquirer from 'inquirer';
import ReadmeObject from "./modules/readme.js";
let readmeInput = {}
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
// These are the questions for the description section of the readme
const descriptionQuestions = [
    new Question("input", "title", "What is the project called?"),
    new Question("input", "description", "Please describe the project:"),
]
// These are the questions for the requirements section of the readme
const requireQuestions = [
    new Question("input", "requirement", "Describe a project requirement, or type end to move to the next question:")
]
// These are the questions for the contents section of the readme
const contentsQuestion = [
    new Question("confirm", "content", "Include A Contents Section?")
]
// These are the questions for the installation section of the readme
const installationQuestion = [
    new Question("input", "installationInstruction", "Please give the instructions for installing the project, or type none if there are no requirements:")
]
// These are the questions for the usage section of the readme
const usageQuestions = [
    new Question("input", "screenshotURL", "Pleaase give the link to the screenshot, or type None for no link:"),
    new Question("input", "videoURL", "Please give the link to the video walkthrough, or type None for no link:"),
    new Question("input", "usage", "Describe how to use the project:")
]
// These are the questions for the features section of the readme
const featuresQuestions = [
    new Question("input", "feature", "Describe a project feature, or type end to move to the next question:")
]
// These are the questions for the contribute section of the readme
const contributeQuestions = [
    new Question("input", "contribute", "Describe how to contribute to the project, or type none to not include anything:")
]

// These are the questions for the contents section of the readme
const testsQuestions = [
    new Question("input", "test", "Describe a test used on the project, or type end to move to the next question:"),
]

// These are the questions for the contents section of the readme
const creditsQuestions = [
    new Question("confirm", "w3v", "Credit W3 Validator?"),
    new Question("confirm", "w3school", "Credit W3School?"),
    new Question("confirm", "mdn", "Mozilla Developer Network?"),
    new Question("confirm", "stackOverflow", "Stack Overflow?"),
    new Question("confirm", "bootstrap", "Credit Bootstrap?"),
    new Question("confirm", "fontAwesome", "Credit Font Awesome?"),
    new Question("confirm", "jQuery", "Credit JQuery?"),
    new Question("confirm", "inquirer", "Credit Inquirer?"),
    new Question("confirm", "nodejs", "Credit Node.js?")
    // new Question("input", "numberOfCredits", "How many additional credits does the project have?")
]
// These are the questions for the contents section of the readme
const addCredit = [
    new Question("input", "credit", "Please write an additional credit, or type end to move to the next question:")
]
// These are the questions for the contents section of the readme
const licenseQuestions = [
    new Question("confirm", "licenseFile", "Does the project have a license file?"),
    new Question("list", "license", "What License does the project use?", ["Apache 2.0", "BSD 1-Clause", "BSD 2-Clause", "BSD 3-Clause", "GNU GPL v1", "GNU GPL v2", "GNU GPL v3", "MIT", "None"])
]
// These are the questions for the contents section of the readme
const questionsQuestions = [
    new Question("confirm", "gitHub", "Ask users to leave a message on github discussion on the repo?"),
    new Question("input", "email", "Type a contact email, or type none to skip:")
]

function descriptionSection() {
    inquirer
        .prompt([
            /* The questions for the description section */
            ...descriptionQuestions
        ])
        .then((answers) => {
            // Put the answers into the readme input
            readmeInput.title = answers.title;
            readmeInput.description = answers.description;
            readmeInput.requirements = [];
            descriptionListSection();
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
                console.log(error)
            } else {
                // Something else went wrong
                console.log(error)
            }
        });
}

function descriptionListSection() {
    inquirer
        .prompt([
            /* Pass your questions in here */
            ...requireQuestions
        ])
        .then((answers) => {
            // Use user feedback for... whatever!!
            if (answers.requirement.toLowerCase() !== "end") {
                readmeInput.requirements.push(answers.requirement);
                descriptionListSection()
                return;
            }
            contentsSection();
        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}

function contentsSection() {
    inquirer
        .prompt([
            /* Pass your questions in here */
            ...contentsQuestion
        ])
        .then((answers) => {
            // Use user feedback for... whatever!!
            readmeInput.content = answers.content;
            installationSection()

        })
        .catch((error) => {
            if (error.isTtyError) {
                // Prompt couldn't be rendered in the current environment
            } else {
                // Something else went wrong
            }
        });
}

function installationSection() {
    inquirer
    .prompt([
        /* Pass your questions in here */
        ...installationQuestion
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        if (answers.installationInstruction.toLowerCase() === "none") {
            readmeInput.installation = false;
            readmeInput.installationInstruction = false;
        } else {
            readmeInput.installation = true;
            readmeInput.installationInstruction = answers.installationInstruction;
        }
        usageSection();
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
}

function usageSection() {
    inquirer
    .prompt([
        /* Pass your questions in here */
        ...usageQuestions
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        if (answers.screenshotURL.toLowerCase() === "none") {
            readmeInput.screenshot = false;
            readmeInput.screenshotURL = false;
        } else {
            readmeInput.screenshot = true;
            readmeInput.screenshotURL = answers.screenshotURL;
        }
        if (answers.videoURL.toLowerCase() === "none") {
            readmeInput.video = false;
            readmeInput.videoURL = false;
        } else {
            readmeInput.video = true;
            readmeInput.videoURL = answers.videoURL;
        }
        readmeInput.usage = answers.usage
        readmeInput.features = [];
        featuresSections();
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
}

function featuresSections() {
    inquirer
    .prompt([
        /* Pass your questions in here */
        ...featuresQuestions
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        if (answers.feature.toLowerCase() !== "end") {
            readmeInput.features.push(answers.feature);
            featuresSections();
            return;
        }
        contributeSections();
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
}

function contributeSections() {
    inquirer
    .prompt([
        /* Pass your questions in here */
        ...contributeQuestions
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        if (answers.contribute.toLowerCase() === "none") {
            readmeInput.contribute = false;
            readmeInput.contributeInstruction= false;
        } else {
            readmeInput.contribute = true;
            readmeInput.contributeInstruction = answers.contribute;
        }
        readmeInput.tests = [];
        testsSections();
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
}

function testsSections() {
    inquirer
    .prompt([
        /* Pass your questions in here */
        ...testsQuestions
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        if (answers.test.toLowerCase() !== "end") {
            readmeInput.tests.push(answers.test);
            testsSections();
            return;
        }
        creditsSections();
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
}

function creditsSections() {
    inquirer
    .prompt([
        /* Pass your questions in here */
        ...creditsQuestions
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        readmeInput.credits = []
        if (answers.w3v) {
            readmeInput.credits.push("The changes were checked with [W3C Validator](https://validator.w3.org/).")
        }
        if (answers.w3school) {
            readmeInput.credits.push("[W3School](https://www.w3schools.com/) was used as a reference for elements to use and good practice.")
        }
        if (answers.mdn) {
            readmeInput.credits.push("[MDN](https://developer.mozilla.org/en-US/) is a very comprehensive and useful resource.")
        }
        if (answers.stackOverflow) {
            readmeInput.credits.push("[Stack Overflow](https://stackoverflow.com/) always seems to have the answer to a problem that occurs.")
        }
        if (answers.bootstrap) {
            readmeInput.credits.push("[Bootstrap](https://getbootstrap.com/) was used in this project using the documentation on their website.")
        }
        if (answers.fontAwesome) {
            readmeInput.credits.push("font-awesome", "[Font Awesome](https://fontawesome.com/) was used and the documentation referenced.")
        }
        if (answers.jQuery) {
            readmeInput.credits.push("j-query", "[JQuery](https://jquery.com/) documentation was referred to throughout the project.")
        }
        if (answers.inquirer) {
            readmeInput.credits.push("inquirer", "The [Inquirer](https://www.npmjs.com/package/inquirer) package was used with node.js, following the documentation.")
        }
        if (answers.nodejs) {
            readmeInput.credits.push("Credit", "[Node.js](https://nodejs.org/) was used in the project, following documentation from their site.")
        }
        customCredits();
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
}

function customCredits() {
    inquirer
    .prompt([
        /* Pass your questions in here */
        ...addCredit
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        if (answers.credit.toLowerCase() !== "end") {
            readmeInput.credits.push(answers.credit);
            customCredits();
            return;
        }
        licenseSection();
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    }); 
}

function licenseSection() {
    inquirer
    .prompt([
        /* Pass your questions in here */
        ...licenseQuestions
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        readmeInput.licenseFile = answers.licenseFile;
        if (answers.license.toLowerCase() === "none") {
            readmeInput.license = false;
        } else {
            readmeInput.license = answers.license;
        }
        questionsSection();
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
}

function questionsSection() {
    inquirer
    .prompt([
        /* Pass your questions in here */
        ...questionsQuestions
    ])
    .then((answers) => {
        // Use user feedback for... whatever!!
        readmeInput.githubDiscussion = answers.gitHub;
        if (answers.email.toLowerCase() === "none") {
            readmeInput.email = false;
        } else {
            readmeInput.email = answers.email;
        }
        if ( (! answers.github) && (! answers.email)) {
            readmeInput.questions = false;
        } else {
            readmeInput.questions = true;
        }
        endOfChain()
    })
    .catch((error) => {
        if (error.isTtyError) {
            // Prompt couldn't be rendered in the current environment
        } else {
            // Something else went wrong
        }
    });
}

async function endOfChain() {
    // console.log(readmeInput);
    let readme = new ReadmeObject(readmeInput);
    await writeToFile("output.md", readme.readme);
}

// function to write README file
async function writeToFile(fileName, data) {
    try {
        await writeFileAsync(fileName, data);
    } catch (err) {
        console.log(err);
    }
}

// function to initialize program
function init() {
    // First Section
    descriptionSection();
}

// function call to initialize program
init();

