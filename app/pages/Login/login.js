import "./loginStyle.css"

export const printLogin = () => {
    const app = document.querySelector("#app")
    const loginSection = document.createElement("section");
    loginSection.classList.add("login-section");
    loginSection.innerHTML = `
    <h1 class="h1-login">GLOTFLIX</h1>
    <div class="login-container"> 
        <h1 class="h2-login">Inicia  sesión</h1>
        <div class="login">
            <label for="username">Nombre de usuario:</label>
            <input type="text" id="username" required>
            <label for="password">Contraseña:</label>
            <input type="password" id="password" required>
            <p class="password-error" id="password-error"></p>
        </div>
        <button class="submit" type="submit">Entrar</button>
    </div>
    `
    
    app.appendChild(loginSection)
    
}

