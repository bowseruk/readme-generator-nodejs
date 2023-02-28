// This class makes the readme
class ReadmeObject {
    constructor(title, description, usage) {
        this.title = title;
        this.description = description;
        this._usage = usage;
        this._descriptionList = ["test1", "test2", "test3"];
        this._license = true;
    };
    // This returns a formated list of requirements for the description
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
            return "\n\n## Table of Contents" +
                "\n\n- [Description](#description)" +
                "\n\n- [Contents](#contents)" +
                "\n\n- [Installation](#installation)" +
                "\n\n- [Usage](#usage)" +
                (this._features) ? "\n\n- [Features](#features)" : "" +
                (this._contribute) ? "\n\n- [Contribute](#contribute)" : "" +
                (this._tests) ? "\n\n- [Tests](#tests)" : "" +
                "\n\n- [Credits](#credits)" +
                (this._license) ? "\n\n- [License](#license)" : "";
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
            return "## Features"
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
                `\n\n${this._contribute}`;
        }
        return "";
    }
    // This makes the credits section
    get credits() {
        return "\n\n## Credits" +
            "\n\nThe following resources where important for this project." +
            "\n\n- [Readme Generator](https://github.com/bowseruk/readme-generator-nodejs) for generating the readme.";
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