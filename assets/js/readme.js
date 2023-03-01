// This class makes the readme
class ReadmeObject {
    constructor(title, description, requirements, content, installation, installationInstruction, screenshot, screenshotURL, video, videoURL, usage, features, contribute, contributeInstruction, tests, credits, license) {
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
        this.license = license;
    };
    // helper functions
    checkLength(property) {
        let test = (property.length > 0) ? true : false
        return test;
    }
    // Uses both setters in the correct order for installation property
    setInstallation(flag, installationInstruction) {
        this.showInstallation(flag);
        return this.installation(installationInstruction);
    }    
    // Uses both setters in the correct order for screenshot property
    setScreenshot(flag, screenshotURL) {
        this.showScreenshot(flag);
        return this.screenshot(screenshotURL);
    }
    // Uses both setters in the correct order for video property
    setVideo(flag, videoURL) {
        this.showVideo(flag);
        return this.video(videoURL);
    }
    setContribute(flag, contributeInstruction) {
        this.showContribute(flag);
        return this.contribute(contributeInstruction);
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
            this._contribute= contributeInstruction;
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
    set license(license) {
        switch (license) {
            case (mit):
                this._badgeURL = "mit"
                this._license = "mit"
                break;
            default:
                this._badgeURL = false;
                this._license = false;
        }
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
    // This makes the first section with the title and description. And a list of requirements if it has been added.
    get descriptionSection() {
        return `# ${this._title}\n\n## Description\n\n${this._description}${this._descriptionList}`;
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
                    (this._questions) ? "\n\n- [License](#license)" : "");
        }
        return "";
    }
    // Setters

    // This makes the installation section
    get installation() {
        if (this._installation) {
            return `\n\n## Installation\n\n${this._installation}`
        }
        return "\n\n## Installation\n\nThe project does not require installation steps.";
    }
    // This makes the usage section
    get usage() {
        return "\n\n## Usage".concat(
            (this._screenshot) ? `\n\nA screenshot of the project can be seen below:\n\n![Screenshot of ${this.title}](${this._screenshot} "Screenshot of ${this.title}")` : "",
            (this._video) ? `\n\nA swalkthrough of the project can be seen at [this link](${this._video})` : ""
        ) +
            `\n\n${this._usage}`;
    }
    // This makes the features section
    get features() {
        if (this._features) {
            return "\n\n## Features\n\nThis project has the following features:" +
                this._features.map(key => `\n\n- ${key}`).join("");
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
    // This makes the test section
    get tests() {
        if (this._tests) {
            return `\n\n## Tests\n\nThe project has the following tests:` +
                this._tests.map(key => `\n\n- ${key}`).join("");;
        }
        return "\n\n## Tests\n\nThere are currently no tests for this project.";
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
    // This makes the licence section
    get license() {
        if (this._license) {
            return `\n\n## License\n\nThis project uses the license in the LICENSE file of the repo.`;
        }
        return "";
    }
    get questions() {
        if (this._questions) {
            return `\n\n##Questions\n\nPlease contact me with any questions by:`.concat(
                (this._contactEmail) ? `\n\n-Email: ${this._contactEmail}` : "",
                (this._contactGithub) ? `\n\n-Github Discussion: Add a discussion to this repo.` : ""
            )
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
}