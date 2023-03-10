import ReadmeObject from "../../modules/readme.js"
// This section is button functionality

// template for adding with a button
function addSection(name, counter) {
    counter++;
    $(`#${name.toLowerCase()}-display`).append($('<div>').addClass("form-floating").append($('<input>').addClass("form-control").attr({ placeholder: `${name}`, id: `${name.toLowerCase()}-` + counter, name: `${name.toLowerCase()}-` + counter }), $('<label>').attr({ for: `${name.toLowerCase()}-` + counter }).text(`${name}`)))
    return counter;
}
// template for removing with a button
function removeSection(name, counter) {
    if (counter <= 0) {
        return 0;
    }
    counter--;
    $(`#${name.toLowerCase()}-display`).find("div:last").remove();
    return counter;
}
// Create a list of requirements
let requirements = 0;
// Add requirement
function addRequirement() {
    // Add a requirement;
    requirements = addSection("Requirement", requirements);
    return true;
}
// Remove Requirement
function removeRequirement() {
    // Remove a feature 
    requirements = removeSection("Requirement", requirements);
    return true
}
// Event listeners
$('#add-requirement').on("click", addRequirement);
$('#remove-requirement').on("click", removeRequirement);
// Create a list of Features
let features = 0;
// Add Feature
function addFeature() {
    // Add a test;
    features = addSection("Feature", features);
    return true;
}
// Remove Feature
function removeFeature() {
    // Remove a feature 
    features = removeSection("Feature", features);
    return true;
}
// Event listeners
$('#add-feature').on("click", addFeature);
$('#remove-feature').on("click", removeFeature);
// Create a list of Tests
let tests = 0;
function addTest() {
    // Add a test;
    tests = addSection("Test", tests);
    return true;
}
function removeTest() {
    // Remove a test
    tests = removeSection("Test", tests);
    return true;
}
// Event listeners
$('#add-test').on("click", addTest);
$('#remove-test').on("click", removeTest);
// Create a list of Features
let credits = 0;
function addCredit() {
    // Adds a credit
    credits = addSection("Credit", credits);
    return true;
}
function removeCredit() {
    // Removes a credit
    credits = removeSection("Credit", credits);
    return true;
}
// Event listeners
$('#add-credit').on("click", addCredit);
$('#remove-credit').on("click", removeCredit);

// This section is reacting to checking a button
function showField(name, flag) {
    if (!flag) {
        $(`#${name}`).hide().val("");
        return false;
    }
    $(`#${name}`).show().val("");
    return true;
}
// This areas hide if the checkbox is not checked
function hideInstallation() {
    let flag = readCheckbox("installation");
    showField("installation-instructions-div", flag);
}
function hideScreenshot() {
    let flag = readCheckbox("include-screenshot");
    showField("screenshot-link-div", flag);
}
function hideVideo() {
    let flag = readCheckbox("include-video");
    showField("video-link-div", flag);
}
function hideContribution() {
    let flag = readCheckbox("contribute");
    showField("contribute-instructions-div", flag);
}
function hideQuestions() {
    let flag = readCheckbox("show-questions");
    showField("github-discussion-div", flag);
    showField("email-div", flag);
    showField("github-profile-div", flag);
}
// Hide the download button unless a title is input
function hideDownload() {
    let flag = (readField("title").length > 0);
    showField("download-section", flag);
}

// Helper functions to read fields
function readField(name) {
    return $(`#${name.toLowerCase()}`).val();
}
function readCheckbox(name) {
    return $(`#${name}`).is(":checked")
}
function readDynamicField(name, counter) {
    let values = []
    for (let i = 1; i < counter + 1; i++) {
        values.push(readField(`${name}-` + i))
    }
    return values;
}
// This section gets input values
function readInputs() {
    let input = {}
    // Description
    input.title = readField("title");
    input.description = readField("description");
    input.requirements = readDynamicField("Requirement", requirements);
    // Contents
    input.content = readCheckbox("contents");
    // Installation
    input.installation = readCheckbox("installation");
    input.installationInstruction = readField("installation-instructions");
    // Usage
    input.screenshot = readCheckbox("include-screenshot");
    input.screenshotURL = readField("screenshot-link");
    input.video = readCheckbox("include-video");
    input.videoURL = readField("video-link");
    input.usage = readField("usage");
    // Features
    input.features = readDynamicField("Feature", features);
    // Contribute
    input.contribute = readCheckbox("contribute");
    input.contributeInstruction = readField("contribute-instructions");
    // Credits
    input.credits = readDynamicField("Credit", credits);
    const addCredit = (id, text) => {
        if (readCheckbox(id)) {
            input.credits.push(text)
        }
    }
    addCredit("w3validator", "The changes were checked with [W3C Validator](https://validator.w3.org/).");
    addCredit("w3school", "[W3School](https://www.w3schools.com/) was used as a reference for elements to use and good practice.");
    addCredit("mdn", "[MDN](https://developer.mozilla.org/en-US/) is a very comprehensive and useful resource.");
    addCredit("stack-overflow", "[Stack Overflow](https://stackoverflow.com/) always seems to have the answer to a problem that occurs.");
    addCredit("bootstrap", "[Bootstrap](https://getbootstrap.com/) was used in this project using the documentation on their website.");
    addCredit("font-awesome", "[Font Awesome](https://fontawesome.com/) was used and the documentation referenced.");
    addCredit("j-query", "[JQuery](https://jquery.com/) documentation was referred to throughout the project.");
    addCredit("inquirer", "The [Inquirer](https://www.npmjs.com/package/inquirer) package was used with node.js, following the documentation.");
    addCredit("node-js", "[Node.js](https://nodejs.org/) was used in the project, following documentation from their site.");
    addCredit("jest", "[Jest.js](https://jestjs.io/) was used as a testing framework for the project, following documentation from their site.");
    // Tests
    input.tests = readDynamicField("Test", tests);
    // License
    input.licenseFile = readCheckbox("license-file");
    input.license = readField("license");
    // Questions
    input.questions = readCheckbox("show-questions");
    input.githubDiscussion = readCheckbox("github-discussion");
    input.email = readField("email");
    input.githubProfile = readField("github-profile");
    // Turn the content into a readme object
    return new ReadmeObject(input);
}
// Download the file - based on stack overflow post
function download(content, mimeType, filename) {
    const a = document.createElement('a') // Create "a" element
    const blob = new Blob([content], { type: mimeType }) // Create a blob (file-like object)
    const url = URL.createObjectURL(blob) // Create an object URL from blob
    a.setAttribute('href', url) // Set "a" element link
    a.setAttribute('download', filename) // Set download filename
    a.click() // Start downloading
}
// Look for changes to the form
$('form').change(function () {
    init();
    let readme = readInputs();
    $('#markdown').html(readme.readme.split('\n').join("<br>"))
    $('#html-preview').html(readme.readmeHTML)
});
// Button event listener moved due to issues
$('#download-button').on("click", (event) => {
    event.stopPropagation();
    download(readInputs().readme, "text/markdown", "readme.md");
})
// Startup function
function init() {
    hideInstallation()
    hideScreenshot()
    hideVideo()
    hideContribution()
    hideQuestions()
    hideDownload()
}
// Start init function
init();