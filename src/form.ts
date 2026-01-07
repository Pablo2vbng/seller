const form = document.getElementById("contactForm") as HTMLFormElement
const name = document.getElementById("name") as HTMLInputElement
const email = document.getElementById("email") as HTMLInputElement
const tel = document.getElementById("tel") as HTMLInputElement
const comments = document.getElementById("comments") as HTMLInputElement
const politics = document.getElementById("politics") as HTMLInputElement

const validateForm = () => {
    //VALORES
    const nameValue: string = name.value
    const emailValue: string = email.value
    const telValue: string = tel.value
    const commentsValue: string = comments.value
    const politicsValue  = politics.checked

    //OBJETO
    const dataObject = {
        name: nameValue,
        email: emailValue,
        tel: telValue,
        comments: commentsValue,
        politics: politicsValue
    }

    // STRING PARA GUARDAR EN LOCALSTORAGE
    const data = `Nombre: ${nameValue}
                    Email: ${emailValue}
                    Teléfono: ${telValue}
                    Comentarios: ${commentsValue}
                    Acepta polícitca: ${politicsValue}`

    console.log(data)
    localStorage.setItem("data",data)
}

form.addEventListener( "submit", validateForm)

