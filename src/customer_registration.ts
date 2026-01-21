console.log("Probando, probando...1,2 ... jeje")

interface Client {
    fiscalName: string,
    commercialName: string,
    taxId: string,
    address: string,
    zipCode: string,
    country: string,
    phone: string,
    email: string,
    paymentMethod: string,
    bankData: string,
    delivery: {
        address: string,
        zipCode: string,
    },
    vatRegime: string,
    observations: string,
    status: {
        isBlocked: string,
        reason: string
    },
    acceptedPrivacy: boolean
};



// SELECCIÓN ELEMENTOS
const form = document.getElementById("customerForm") as HTMLFormElement
const spanObligatory = document.getElementById("span-obligatory") as HTMLSpanElement
const fiscalName = document.getElementById("fiscalName") as HTMLInputElement
const commercialName = document.getElementById("commercialName") as HTMLInputElement
const taxId = document.getElementById("taxId") as HTMLInputElement
const address = document.getElementById("address") as HTMLInputElement
const zipCode = document.getElementById("zipCode") as HTMLInputElement
const country = document.getElementById("country") as HTMLInputElement
const email = document.getElementById("email") as HTMLInputElement
const phone = document.getElementById("phone") as HTMLInputElement
const paymentMethod = document.getElementById("paymentMethod") as HTMLSelectElement
const bankData = document.getElementById("bankData") as HTMLInputElement
const deliveryAddress = document.getElementById("deliveryAddress") as HTMLInputElement
const deliveryZipCode = document.getElementById("deliveryZipCode") as HTMLInputElement
const vatRegime = document.getElementById("vatRegime") as HTMLSelectElement
const observations = document.getElementById("observations") as HTMLInputElement
const blockedSales = document.getElementById("blockedSales") as HTMLSelectElement
const blockReason = document.getElementById("blockReason") as HTMLInputElement
const privacyPolicy = document.getElementById("privacyPolicy") as HTMLInputElement

