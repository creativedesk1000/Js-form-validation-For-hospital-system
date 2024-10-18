let patientName = document.getElementById("inputPatientName");
let email = document.getElementById("inputEmail");
let phoneNumber = document.getElementById("inputPhoneNumber");
let nameCheck = false;
let phoneCheck = false;
let emailCheck = false;

patientName.addEventListener("blur", checkPatientName);
email.addEventListener("blur", checkEmail);
phoneNumber.addEventListener("blur", checkPhoneNumber);

let submit = document.getElementById("submit");
let alerts = document.getElementById("alert");

submit.addEventListener("click", function (e) {
    if (nameCheck && phoneCheck && emailCheck) {
        alerts.innerHTML = `
            <div class="alert alert-success alert-dismissible fade show" role="alert">
                <strong>Successfully</strong> submitted the form.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`;
    } else {
        alerts.innerHTML = `
            <div class="alert alert-danger alert-dismissible fade show" role="alert">
                <strong>Please</strong> enter valid details.
                <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div>`;
    }
    setTimeout(() => {
        alerts.innerHTML = "";
    }, 3000);
    
    e.preventDefault();
});

function checkPatientName() {
    let reg = /^([a-zA-Z ]){4,30}$/; // Adjusted regex for name validation
    let str = patientName.value;
    if (reg.test(str)) {
        patientName.classList.remove("is-invalid");
        nameCheck = true;
    } else {
        patientName.classList.add("is-invalid");
        nameCheck = false;
    }
}

function checkEmail() {
    let reg = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([A-Za-z]{2,8})$/;
    let str = email.value;

    if (reg.test(str)) {
        emailCheck = true;
        email.classList.remove("is-invalid");
    } else {
        emailCheck = false;
        email.classList.add("is-invalid");
    }
}

function checkPhoneNumber() {
    let reg = /^([0-9]){10,12}$/; // Adjusted regex for phone number validation
    let str = phoneNumber.value;
    if (reg.test(str)) {
        phoneNumber.classList.remove("is-invalid");
        phoneCheck = true;
    } else {
        phoneCheck = false;
        phoneNumber.classList.add("is-invalid");
    }
}