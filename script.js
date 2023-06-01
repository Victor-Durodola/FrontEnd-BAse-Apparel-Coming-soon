const inputEmail = document.querySelector(".inputEmail")
const errorMessage = document.querySelector(".error-span")

function check() {
    console.log("helle", inputEmail)
    if (inputEmail.innerText =="") {
        inputEmail.classList.add("error-icon")
        errorMessage.classList.add("activate")
    } 
}