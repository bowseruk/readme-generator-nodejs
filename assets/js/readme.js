// This class makes the readme
class ReadmeObject {
    constructor(title, description, requirements, content, installation, installationInstruction, usage, features, contribute, contributeInstruction, tests, credits, license) {
        this.title = title;
        this.description = description;
        if (requirements.length > 0) {
            this._descriptionList = requirements;
        } else {
            this._descriptionList = false; 
        }
        this._contents = content;
        if (installation) {
            this._installation = installationInstruction;
        } else {
            this._installation = false; 
        }
        this._usage = usage;
        if (features.length > 0) {
            this._features = features;
        } else {
            this._features = false; 
        }
        if (contribute) {
            this._contribute = contributeInstruction;
        } else {
            this._contribute = false; 
        }
        if (credits.length > 0) {
            this._credits = credits;
        } else {
            this._credits = false; 
        }
        if (tests.length > 0) {
            this._tests = tests;
        } else {
            this._tests = false; 
        }
        this._license = license;
    };
    // This returns a formated list of requirements for the description
    get descriptionList() {
        if (this._descriptionList) {
            return "The project had the following requirements:" +
            this._descriptionList.map(key => `\n\n- ${key}`).join("");
        }
        return "";
    };
    // This makes the first section with the title and description. And a list of requirements if it has been added.
    get descriptionSection() {
        return `# ${this.title}\n\n## Description\n\n${this.description}${this.descriptionList}`;
    }
    // This makes the contents section
    get contents() {
        if (this._contents) {
            return "\n\n## Table of Contents" +
                "\n\n- [Description](#description)" +
                "\n\n- [Contents](#contents)" +
                "\n\n- [Installation](#installation)" +
                "\n\n- [Usage](#usage)".concat(
                (this._features) ? "\n\n- [Features](#features)" : "",
                (this._contribute) ? "\n\n- [Contribute](#contribute)" : "",
                (this._tests) ? "\n\n- [Tests](#tests)" : "") +
                "\n\n- [Credits](#credits)".concat(
                (this._license) ? "\n\n- [License](#license)" : "");
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
    // This makes the usage section
    get usage() {
        return "\n\n## Usage" +
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
            return `\n\n## Contribute` +
                `\n\n${this._contribute}`;
        }
        return "";
    }
    // This makes the test section
    get tests() {
        if (this._tests) {
            return `\n\n## Tests` +
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
            this.license
    }
}