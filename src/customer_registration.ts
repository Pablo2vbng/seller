// SELECCIÓN DE ELEMENTOS
const form = document.getElementById("customerForm") as HTMLFormElement
const nombreFiscal = document.getElementById("nombreFiscal") as HTMLInputElement
const nombreComercial = document.getElementById("nombreComercial") as HTMLInputElement
const cifNif = document.getElementById("cifNif") as HTMLInputElement
const direccion = document.getElementById("direccion") as HTMLInputElement
const cp = document.getElementById("cp") as HTMLInputElement
const pais = document.getElementById("pais") as HTMLInputElement
const email = document.getElementById("email") as HTMLInputElement
const tel = document.getElementById("tel") as HTMLInputElement
const formaPago = document.getElementById("formaPago") as HTMLSelectElement
const datosBancarios = document.getElementById("datosBancarios") as HTMLInputElement
const direccionEntrega = document.getElementById("direccionEntrega") as HTMLInputElement
const cpEntrega = document.getElementById("cpEntrega") as HTMLInputElement
const regimenIva = document.getElementById("regimenIva") as HTMLSelectElement
const observaciones = document.getElementById("observaciones") as HTMLInputElement
const ventasBloqueadas = document.getElementById("ventasBloqueadas") as HTMLSelectElement
const motivoBloqueo = document.getElementById("motivoBloqueo") as HTMLInputElement
const politics = document.getElementById("politics") as HTMLInputElement

