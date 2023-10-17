const password = document.querySelector("#password")
const confirmPassword = document.querySelector("#confirm-password")
const submitBtn = document.querySelector(".btn-create-account")
const passwordErrorText = document.querySelector(".password-error")




submitBtn.addEventListener("click", (e) => {
    
    if (password.value !== confirmPassword.value) {
        password.classList.add("error")
        confirmPassword.classList.add("error")
        passwordErrorText.style.display = "block"
        e.preventDefault()
    } else {
        password.classList.remove("error")
        confirmPassword.classList.remove("error")
        passwordErrorText.style.display = "none"
    }
})



