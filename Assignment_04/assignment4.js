var registration = document.getElementById("registration");
var firstName = document.getElementById("FName");
var lastName = document.getElementById("LName");
var address = document.getElementById("address");
var city = document.getElementById("city");
var postalCode = document.getElementById("PCode");
var province = document.getElementById("province");
var age = document.getElementById("age");
var password = document.getElementById("password");
var passwordConfirm = document.getElementById("passConfirm");
var email = document.getElementById("email");

function checkPostalCode() {
    if (!/^[A-Z][0-9][A-Z][0-9][A-Z][0-9]$/i.test(postalCode.value || "")) {
        postalCode.setCustomValidity("Type Your Postal Code in the A1B2C3 format.");
    } else {
        postalCode.setCustomValidity("");
    }
}

postalCode.addEventListener("change", checkPostalCode, false);

function checkProvince() {
    if (!/^(AB|BC|MN|ON|QC|SK)$/i.test(province.value || "")) {
        province.setCustomValidity("Type one of the following Province: AB, BC, MN, ON, QC, or SK.");
    } else {
        province.setCustomValidity("");
    }
}

province.addEventListener("change", checkProvince, false);

function checkPassword() {
    var pass = password.value || "";

    if (pass.length < 6) {
        password.setCustomValidity("Password must be at least 6 characters long.");
    } else if (!/[0-9]/.test(pass)) {
        password.setCustomValidity("Password must contain at least one digit.");
    } else if (!/[A-Z]/.test(pass)) {
        password.setCustomValidity("Password must contain at least one uppercase letter.");
    } else {
        password.setCustomValidity("");
    }
}

password.addEventListener("change", checkPassword, false);

function checkIfPasswordsMatch() {
    if (password.value !== passwordConfirm.value) {
        passwordConfirm.setCustomValidity("Password does not match.");
    } else {
        passwordConfirm.setCustomValidity("");
    }
}

password.addEventListener("change", checkIfPasswordsMatch, false);
passwordConfirm.addEventListener("change", checkIfPasswordsMatch, false);

function checkEmail() {
    if (!/^.*?@.*?\..*?$/.test(email.value || "")) {
        email.setCustomValidity("Not a valid E-mail Address. Please Type Correct E-mail address");
    } else {
        email.setCustomValidity("");
    }
}

email.addEventListener("change", checkEmail, false);

function submitForm(e) {
    e.preventDefault();

    if (!registration.checkValidity()) {
        return;
    }

    alert("Congratulation. Customer Record Has Been Created Successfully. We Appreciate Your Effort To Be a member with us. ");
}

registration.addEventListener("submit", submitForm, false);
