//function that checks the pssws are the same
let error = document.querySelector(".error");
function checkPssw(pssw1, pssw2) {
    if (pssw1 !== pssw2) {

        error.textContent = "Passwords are not the same";
        error.style.color = "red";
        setTimeout(function () {
            error.textContent = "";
        }, 1000)


    }
};
// This replace the placeholder in case the input loose focus with no data
const emptyField = document.querySelectorAll("input").forEach(function (e) {
    e.addEventListener("click", function () {
        let placeholder = e.placeholder;
        console.log(placeholder);
        e.setAttribute("placeholder", "");
        e.addEventListener("blur", function () {
            if (e.value === "") {
                e.setAttribute("placeholder", placeholder);
            }
        })
    })
});
//check the name input
const validName = document.getElementById("name").addEventListener("blur", function (e) {
    if ((document.getElementById("name")).checkValidity() === false) {
        error.textContent = "Insert the correct Name! ex: John";
        error.style.color = "red";

        setTimeout(function () {
            error.textContent = "";
        }, 2000)
        document.getElementById("name").value = "";
    }
})
//check the lastName
const validSurname = document.getElementById("surname").addEventListener("blur", function (e) {
    if ((document.getElementById("surname")).checkValidity() === false) {
        error.textContent = "Insert the correct Last Name! ex: Smith";
        error.style.color = "red";
        setTimeout(function () {
            error.textContent = "";
        }, 2000)
        document.getElementById("surname").value = "";
    }
})
//check Email
const validEmail = document.getElementById("email").addEventListener("blur", function () {
    if ((document.getElementById("email")).checkValidity() === false) {
        error.textContent = "Insert the correct Email! example@example.com";
        error.style.color = "red";
        setTimeout(function () {
            error.textContent = "";
        }, 2000)
        document.getElementById("email").value = "";
    }
})
//check phone number
const validPhone = document.getElementById("phone").addEventListener("blur", function () {
    if ((document.getElementById("phone")).checkValidity() === false) {
        error.textContent = "Phone Number Invalid";
        error.style.color = "red";
        setTimeout(function () {
            error.textContent = "";
        }, 2000)
        document.getElementById("phone").value = "";
    }
})
//check Password
const validPssw = document.getElementById("pssw1").addEventListener("blur", function () {
    if ((document.getElementById("pssw1")).checkValidity() === false) {
        error.textContent = "Password must have one capital letter and one lowercase letter";
        error.style.color = "red";
        setTimeout(function () {
            error.textContent = "";
        }, 3000)
    }
})
//password compare
const checkSubmit = document.getElementById("form").addEventListener("submit", function (e) {

    let pssw1 = document.getElementById("pssw1").value;
    let pssw2 = document.getElementById("pssw2").value;
    if (pssw1 === "" || pssw2 === "") {
        e.preventDefault();
        error.textContent = "Fill the passwords Input";
        error.style.color = "red";
        setTimeout(function () {
            error.textContent = "";
        }, 2000)

    } else if (pssw1 !== pssw2) {
        e.preventDefault();
        error.textContent = "Passwords are not matching";
        error.style.color = "red";
        setTimeout(function () {
            error.textContent = "";
        }, 2000)
    } else if (pssw1 === pssw2) {
        e.preventDefault();
        error.textContent = "Form successfull submitted";
        error.style.color = "green";
        //document.getElementById("form").submit();
    }
})