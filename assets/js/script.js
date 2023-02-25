// Create a list of requirements
let requirements = 0;
// Add requirement
function addRequirement() {
    requirements++;
    $('#requirement-display').append($('<div>').addClass("form-floating").append($('<input>').addClass("form-control").attr({placeholder:"Requirement", id:"requirement-"+requirements, name:"requirement-"+requirements}),$('<label>').attr({for:"requirement-"+requirements}).text("Requirement")))
    return true;
}
// Remove Requirement
function removeRequirement(){
    if (requirements <= 0) {
        return false;
    }
    requirements--;
    $("#requirement-display").find("div:last").remove();
    return true;
}
$('#add-requirement').on("click",addRequirement);
$('#remove-requirement').on("click",removeRequirement);
// Create a list of Features
let features = 0;
// Add Deature
function addFeature() {
    features++;
    $('#feature-display').append($('<div>').addClass("form-floating").append($('<input>').addClass("form-control").attr({placeholder:"Feature", id:"feature-"+features, name:"feature-"+features}),$('<label>').attr({for:"feature-"+features}).text("Feature")))
    return true;
}
// Remove Feature
function removeFeature(){
    if (features <= 0) {
        return false;
    }
    features--;
    $("#feature-display").find("div:last").remove();
    return true;
}
$('#add-feature').on("click",addFeature);
$('#remove-feature').on("click",removeFeature);
// Create a list of Features
let credits = 0;
function addCredit() {
    credits++;
    $('#credit-display').append($('<div>').addClass("form-floating").append($('<input>').addClass("form-control").attr({placeholder:"Credit", id:"credit-"+credits, name:"credit-"+credits}),$('<label>').attr({for:"credit-"+credits}).text("Credit")))
    return true;
}
function removeCredit(){
    if (credits <= 0) {
        return false;
    }
    credits--;
    $("#credit-display").find("div:last").remove();
    return true;
}
$('#add-credit').on("click",addCredit);
$('#remove-credit').on("click",removeCredit);