const form = document.getElementById("contactForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const tel = document.getElementById("tel");
const comments = document.getElementById("comments");
const politics = document.getElementById("politics");
const validateForm = (e) => {
    e.preventDefault();
    // VALOR INICIAL
    let formOk = true;
    clearError();
    // VALORES
    const nameValue = name.value;
    const emailValue = email.value;
    const telValue = tel.value;
    const commentsValue = comments.value;
    const politicsValue = politics.checked;
    // REGEX
    const regexName = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ ]{3,}$/i;
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(es|com|net|org)$/;
    const regexTel = /^[0-9]{9}$/;
    const regexComments = /^[\s\S]{0,500}$/;
    // --- VALIDACIONES ---
    function clearError() {
        const spansError = document.querySelectorAll(".form-error__span");
        spansError.forEach(span => span.remove());
    }
    // 1. NAME
    const labelName = document.getElementById("labelName");
    if (!regexName.test(nameValue)) {
        console.error("Nombre formulario incorrecto");
        formOk = false;
        const span = document.createElement('span');
        span.className = "form-error__span";
        span.textContent = "Nombre no válido";
        labelName.appendChild(span);
    }
    // 2. EMAIL
    const labelEmail = document.getElementById("labelEmail");
    if (!regexEmail.test(emailValue)) {
        console.error("Email formulario incorrecto ");
        formOk = false;
        const span = document.createElement('span');
        span.className = "form-error__span";
        span.textContent = "Email no válido ej. usuario@gmail.com";
        labelEmail.appendChild(span);
    }
    // 3. TELÉFONO
    const labelTel = document.getElementById("labelTel");
    if (!regexTel.test(telValue)) {
        console.error("Teléfono formulario incorrecto ");
        formOk = false;
        const span = document.createElement('span');
        span.className = "form-error__span";
        span.textContent = "Teléfono no válido. Debe contener 9 números";
        labelTel.appendChild(span);
    }
    // 4. COMENTARIOS
    const labelComments = document.getElementById("labelComments");
    if (!regexComments.test(commentsValue)) {
        console.error("Comentarios formulario incorrecto ");
        formOk = false;
        const span = document.createElement('span');
        span.className = "form-error__span";
        span.textContent = "Comentarios no válidos. De 0 a 500 caracteres";
        labelComments.appendChild(span);
    }
    // 5. CHECK (POLÍTICA)
    const divPolitics = politics.parentElement;
    if (!politics.checked) {
        console.error("Check formulario incorrecto ");
        formOk = false;
        const span = document.createElement('span');
        span.className = "form-error__span";
        span.textContent = " Obligatorio aceptar los términos";
        divPolitics.appendChild(span);
    }
    // RESULTADO FINAL
    if (formOk) {
        // OBJETO
        const dataObject = {
            name: nameValue,
            email: emailValue,
            tel: telValue,
            comments: commentsValue,
            politics: politicsValue
        };
        // STRING PARA GUARDAR EN LOCALSTORAGE
        const dataContact = `       Nombre: ${nameValue}
        Email: ${emailValue}
        Teléfono: ${telValue}
        Comentarios: ${commentsValue}
        Acepta política: ${politicsValue}`;
        console.log(dataContact);
        localStorage.setItem("data", dataContact);
        alert("Formulario enviado con éxito");
    }
    else {
        console.log("El formulario tiene errores, no se guarda.");
    }
};
form.addEventListener("submit", validateForm);
export {};
//# sourceMappingURL=contact_form.js.map