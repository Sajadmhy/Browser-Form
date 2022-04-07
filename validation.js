const form = document.getElementsByTagName("form")[0];
const email = document.getElementById("email");
const country = document.getElementById("country");
const zip = document.getElementById("zip-code");
const pass = document.getElementById("pass");
const conPass = document.getElementById("con-pass");

// function emailCheck() {
// email.addEventListener("input", function(event) {
//     if (email.validity.typeMismatch) {
//         event.preventDefault();
//         email.setCustomValidity("I am expecting an e-mail address!");
//         email.reportValidity();
//     } else {
//         email.setCustomValidity("");
//     }
// })};

// function countryCheck() {
// country.addEventListener("input", function(event) {
//     if (country.validity.typeMismatch) {
//         event.preventDefault();
//         country.setCustomValidity("This is not a country!");
//         country.reportValidity();
//     } else {
//         country.setCustomValidity("");
//     }
// })};

// function passCheck() {
// conPass.addEventListener("input", function(event) {
//     if (conPass.value !== pass.value) {
//         event.preventDefault();
//         conPass.setCustomValidity(`Passwords don't match`);
//         conPass.reportValidity();
//     } else {
//         conPass.setCustomValidity("");
//     }
// })};

// function validCheck() {
//     // emailCheck();
//     // countryCheck();
//     // passCheck();
// };

form.addEventListener("submit", function(event){
    if (email.validity.typeMismatch) {
        event.preventDefault();
        email.setCustomValidity("I am expecting an e-mail address!");
        email.reportValidity();
    } else if (conPass.value !== pass.value) {
        event.preventDefault();
        conPass.setCustomValidity(`Passwords don't match`);
        conPass.reportValidity();
    } else if (!country.validity.valid) {
        event.preventDefault();
        country.setCustomValidity("This is not a country!");
        country.reportValidity();
    } else if (email.value == "" || country.value == "" || zip.value == "" 
    || pass.value == "" || conPass.value == "") {
        event.preventDefault();
        alert("Please enter your information")
    } else {
        email.setCustomValidity("");
        country.setCustomValidity("");
        conPass.setCustomValidity("");
    }
});

// validCheck();    