const validateForm = (e: Event) => {
    e.preventDefault()
    // BORRAMOS LOS ERRORES ANTERIORES
    clearError()
    // FORMULARIO OK
    let isFormValid = true

    // VALUES
    const fiscalNameValue: string = fiscalName.value
    const commercialNameValue: string = commercialName.value
    const taxIdValue: string = taxId.value
    const addressValue: string = address.value
    const zipCodeValue: string = zipCode.value
    const countryValue: string = country.value
    const emailValue: string = email.value
    const phoneValue: string = phone.value
    const paymentMethodValue: string = paymentMethod.value
    const bankDataValue: string = bankData.value
    const deliveryAddressValue: string = deliveryAddress.value
    const deliveryZipCodeValue: string = deliveryZipCode.value
    const vatRegimeValue: string = vatRegime.value
    const observationsValue: string = observations.value
    const blockedSalesValue: string = blockedSales.value
    const blockReasonValue: string = blockReason.value
    const privacyPolicyValue: boolean = privacyPolicy.checked

    // REGEX
    const regexGeneral = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ]{3,}$/i
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(es|com|net|org)$/
    const regexPhone = /^[0-9]{9}$/
    const regexTaxId = /^[a-zA-Z0-9]{9}$/i
    const regexZipCode = /^[0-9]{5}$/
    const regexIBAN = /^ES[0-9]{22}$/i

    // VALIDACIONES
    function clearError() {
        const errorSpans = document.querySelectorAll(".form-error__span")
        errorSpans.forEach(span => span.remove())
    }

    // 1. NOMBRE FISCAL
    const labelFiscalName = document.getElementById("labelFiscalName") as HTMLLabelElement
    if (!regexGeneral.test(fiscalNameValue)) {
        isFormValid = false;
        const span = document.createElement('span')
        span.className = "form-error__span"
        span.textContent = " Mínimo 3 caracteres"
        labelFiscalName.appendChild(span)
    }

    // 2. CIF
    const labelTaxId = document.getElementById("labelTaxId") as HTMLLabelElement
    if (!regexTaxId.test(taxIdValue)) {
        isFormValid = false
        const span = document.createElement('span')
        span.className = "form-error__span"
        span.textContent = " Formato incorrecto (9 caracteres)"
        labelTaxId.appendChild(span)
    }

    // 3. DIRECCIÓN
    const labelAddress = document.getElementById("labelAddress") as HTMLLabelElement
    if (addressValue.length <= 5) {
        isFormValid = false
        const span = document.createElement('span')
        span.className = "form-error__span"
        span.textContent = " Dirección demasiado corta"
        labelAddress.appendChild(span)
    }

    // 4. CODIGO POSTAL
    const labelZipCode = document.getElementById("labelZipCode") as HTMLLabelElement
    if (!regexZipCode.test(zipCodeValue)) {
        isFormValid = false
        const span = document.createElement('span')
        span.className = "form-error__span"
        span.textContent = " Debe tener 5 números"
        labelZipCode.appendChild(span)
    }

    // 5. EMAIL
    const labelEmail = document.getElementById("labelEmail") as HTMLLabelElement

    if (!regexEmail.test(emailValue)) {
        isFormValid = false
        const span = document.createElement('span')
        span.className = "form-error__span"
        span.textContent = " Email no válido"
        labelEmail.appendChild(span)
    }

    // 6. TELEFONO
    const labelPhone = document.getElementById("labelPhone") as HTMLLabelElement

    if (!regexPhone.test(phoneValue)) {
        isFormValid = false
        const span = document.createElement('span')
        span.className = "form-error__span"
        span.textContent = " 9 números obligatorios"
        labelPhone.appendChild(span)
    }

    // 7. METODO DE PAGO
    const labelPaymentMethod = document.getElementById("labelPaymentMethod") as HTMLLabelElement

    if (paymentMethodValue === "") {
        isFormValid = false
        const span = document.createElement('span')
        span.className = "form-error__span"
        span.textContent = " Seleccione una opción"
        labelPaymentMethod.appendChild(span)
    }

    // 8. IBAN
    const labelBankData = document.getElementById("labelBankData") as HTMLLabelElement


    if (bankDataValue === "" ||!regexIBAN.test(bankDataValue)) {
        isFormValid = false
        const span = document.createElement('span')
        span.className = "form-error__span"
        span.textContent = " IBAN incorrecto (ES + 22 dígitos)"
        labelBankData.appendChild(span)
    }

    // 9. PRIVACIDAD Y COOKIES
    const privacyContainer = privacyPolicy.parentElement as HTMLElement;

    if (!privacyPolicy.checked) {
        isFormValid = false
        const span = document.createElement('span')
        span.className = "form-error__span"
        span.textContent = " Obligatorio aceptar los términos"
        privacyContainer.appendChild(span)
    }
    // 10. FORMULARIO

    if(!isFormValid){
        const span = document.createElement('span')
        span.className = "form-error__span"
        span.textContent = "Recuerda consultar todas las pestañas"
        spanObligatory.appendChild(span)
    }

    // RESULTADO
    if (isFormValid) {
        const customerData: Client = {
            fiscalName: fiscalNameValue,
            commercialName: commercialNameValue,
            taxId: taxIdValue,
            address: addressValue,
            zipCode: zipCodeValue,
            country: countryValue,
            phone: phoneValue,
            email: emailValue,
            paymentMethod: paymentMethodValue,
            bankData: bankDataValue,
            delivery: {
                address: deliveryAddressValue,
                zipCode: deliveryZipCodeValue
            },
            vatRegime: vatRegimeValue,
            observations: observationsValue,
            status: {
                isBlocked: blockedSalesValue,
                reason: blockReasonValue
            },
            acceptedPrivacy: privacyPolicyValue
        };

        alert("Cliente dado de alta con éxito")

       
        const storageData = localStorage.getItem("CustomerDataList")

        let clients: Client[] = storageData ? JSON.parse(storageData) : []

        clients.push(customerData)

        localStorage.setItem("CustomerDataList", JSON.stringify(clients))

        alert("Cliente dado de alta con éxito")

        console.log("Customer Registration Data:", customerData)


    } else {
        console.error("Form validation failed.")
    }
}

form.addEventListener("submit", validateForm)