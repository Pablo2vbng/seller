console.log("Probando, probando...1,2 ... jeje");
;
// SELECCIÓN ELEMENTOS
const form = document.getElementById("customerForm");
const spanObligatory = document.getElementById("span-obligatory");
const fiscalName = document.getElementById("fiscalName");
const commercialName = document.getElementById("commercialName");
const taxId = document.getElementById("taxId");
const address = document.getElementById("address");
const zipCode = document.getElementById("zipCode");
const country = document.getElementById("country");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const paymentMethod = document.getElementById("paymentMethod");
const bankData = document.getElementById("bankData");
const deliveryAddress = document.getElementById("deliveryAddress");
const deliveryZipCode = document.getElementById("deliveryZipCode");
const vatRegime = document.getElementById("vatRegime");
const observations = document.getElementById("observations");
const blockedSales = document.getElementById("blockedSales");
const blockReason = document.getElementById("blockReason");
const privacyPolicy = document.getElementById("privacyPolicy");
const validateForm = (e) => {
    e.preventDefault();
    // BORRAMOS LOS ERRORES ANTERIORES
    clearError();
    // FORMULARIO OK
    let isFormValid = true;
    // VALUES
    const fiscalNameValue = fiscalName.value;
    const commercialNameValue = commercialName.value;
    const taxIdValue = taxId.value;
    const addressValue = address.value;
    const zipCodeValue = zipCode.value;
    const countryValue = country.value;
    const emailValue = email.value;
    const phoneValue = phone.value;
    const paymentMethodValue = paymentMethod.value;
    const bankDataValue = bankData.value;
    const deliveryAddressValue = deliveryAddress.value;
    const deliveryZipCodeValue = deliveryZipCode.value;
    const vatRegimeValue = vatRegime.value;
    const observationsValue = observations.value;
    const blockedSalesValue = blockedSales.value;
    const blockReasonValue = blockReason.value;
    const privacyPolicyValue = privacyPolicy.checked;
    // REGEX
    const regexGeneral = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ]{3,}$/i;
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(es|com|net|org)$/;
    const regexPhone = /^[0-9]{9}$/;
    const regexTaxId = /^[a-zA-Z0-9]{9}$/i;
    const regexZipCode = /^[0-9]{5}$/;
    const regexIBAN = /^ES[0-9]{22}$/i;
    // VALIDACIONES
    function clearError() {
        const errorSpans = document.querySelectorAll(".form-error__span");
        errorSpans.forEach(span => span.remove());
    }
    // 1. NOMBRE FISCAL
    const labelFiscalName = document.getElementById("labelFiscalName");
    if (!regexGeneral.test(fiscalNameValue)) {
        isFormValid = false;
        const span = document.createElement('span');
        span.className = "form-error__span";
        span.textContent = " Mínimo 3 caracteres";
        labelFiscalName.appendChild(span);
    }
    // 2. CIF
    const labelTaxId = document.getElementById("labelTaxId");
    if (!regexTaxId.test(taxIdValue)) {
        isFormValid = false;
        const span = document.createElement('span');
        span.className = "form-error__span";
        span.textContent = " Formato incorrecto (9 caracteres)";
        labelTaxId.appendChild(span);
    }
    // 3. DIRECCIÓN
    const labelAddress = document.getElementById("labelAddress");
    if (addressValue.length <= 5) {
        isFormValid = false;
        const span = document.createElement('span');
        span.className = "form-error__span";
        span.textContent = " Dirección demasiado corta";
        labelAddress.appendChild(span);
    }
    // 4. CODIGO POSTAL
    const labelZipCode = document.getElementById("labelZipCode");
    if (!regexZipCode.test(zipCodeValue)) {
        isFormValid = false;
        const span = document.createElement('span');
        span.className = "form-error__span";
        span.textContent = " Debe tener 5 números";
        labelZipCode.appendChild(span);
    }
    // 5. EMAIL
    const labelEmail = document.getElementById("labelEmail");
    if (!regexEmail.test(emailValue)) {
        isFormValid = false;
        const span = document.createElement('span');
        span.className = "form-error__span";
        span.textContent = " Email no válido";
        labelEmail.appendChild(span);
    }
    // 6. TELEFONO
    const labelPhone = document.getElementById("labelPhone");
    if (!regexPhone.test(phoneValue)) {
        isFormValid = false;
        const span = document.createElement('span');
        span.className = "form-error__span";
        span.textContent = " 9 números obligatorios";
        labelPhone.appendChild(span);
    }
    // 7. METODO DE PAGO
    const labelPaymentMethod = document.getElementById("labelPaymentMethod");
    if (paymentMethodValue === "") {
        isFormValid = false;
        const span = document.createElement('span');
        span.className = "form-error__span";
        span.textContent = " Seleccione una opción";
        labelPaymentMethod.appendChild(span);
    }
    // 8. IBAN
    const labelBankData = document.getElementById("labelBankData");
    if (bankDataValue === "" || !regexIBAN.test(bankDataValue)) {
        isFormValid = false;
        const span = document.createElement('span');
        span.className = "form-error__span";
        span.textContent = " IBAN incorrecto (ES + 22 dígitos)";
        labelBankData.appendChild(span);
    }
    // 9. PRIVACIDAD Y COOKIES
    const privacyContainer = privacyPolicy.parentElement;
    if (!privacyPolicy.checked) {
        isFormValid = false;
        const span = document.createElement('span');
        span.className = "form-error__span";
        span.textContent = " Obligatorio aceptar los términos";
        privacyContainer.appendChild(span);
    }
    // 10. FORMULARIO
    if (!isFormValid) {
        const span = document.createElement('span');
        span.className = "form-error__span";
        span.textContent = "Recuerda consultar todas las pestañas";
        spanObligatory.appendChild(span);
    }
    // RESULTADO
    if (isFormValid) {
        const customerData = {
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
        alert("Cliente dado de alta con éxito");
        const storageData = localStorage.getItem("CustomerDataList");
        let clients = storageData ? JSON.parse(storageData) : [];
        clients.push(customerData);
        localStorage.setItem("CustomerDataList", JSON.stringify(clients));
        alert("Cliente dado de alta con éxito");
        console.log("Customer Registration Data:", customerData);
    }
    else {
        console.error("Form validation failed.");
    }
};
form.addEventListener("submit", validateForm);
export {};
//# sourceMappingURL=customer_registration.js.map