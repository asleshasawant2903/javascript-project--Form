// Define error message elements
var nameError = document.getElementById('name_error');
var emailError = document.getElementById('email_error');
var numberError = document.getElementById('number_error');
var messageError = document.getElementById('mesage_error');
var formerror =document.getElementById('submitterror');

function validName() {
    var name = document.getElementById('contact-name').value;

    if (name.length === 0) {
        nameError.innerHTML = "Name is required";
        return false;
    }

    if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        nameError.innerHTML = "Write full name (First Last)";
        return false;
    }

    nameError.innerHTML = "✅ Valid";
    nameError.style.color = "green"; // Optional: make success messages green
    return true;
}



function validEmail() {
    var email = document.getElementById('contact-email').value;
    var emailError = document.getElementById('email_error'); // Define error span

    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (email.length === 0) {
        email_error.innerHTML = "📌 Email is required";
        email_error.style.color = "red"; // Error message in red
        return false;
    }

    if (!email.match(emailPattern)) {
        email_error.innerHTML = "⚠️ Invalid email format";
        email_error.style.color = "red";
        return false;
    }

    email_error.innerHTML = "✅ Valid";
    emailError.style.color = "green"; // Success message in green
    return true;
}

function validMessage() {
    var message = document.getElementById('contact-message').value; 
    var messageError = document.getElementById('message_error'); // Define error span

    var required = 30; // Minimum required characters
    var left = required - message.length; // Remaining characters

    if (left > 0) {
        messageError.innerHTML = `⚠️ ${left} more characters required`;
        messageError.style.color = "red"; // Show error in red
        return false;
    }

    messageError.innerHTML = "✅ Valid";
    messageError.style.color = "green"; // Show success in green
    return true;
}





function validPhone() {
    var phone = document.getElementById('contact-phone').value; 
    var numberError = document.getElementById('number_error'); // Ensure correct ID

    var phonePattern = /^[0-9]{10}$/; // Exactly 10 digits

    if (phone.length === 0) {
        numberError.innerHTML = "📌 Phone number is required";
        numberError.style.color = "red";
        return false;
    }

    if (!phone.match(phonePattern)) {
        numberError.innerHTML = "⚠️ Phone number must be exactly 10 digits";
        numberError.style.color = "red";
        return false;
    }

    numberError.innerHTML = "✅ Valid";
    numberError.style.color = "green";
    return true;
}
function validMessage() {
    var message = document.getElementById('contact-message').value; 
    var messageError = document.getElementById('message_error'); // Corrected ID

    var required = 30; // Minimum required characters
    var left = required - message.length; // Remaining characters

    if (left > 0) {
        messageError.innerHTML = `⚠️ ${left} more characters required`;
        messageError.style.color = "red"; // Show error in red
        return false;
    }

    messageError.innerHTML = "✅ Valid";
    messageError.style.color = "green"; // Show success in green
    return true;
}



function validform() {
    var submitError = document.getElementById('submitterror'); // Corrected ID reference

    if (!validName() || !validPhone() || !validMessage()) {
        submitError.style.display = "block";
        submitError.innerHTML = "⚠️ Please fix the errors before submitting.";
        submitError.style.color = "red";

        setTimeout(function () {
            submitError.style.display = 'none';
        }, 3000);

        return false;
    }

    return true; // Form is valid
}



let popup = document.getElementById("popup");
function openpop_up(){
    popup.classList.add("openpop_up");
}
function  close_pop(){
    popup.classList.remove("openpop_up");
}
    
