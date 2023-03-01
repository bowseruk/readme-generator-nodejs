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
    // To construct the page
    makeTitle(text, html = false) {
        if (html) {
            return `<h1 id="demo-${text.toLowerCase().replaceAll(" ", "-")}">${text}</h1>`
        }
        return `# ${text}`
    }
    makeHeader(text, html = false) {
        if (html) {
            return `<h2 id="demo-${text.toLowerCase().replaceAll(" ", "-")}">${text}</h2>`
        }
        return `\n\n## ${text}`
    }
    makeLine(text, html = false) {
        if (html) {
            return `<p>${text}</p>`
        }
        return `\n\n${text}`
    }
    makeList(text, html = false) {
        if (html) {
            return `<ul>${text}</ul>`
        }
        return `${text}`
    }
    makeListObject(text, html = false) {
        if (html) {
            return `<li>${text}</li>`
        }
        return `\n\n- ${text}`
    }
    makeImg(link, alt, html = false) {
        if (html) {
            return `<img src=${link} alt=${alt}>`
        }
        return `\n\n[${alt}](${link})`
    }
    makeLink(link, text, html = false) {
        if (html) {
            return `<a href="${link}">${text}</a>`
        }
        return `[${text}](${link})`
    }
    makeContentsItem(title, html) {
        return this.makeListObject(this.makeLink((html) ? `#demo-${title.toLowerCase().replaceAll(" ", "-")}` : `#${title.toLowerCase().replaceAll(" ", "-")}`, title, html), html);
    }
    // Render Functions
    renderDescriptionList(html) {
        if (this._descriptionList) {
            return this.makeLine("The project had the following requirements:", html) +
                this.makeList(this._descriptionList.map(key => this.makeListObject(key, html)).join(""),
                    html);
        }
        return "";
    }
    renderDiscription(html) {
        return this.makeTitle(this._title, html) +
            this.makeHeader("Description", html) +
            this.makeLine(this._description, html) +
            this.renderDescriptionList(html);
    }
    // This is the backend function for html and markdown
    renderContents(html) {
        if (this._contents) {
            return this.makeHeader("Table of Contents", html) +
                this.makeList(
                    this.makeContentsItem("Description", html) +
                    this.makeContentsItem("Table of Contents", html) +
                    this.makeContentsItem("Installation", html) +
                    this.makeContentsItem("Usage", html).concat(
                        (this._features) ? this.makeContentsItem("Features", html) : "",
                        (this._contribute) ? this.makeContentsItem("Contributing", html) : "",
                        (this._tests) ? this.makeContentsItem("Tests", html) : "") +
                    this.makeContentsItem("Credits", html).concat(
                        (this._license) ? this.makeContentsItem("License", html) : "",
                        (this._questions) ? this.makeContentsItem("Questions", html) : ""
                    )
                    , html)
        }
        return "";
    }
    renderInstallation(html) {
        if (this._installation) {
            return this.makeHeader("Installation", html) +
                this.makeLine(this._installation, html);
        }
        return this.makeHeader("Installation", html) +
            this.makeLine("The project does not require installation steps.", html);
    }
    // This is the backend function for html and markdown
    renderUsage(html) {
        return this.makeHeader("Usage", html).concat(
            (this._screenshot) ? this.makeLine(`A screenshot of the project can be seen below:`, html) +
                this.makeImg(this._screenshot, `Screenshot`, html) : "",
            (this._video) ? this.makeLine(`A walkthrough video of the project can be seen at ${this.makeLink(this._video, "this link", html)}`, html) : ""
        ) +
            this.makeLine(this._usage, html);
    }
    // This is the backend function for html and markdown
    renderFeatures(html) {
        if (this._features) {
            return this.makeHeader("Features", html) +
                this.makeLine("This project has the following features:", html) +
                this.makeList(
                    this._features.map(key => this.makeListObject(key, html)).join(""),
                    html
                )
        }
        return "";
    }
    // This is the backend function for html and markdown
    renderContribute(html) {
        if (this._contribute) {
            return this.makeHeader('Contributing', html) +
                this.makeLine(this._contribute, html);
        }
        return "";
    }
    // This is the backend function for html and markdown
    renderTests(html) {
        if (this._tests) {
            return this.makeHeader("Tests", html) +
                this.makeLine("The project has the following tests:", html) +
                this.makeList(
                    this._tests.map(key => this.makeListObject(key, html)).join(""), html
                )
        }
        return this.makeHeader("Tests", html) +
            this.makeLine("There are currently no tests for this project.", html)
    }
    // This is the backend function for html and markdown
    renderCredits(html) {
        return this.makeHeader("Credits", html) +
            this.makeLine("The following resources where important for this project.", html) +
            this.makeList(
                this.makeListObject(`${this.makeLink("https://github.com/bowseruk/readme-generator-nodejs", "Readme Generator", html)} for generating the readme.`, html).concat(
                    (this._credits) ? this._credits.map(key => this.makeListObject(key, html)).join("") : "")
                , html);
    }
    // This is the backend function for html and markdown
    renderLicense(html) {
        if ((!this._licenseFile) && (!this._license)) {
            return "";
        }
        return this.makeHeader(`License`, html).concat(
            (this._badgeURL) ? this.makeImg(this._badgeURL, this._license, html) : "",
            (this._license) ? this.makeLine(`This project is licensed under ${this.makeLink(this._licenseURL, this._license, html)}`, html) : "",
            (this._licenseFile) ? this.makeLine(`This full license used by the project is in the LICENSE file of the repo.`, html) : ""
        );
    }
    // This function does the work for the getters - more maintainable, as html and markdown come from same function.
    renderQuestion(html) {
        if (this._questions && (this._contactEmail || this._contactGithub)) {
            return this.makeHeader("Questions", html) +
                this.makeLine("Please contact me with any questions by:") +
                this.makeList(
                    "".concat(
                        (this._contactEmail) ? this.makeListObject(`Email: ${this._contactEmail}`, html) : "",
                        (this._contactGithub) ? this.makeListObject(`Github Discussion - Add a discussion to this repo.`, html) : "")
                    , html)
        }
        return "";
    }
    renderReadme(html) {
        return this.renderDiscription(html) +
        this.renderContents(html) +
        this.renderInstallation(html) +
        this.renderUsage(html) +
        this.renderFeatures(html) +
        this.renderContribute(html) +
        this.renderTests(html) +
        this.renderCredits(html) +
        this.renderLicense(html) +
        this.renderQuestion(html)
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
        this._contactEmai = false;
    }
    // contact github
    set contactGithub(flag) {
        (flag) ? this._contactGithub = true : this._contactGithub = false;
        return this._contactGithub;
    }
    // Getters
    // This puts all the sections together to make a new readme
    get readme() {
        return this.renderReadme(false);
    }
    get readmeHTML() {
            return this.renderReadme(true);
    }
}