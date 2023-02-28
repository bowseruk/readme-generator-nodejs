
// This section is button functionality

// template for adding with a button
function addSection(name, counter) {
    counter++;
    $(`#${name.toLowerCase()}-display`).append($('<div>').addClass("form-floating").append($('<input>').addClass("form-control").attr({ placeholder: `${name}`, id: `${name.toLowerCase()}-` + counter, name: `${name.toLowerCase()}-` + counter }), $('<label>').attr({ for: `${name.toLowerCase()}-` + counter }).text(`${name}`)))
    return counter;
}
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
$('#add-credit').on("click", addCredit);
$('#remove-credit').on("click", removeCredit);

// This section is reacting to checking a button
//
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
    let titleValue = readField("title");
    let descriptionValue = readField("description");
    let requirementValue = readDynamicField("Requirement", requirements);
    let contentValue = readCheckbox("contents");
    let installationValue = readCheckbox("installation");
    let installationInstructionValue = readField("installation-instructions");
    let usageValue = readField("usage");
    let featuresValue = readDynamicField("Feature", features);
    let contributeValue = readCheckbox("contribute");
    let contributeInstructionValue = readField("contribute-instructions");
    let testsValue = readDynamicField("Test", tests);
    let w3validatorValue = readCheckbox("w3validator");
    let w3schoolValue = readCheckbox("w3school");
    let mdnValue = readCheckbox("mdn");
    let stackOverflowValue = readCheckbox("stack-overflow");
    let bootstrapValue = readCheckbox("bootstrap");
    let jQueryValue = readCheckbox("j-query");
    let inquirerValue = readCheckbox("inquirer");
    let nodeJSValue = readCheckbox("node-js");
    let creditsValue = readDynamicField("Credit", credits);
    let licenseValue = readCheckbox("license");


    return [titleValue, descriptionValue, requirementValue, contentValue, installationValue, installationInstructionValue, usageValue, featuresValue, contributeValue, contributeInstructionValue, testsValue, w3validatorValue, w3schoolValue, mdnValue, stackOverflowValue, bootstrapValue, jQueryValue, inquirerValue, nodeJSValue, creditsValue, licenseValue]
    
}