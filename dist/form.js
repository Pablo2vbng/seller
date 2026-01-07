const form = document.getElementById("contactForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const tel = document.getElementById("tel");
const comments = document.getElementById("comments");
const politics = document.getElementById("politics");
const validateForm = () => {
    //VALORES
    const nameValue = name.value;
    const emailValue = email.value;
    const telValue = tel.value;
    const commentsValue = comments.value;
    const politicsValue = politics.checked;
    //OBJETO
    const dataObject = {
        name: nameValue,
        email: emailValue,
        tel: telValue,
        comments: commentsValue,
        politics: politicsValue
    };
    // STRING PARA GUARDAR EN LOCALSTORAGE
    const data = `Nombre: ${nameValue}
                    Email: ${emailValue}
                    Teléfono: ${telValue}
                    Comentarios: ${commentsValue}
                    Acepta polícitca: ${politicsValue}`;
    console.log(data);
    localStorage.setItem("data", data);
};
form.addEventListener("submit", validateForm);
export {};
//# sourceMappingURL=form.js.map