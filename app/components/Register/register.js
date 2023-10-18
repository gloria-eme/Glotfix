
import { printLogin } from "../../pages/Login/login";
import { Movies } from "../../pages/Movies/Movies";
import { CleanPage } from "../../utils/utils";

const app = document.querySelector("#app")

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
    
    if (password.length >= 6 && /[A-Z]/.test(password)) {
        localStorage.setItem("username", username);
        localStorage.setItem("loggedIn", "true"); // Marcar como conectado
        const loginContainer = document.querySelector(".login-section")
        loginContainer.innerHTML = ""
        Movies()  
    } else {
        alert("La contraseña debe tener un mínimo 6 caracteres y una letra mayúscula.");
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
