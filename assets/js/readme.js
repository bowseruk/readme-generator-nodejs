// This class makes the readme
class ReadmeObject {
    constructor(title, description, requirements, content, installation, installationInstruction, screenshot, screenshotURL, video, videoURL, usage, features, contribute, contributeInstruction, tests, credits, licenseFile, license, questions, githubDiscussion, email) {
        // set the properties using the setters below
        this.title = title;
        this.description = description;
        this.descriptionList = requirements;
        this.contents = content;
        this.setInstallation(installation, installationInstruction);
        this.setScreenshot(screenshot, screenshotURL);
        this.setVideo(video, videoURL)
        this.usage = usage;
        this.features = features;
        this.setContribute(contribute, contributeInstruction);
        this.credits = credits;
        this.tests = tests;
        this.setLicense(licenseFile, license);
        this.setQuestions(questions, githubDiscussion, email);
    };
    // helper functions
    checkLength(property) {
        let test = (property.length > 0) ? true : false
        return test;
    }
    // Uses both setters in the correct order for installation property
    setInstallation(flag, installationInstruction) {
        this.showInstallation = flag;
        return this.installation = installationInstruction;
    }
    // Uses both setters in the correct order for screenshot property
    setScreenshot(flag, screenshotURL) {
        this.showScreenshot = flag;
        return this.screenshot = screenshotURL;
    }
    // Uses both setters in the correct order for video property
    setVideo(flag, videoURL) {
        this.showVideo = flag;
        return this.video = videoURL;
    }
    // Uses both setters in correct order for contribute
    setContribute(flag, contributeInstruction) {
        this.showContribute = flag;
        return this.contribute = contributeInstruction;
    }
    // Uses both stters in correct order for set License
    setLicense(fileFlag, license) {
        this.licenseFile = fileFlag;
        this.license = license;
    }
    setQuestions(flag, github, email) {
        this.showQuestions = flag;
        this.contactEmail = email;
        this.contactGithub = github;
    }
    // Setters
    // set the title of the Readme
    set title(title) {
        this._title = title;
        return true
    }
    // Set the description
    set description(description) {
        this._description = description;
    }
    // Set the description list - expects an array
    set descriptionList(requirements) {
        if (requirements.length > 0) {
            this._descriptionList = requirements;
            return true;
        }
        this._descriptionList = false;
        return false;
    }
    // Set the contents - bool to show or not.
    set contents(contents) {
        (contents) ? this._contents = true : this._contents = false;
        return this._contents;
    }
    // Installation flag - to show or not
    set showInstallation(flag) {
        (flag) ? this._installationFlag = true : this._installationFlag = false;
        return this._installationFlag;
    }
    // Installation steps
    set installation(installation) {
        if (this._installationFlag) {
            this._installation = installation;
            return true;
        }
        this._installation = false;
        return false;
    }
    // screenshot flag
    set showScreenshot(flag) {
        (flag) ? this._screenshotFlag = true : this._screenshotFlag = false;
        return this._screenshotFlag;
    }
    // screenshot URL
    set screenshot(screenshotURL) {
        if (this._screenshotFlag) {
            this._screenshot = screenshotURL;
            return true;
        }
        this._screenshot = false;
    }
    // videoflag
    set showVideo(flag) {
        (flag) ? this._videoFlag = true : this._videoFlag = false;
        return this._videoFlag;
    }
    // video URL
    set video(videoURL) {
        if (this._videoFlag) {
            this._video = videoURL;
            return true;
        }
        this._video = false;
    }
    // Usage
    set usage(usage) {
        this._usage = usage;
    }
    // Features
    set features(features) {
        if (features.length > 0) {
            this._features = features;
            return true;
        }
        this._features = false;
        return false;
    }
    // Contributing Flag
    set showContribute(flag) {
        (flag) ? this._contributeFlag = true : this._contributeFlag = false;
        return this._contributeFlag;
    }
    // contributing
    set contribute(contributeInstruction) {
        if (this._contributeFlag) {
            this._contribute = contributeInstruction;
            return true;
        }
        this._contribute = false;
    }
    // Set credits
    set credits(credits) {
        if (credits.length > 0) {
            this._credits = credits;
            return true
        }
        this._credits = false;
        return false;
    }
    // Set tests
    set tests(tests) {
        if (tests.length > 0) {
            this._tests = tests;
            return true;
        }
        this._tests = false;
    }
    // Determine if the License file statement is shown
    set licenseFile(flag) {
        (flag) ? this._licenseFile = true : this._licenseFile = false;
        return this._licenseFile;
    }
    // Set the license to use with the readme
    set license(license) {
        switch (license.toLowerCase()) {

            case ('apache 2.0'):
                this._badgeURL = "https://img.shields.io/badge/License-Apache_2.0-brightgreen.svg";
                this._licenseURL = "https://opensource.org/licenses/Apache-2.0";
                this._license = "Apache 2.0";
                break;
            case ('bsd 1-clause'):
                this._badgeURL = "![License](https://img.shields.io/badge/License-BSD_1--Clause-brightgreen.svg)"
                this._licenseURL = "https://opensource.org/license/bsd-1-clause/"
                this._license = "BSD 3-Clause"
                break;
            case ('bsd 2-clause'):
                this._badgeURL = "![License](https://img.shields.io/badge/License-BSD_2--Clause-brightgreen.svg)"
                this._licenseURL = "https://opensource.org/license/bsd-2-clause/"
                this._license = "BSD 3-Clause"
                break;
            case ('bsd 3-clause'):
                this._badgeURL = "![License](https://img.shields.io/badge/License-BSD_3--Clause-brightgreen.svg)"
                this._licenseURL = "https://opensource.org/licenses/BSD-3-Clause"
                this._license = "BSD 3-Clause"
                break;
            case ('gnu gpl v1'):
                this._badgeURL = "https://img.shields.io/badge/License-GPL_v1-brightgreen.svg"
                this._licenseURL = "https://opensource.org/license/gpl-1-0/"
                this._license = "GNU GPL v§"
                break;
            case ('gnu gpl v2'):
                this._badgeURL = "https://img.shields.io/badge/License-GPL_v2-brightgreen.svg"
                this._licenseURL = "https://opensource.org/license/gpl-2-0/"
                this._license = "GNU GPL v2"
                break;

            case ('gnu gpl v3'):
                this._badgeURL = "https://img.shields.io/badge/License-GPLv3-brightgreen.svg)"
                this._licenseURL = "https://opensource.org/license/gpl-3-0/"
                this._license = "GNU GPL v3"
                break;

            case ("mit"):
                this._badgeURL = "https://img.shields.io/badge/License-MIT-brightgreen.svg";
                this._licenseURL = "https://opensource.org/licenses/MIT";
                this._license = "MIT";
                break;
            default:
                this._badgeURL = false;
                this._licenseURL = false;
                this._license = false;
        }

    }
    // show questions flag
    set showQuestions(flag) {
        (flag) ? this._questions = true : this._questions = false;
        return this._questions;
    }
    // contact email
    set contactEmail(email) {
        // improve this validation in the future
        if (email.length > 0) {
            this._contactEmail = email;
            return true;
        }
        this._video = false;
    }
    // contact github
    set contactGithub(flag) {
        (flag) ? this._contactGithub = true : this._contactGithub = false;
        return this._contactGithub;
    }
    // Getters in order they appear of the readme
    // This returns a formated list of requirements for the description
    get descriptionList() {
        if (this._descriptionList) {
            return "\n\nThe project had the following requirements:" +
                this._descriptionList.map(key => `\n\n- ${key}`).join("");
        }
        return "";
    };
    // This version is for HTML preview
    get descriptionListHTML() {
        if (this._descriptionList) {
            return `<p>The project had the following requirements:</p>
        <ul>` +
                this._descriptionList.map(key => `<li>${key}</li>`).join("") +
                `</ul>`;
        }
        return "";
    }
    // This makes the first section with the title and description. And a list of requirements if it has been added.
    get descriptionSection() {
        return `# ${this._title}\n\n## Description\n\n${this._description}${this.descriptionList}`;
    }
    // This version is for HTML preview
    get descriptionSectionHTML() {
        return `<h1>${this._title}</h1>
        <h2 id="demo-description"> Description</h2>
        <p>${this._description}</p>
        ${this.descriptionListHTML}`;
    }
    // This makes the contents section
    get contents() {
        if (this._contents) {
            return "\n\n## Table of Contents" +
                "\n\n- [Description](#description)" +
                "\n\n- [Table of Contents](#table-of-contents)" +
                "\n\n- [Installation](#installation)" +
                "\n\n- [Usage](#usage)".concat(
                    (this._features) ? "\n\n- [Features](#features)" : "",
                    (this._contribute) ? "\n\n- [Contributing](#contributing)" : "",
                    (this._tests) ? "\n\n- [Tests](#tests)" : "") +
                "\n\n- [Credits](#credits)".concat(
                    (this._license) ? "\n\n- [License](#license)" : "",
                    (this._questions) ? "\n\n- [Questions](#questions)" : "");
        }
        return "";
    }
    // This version is for HTML preview
    get contentsHTML() {
        if (this._contents) {
            return `<h2 id="demo-table-of-contents">Table of Contents</h2>` +
                `<ul>
                <li><a href="#demo-description">Description</a></li>
                <li><a href="#demo-table-of-contents">Table of Contents</a></li>
                <li><a href="#demo-installation">Installation</a></li>
                <li><a href="#demo-usage">Usage</a></li>`.concat(
                    (this._features) ? '<li><a href="#demo-features">Features</a></li>' : "",
                    (this._contribute) ? '<li><a href="#demo-contributing">Contributing</a></li>' : "",
                    (this._tests) ? '<li><a href="#demo-tests">Tests</a></li>' : "") +
                '<li><a href="#demo-credits">Credits</a></li>'.concat(
                    (this._license) ? '<li><a href="#demo-license">License</a></li>' : "",
                    (this._questions) ? '<li><a href="#demo-questions">Questions</a></li>' : "") +
                `</ul>`;
        }
        return "";
    }
    // This makes the installation section
    get installation() {
        if (this._installation) {
            return `\n\n## Installation\n\n${this._installation}`
        }
        return "\n\n## Installation\n\nThe project does not require installation steps.";
    }
    // This version is for HTML preview
    get installationHTML() {
        if (this._installation) {
            return `<h2 id="demo-installation">Installation</h2>
            <p>${this._installation}</p>`
        }
        return `<h2 id="demo-installation">Installation</h2>
        <p>The project does not require installation steps.</p>`;
    }
    // This makes the usage section
    get usage() {
        return "\n\n## Usage".concat(
            (this._screenshot) ? `\n\nA screenshot of the project can be seen below:\n\n![Screenshot of ${this._title}](${this._screenshot} "Screenshot of ${this.title}")` : "",
            (this._video) ? `\n\nA walkthrough video of the project can be seen at [this link](${this._video})` : ""
        ) +
            `\n\n${this._usage}`;
    }
    // This version is for HTML preview
    get usageHTML() {
        return `<h2 id="demo-usage">Usage</h2>`.concat(
            (this._screenshot) ? `<p>A screenshot of the project can be seen below:</p><img alt="Screenshot of ${this._title}" href="${this._screenshot}">` : "",
            (this._video) ? `<p>A walkthrough video of the project can be seen at <a href="${this._video}">this link</a></p>` : ""
        ) +
            `<p>${this._usage}</p>`;
    }
    // This makes the features section
    get features() {
        if (this._features) {
            return "\n\n## Features\n\nThis project has the following features:" +
                this._features.map(key => `\n\n- ${key}`).join("");
        }
        return "";
    }
    // This version is for HTML preview
    get featuresHTML() {
        if (this._features) {
            return `<h2 id="demo-features">Features</h2>
                <p>This project has the following features:</p>
                <ul>` +
                this._features.map(key => `<li>${key}</li>`).join("") +
                `</ul>`;
        }
        return "";
    }
    // This makes the contribute section
    get contribute() {
        if (this._contribute) {
            return `\n\n## Contributing` +
                `\n\n${this._contribute}`;
        }
        return "";
    }
    // This version is for HTML preview
    get contributeHTML() {
        if (this._contribute) {
            return `<h2 id="demo-contributing">Contributing</h2>` +
                `<p>${this._contribute}</p>`;
        }
        return "";
    }
    // This makes the test section
    get tests() {
        if (this._tests) {
            return `\n\n## Tests\n\nThe project has the following tests:` +
                this._tests.map(key => `\n\n- ${key}`).join("");;
        }
        return "\n\n## Tests\n\nThere are currently no tests for this project.";
    }
    // This version is for HTML preview
    get testsHTML() {
        if (this._tests) {
            return `<h2 id="demo-tests">Tests</h2>
            <p>The project has the following tests:</p><ul>` +
                this._tests.map(key => `<li>${key}</li>`).join("") +
                `</ul>`;
        }
        return `<h2 id="demo-tests">Tests</h2><p>There are currently no tests for this project.</p>`;
    }
    // This makes the credits section
    get credits() {
        if (this._credits) {
            return "\n\n## Credits" +
                "\n\nThe following resources where important for this project." +
                "\n\n- [Readme Generator](https://github.com/bowseruk/readme-generator-nodejs) for generating the readme." +
                this._credits.map(key => `\n\n- ${key}`).join("");
        }
        return "\n\n## Credits" +
            "\n\nThe following resources where important for this project." +
            "\n\n- [Readme Generator](https://github.com/bowseruk/readme-generator-nodejs) for generating the readme."
    }
    // This version is for HTML preview
    get creditsHTML() {
        if (this._credits) {
            return `<h2 id = "demo-credits">Credits</h2>
                <p>The following resources where important for this project.</p>
                <ul>
                <li><a href="https://github.com/bowseruk/readme-generator-nodejs">Readme Generator</a> for generating the readme.</li>` +
                this._credits.map(key => `<li>${key}</li>`).join("") +
                `</ul>`
        }
        return `<h2 id = "demo-credits">Credits</h2>
        <p>The following resources where important for this project.</p>
        <ul>
        <li><a href="https://github.com/bowseruk/readme-generator-nodejs">Readme Generator</a> for generating the readme.</li></ul>`
    }
    // This makes the licence section
    get license() {
        if ((!this._licenseFile) && (!this._license)) {
            return "";
        }
        return `\n\n## License`.concat(
            (this._badgeURL) ? `\n\n![${this._license}](${this._badgeURL})` : "",
            (this._license) ? `\n\nThis project is licensed under [${this._license}](${this._licenseURL})` : "",
            (this._licenseFile) ? `\n\nThis full license used by the project is in the LICENSE file of the repo.` : "");
    }
    // This version is for HTML preview
    get licenseHTML() {
        if ((!this._licenseFile) && (!this._license)) {
            return "";
        }
        return `<h2 id="demo-license">License</h2>`.concat(
            (this._badgeURL) ? `<img alt=${this._license} src="${this._badgeURL}">` : "",
            (this._license) ? `<p>This project is licensed under <a href="${this._licenseURL}">${this._license}</a></p>` : "",
            (this._licenseFile) ? `<p>This full license used by the project is in the LICENSE file of the repo.</p>` : "");
    }
    // This makes the questions section
    get questions() {
        if (this._questions && (this._contactEmail || this._contactGithub)) {
            return `\n\n## Questions\n\nPlease contact me with any questions by:`.concat(
                (this._contactEmail) ? `\n\n- Email: ${this._contactEmail}` : "",
                (this._contactGithub) ? `\n\n- Github Discussion - Add a discussion to this repo.` : ""
            )
        }
        return "";
    }
    // This version is for HTML preview
    get questionsHTML() {
        if (this._questions && (this._contactEmail || this._contactGithub)) {
            return `<h2 id="demo-questions">Questions<h2><p>Please contact me with any questions by:</p><ul>`.concat(
                (this._contactEmail) ? `<li>Email: ${this._contactEmail}</li>` : "",
                (this._contactGithub) ? `<li>Github Discussion - Add a discussion to this repo.</li>` : ""
            ) +
                `</ul>`
        }
        return "";
    }
    // This puts all the sections together to make a new readme
    get readme() {
        return this.descriptionSection +
            this.contents +
            this.installation +
            this.usage +
            this.features +
            this.contribute +
            this.tests +
            this.credits +
            this.license +
            this.questions
    }
    get readmeHTML() {
        return this.descriptionSectionHTML +
            this.contentsHTML +
            this.installationHTML +
            this.usageHTML +
            this.featuresHTML +
            this.contributeHTML +
            this.testsHTML +
            this.creditsHTML +
            this.licenseHTML +
            this.questionsHTML
    }
}