const validateForm = (e: Event) => {

    e.preventDefault()

    // VALOR INICIAL
    let formOk = true

    // VALORES
    const nombreFiscalValue: string = nombreFiscal.value
    const nombreComercialValue: string = nombreComercial.value
    const cifNifValue: string = cifNif.value
    const direccionValue: string = direccion.value
    const cpValue: string = cp.value
    const paisValue: string = pais.value
    const emailValue: string = email.value
    const telValue: string = tel.value
    const formaPagoValue: string = formaPago.value
    const datosBancariosValue: string = datosBancarios.value
    const direccionEntregaValue: string = direccionEntrega.value
    const cpEntregaValue: string = cpEntrega.value
    const regimenIvaValue: string = regimenIva.value
    const observacionesValue: string = observaciones.value
    const ventasBloqueadasValue: string = ventasBloqueadas.value
    const motivoBloqueoValue: string = motivoBloqueo.value
    const politicsValue: boolean = politics.checked

    // REGEX
    const regexGeneral = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ]{3,}$/i  
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(es|com|net|org)$/
    const regexTel = /^[0-9]{9}$/
    const regexCif = /^[a-zA-Z0-9]{9}$/i  
    const regexCP = /^[0-9]{5}$/  
    const regexIBAN = /^[a-zA-Z0-9 ]{15,34}$/  

    // --- VALIDACIONES ---

    // 1. NOMBRE FISCAL
    const labelNombreFiscal = document.getElementById("labelNombreFiscal") as HTMLLabelElement
    const errorNombreFiscal = labelNombreFiscal.querySelector(".form-error__span")
    if (errorNombreFiscal) errorNombreFiscal.remove()

    if (regexGeneral.test(nombreFiscalValue)) {
        console.log("Nombre Fiscal ok")
    } else {
        formOk = false
        const span = document.createElement('span')
        span.className = "form-error__span"
        span.textContent = " Mínimo 3 caracteres"
        labelNombreFiscal.appendChild(span)
    }

    // 2. CIF / NIF
    const labelCifNif = document.getElementById("labelCifNif") as HTMLLabelElement
    const errorCifNif = labelCifNif.querySelector(".form-error__span")
    if (errorCifNif) errorCifNif.remove()

    if (regexCif.test(cifNifValue)) {
        console.log("CIF ok")
    } else {
        formOk = false
        const span = document.createElement('span')
        span.className = "form-error__span"
        span.textContent = " Formato CIF/NIF incorrecto (9 caracteres)"
        labelCifNif.appendChild(span)
    }

    // 3. DIRECCIÓN
    const labelDireccion = document.getElementById("labelDireccion") as HTMLLabelElement
    const errorDireccion = labelDireccion.querySelector(".form-error__span")
    if (errorDireccion) errorDireccion.remove()

    if (direccionValue.length > 5) {
        console.log("Dirección ok")
    } else {
        formOk = false
        const span = document.createElement('span')
        span.className = "form-error__span"
        span.textContent = " Dirección demasiado corta"
        labelDireccion.appendChild(span)
    }

    // 4. CÓDIGO POSTAL
    const labelCp = document.getElementById("labelCp") as HTMLLabelElement
    const errorCp = labelCp.querySelector(".form-error__span")
    if (errorCp) errorCp.remove()

    if (regexCP.test(cpValue)) {
        console.log("CP ok")
    } else {
        formOk = false
        const span = document.createElement('span')
        span.className = "form-error__span"
        span.textContent = " CP debe tener 5 números"
        labelCp.appendChild(span)
    }
     // 5. EMAIL
     const labelEmail = document.getElementById("labelEmail") as HTMLLabelElement
     const errorEmail = labelEmail.querySelector(".form-error__span")
     if (errorEmail) errorEmail.remove()
 
     if (regexEmail.test(emailValue)) {
         console.log("Email correcto")
     } else {
         console.error("Email formulario incorrecto ")
         formOk = false
         const span = document.createElement('span')
         span.className = "form-error__span"
         span.textContent = "Email no válido ej. usuario@gmail.com"
         labelEmail.appendChild(span)
     }
 
     // 6. TELÉFONO
     const labelTel = document.getElementById("labelTel") as HTMLLabelElement
     const errorTel = labelTel.querySelector(".form-error__span")
     if (errorTel) errorTel.remove()
 
     if (regexTel.test(telValue)) {
         console.log("Teléfono correcto")
     } else {
         console.error("Teléfono formulario incorrecto ")
         formOk = false
         const span = document.createElement('span')
         span.className = "form-error__span"
         span.textContent = "Teléfono no válido. Debe contener 9 números"
         labelTel.appendChild(span)
     }
 

    // 7. FORMA DE PAGO 
    const labelFormaPago = document.getElementById("labelFormaPago") as HTMLLabelElement
    const errorFormaPago = labelFormaPago.querySelector(".form-error__span")
    if (errorFormaPago) errorFormaPago.remove()

    if (formaPagoValue !== "") {
        console.log("Forma pago ok")
    } else {
        formOk = false
        const span = document.createElement('span')
        span.className = "form-error__span"
        span.textContent = " Seleccione una opción"
        labelFormaPago.appendChild(span)
    }

    // 8. CHECK (POLÍTICA)
    const divPolitics = politics.parentElement as HTMLElement
    const errorPolitics = divPolitics.querySelector(".form-error__span")
    if (errorPolitics) errorPolitics.remove()

    if (politics.checked) {
        console.log("Check ok")
    } else {
        formOk = false
        const span = document.createElement('span')
        span.className = "form-error__span"
        span.textContent = " Obligatorio aceptar los términos"
        divPolitics.appendChild(span)
    }

    // RESULTADO FINAL
    if (formOk) {
        // OBJETO DE DATOS
        const customerData = {
            fiscal: nombreFiscalValue,
            comercial: nombreComercialValue,
            cif: cifNifValue,
            direccion: direccionValue,
            cp: cpValue,
            pais: paisValue,
            tel: telValue,
            email : emailValue,
            pago: formaPagoValue,
            banco: datosBancariosValue,
            entrega: {
                calle: direccionEntregaValue,
                cp: cpEntregaValue
            },
            iva: regimenIvaValue,
            observaciones: observacionesValue,
            bloqueo: {
                estado: ventasBloqueadasValue,
                motivo: motivoBloqueoValue
            },
            politics: politicsValue
        }

        // STRING PARA LOCALSTORAGE
        const dataString = `
        Nombre Fiscal: ${nombreFiscalValue}
        Nombre Comercial: ${nombreComercialValue}
        CIF/NIF: ${cifNifValue}
        Dirección: ${direccionValue} (${cpValue}) - ${paisValue}
        Teléfono: ${telValue}
        Emal: ${emailValue}
        Forma de Pago: ${formaPagoValue}
        IBAN: ${datosBancariosValue}
        Regimen IVA: ${regimenIvaValue}
        Entrega en: ${direccionEntregaValue} (${cpEntregaValue})
        Ventas bloqueadas: ${ventasBloqueadasValue}
        Motivo Bloqueo: ${motivoBloqueoValue}
        Observaciones: ${observacionesValue}
        `

        console.log(customerData)
        console.log(dataString)
        
        localStorage.setItem("CustomerData", dataString)
        alert("Cliente dado de alta con éxito");
        
    } else {
        console.error("El formulario tiene errores de validación.");
    }
}

// LISTENER
form.addEventListener("submit", validateForm)