const passwordInput = document.querySelector("#password")
const confirmPasswordInput = document.querySelector("#confirm-password")
const createAccountBtn = document.querySelector("#create-account")
const passwordErrorMessage = document.querySelector("#password-error")

const firstNameInput = document.querySelector("#first-name")

let password = "";
let confirmPassword = "";

const handlePasswordInput = () => {
    password = passwordInput.value;
    checkPasswordsMatch();
}

const handleConfirmPasswordInput = () => {
    confirmPassword = confirmPasswordInput.value;
    checkPasswordsMatch();
}

passwordInput.addEventListener("input", handlePasswordInput)
confirmPasswordInput.addEventListener("input", handleConfirmPasswordInput)


if (password) {
    console.log(password)
}

const checkPasswordsMatch = () => {
    if (passwordInput.value != confirmPasswordInput.value && password != "") {
        console.log("NO")
        createAccountBtn.disabled = true;
        passwordInput.classList.add("error");
        confirmPasswordInput.classList.add("error");
        passwordErrorMessage.style.display = "block"

    } else {
        passwordInput.classList.remove("error")
        confirmPasswordInput.classList.remove("error")
        createAccountBtn.disable = false;
        passwordErrorMessage.style.display = "none"
    }
}





