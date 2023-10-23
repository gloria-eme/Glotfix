
import { printLogin } from "../../pages/Login/login";
import { Movies } from "../../pages/Movies/Movies";
import { CleanPage } from "../../utils/utils";

export const RegisterName = () => {
    printLogin()
    const submit = document.querySelector(".submit");
    submit.addEventListener("click", () => {
        return setUser();
    })
}

const setUser = () => {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const passwordError = document.getElementById('password-error');
    
    if (password.length >= 6) {
        localStorage.setItem("username", username);
        localStorage.setItem("loggedIn", "true"); // Marcar como conectado
        const loginContainer = document.querySelector(".login-section")
        loginContainer.innerHTML = ""
        Movies()  
    } else {
        passwordError.textContent = '*La contraseña debe tener al menos 6 caracteres.';
        passwordError.style.display = 'block';
    }
}


export const isLogged = () => {
    document.addEventListener("DOMContentLoaded", function () {
        const loggedIn = localStorage.getItem("loggedIn");
        
        if (loggedIn !== "true") {
           Login()
        } else {
            const app = document.querySelector("#app")
            CleanPage(app)
            Movies()
        }
    });
}



