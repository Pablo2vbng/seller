console.log("Probando, probando...1,2 ... jeje");
// ELEMENT SELECTION
const form = document.getElementById("customerForm");
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
    // INITIAL STATE
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
    // --- VALIDATIONS ---
    // 1. FISCAL NAME
    const labelFiscalName = document.getElementById("labelFiscalName");
    const errorFiscalName = labelFiscalName.querySelector(".form-error__span");
    if (errorFiscalName)
        errorFiscalName.remove();
    if (!regexGeneral.test(fiscalNameValue)) {
        isFormValid = false;
        const span = document.createElement('span');
        span.className = "form-error__span";
        span.textContent = " Mínimo 3 caracteres";
        labelFiscalName.appendChild(span);
    }
    // 2. TAX ID (CIF/NIF)
    const labelTaxId = document.getElementById("labelTaxId");
    const errorTaxId = labelTaxId.querySelector(".form-error__span");
    if (errorTaxId)
        errorTaxId.remove();
    if (!regexTaxId.test(taxIdValue)) {
        isFormValid = false;
        const span = document.createElement('span');
        span.className = "form-error__span";
        span.textContent = " Formato incorrecto (9 caracteres)";
        labelTaxId.appendChild(span);
    }
    // 3. ADDRESS
    const labelAddress = document.getElementById("labelAddress");
    const errorAddress = labelAddress.querySelector(".form-error__span");
    if (errorAddress)
        errorAddress.remove();
    if (addressValue.length <= 5) {
        isFormValid = false;
        const span = document.createElement('span');
        span.className = "form-error__span";
        span.textContent = " Dirección demasiado corta";
        labelAddress.appendChild(span);
    }
    // 4. ZIP CODE
    const labelZipCode = document.getElementById("labelZipCode");
    const errorZipCode = labelZipCode.querySelector(".form-error__span");
    if (errorZipCode)
        errorZipCode.remove();
    if (!regexZipCode.test(zipCodeValue)) {
        isFormValid = false;
        const span = document.createElement('span');
        span.className = "form-error__span";
        span.textContent = " Debe tener 5 números";
        labelZipCode.appendChild(span);
    }
    // 5. EMAIL
    const labelEmail = document.getElementById("labelEmail");
    const errorEmail = labelEmail.querySelector(".form-error__span");
    if (errorEmail)
        errorEmail.remove();
    if (!regexEmail.test(emailValue)) {
        isFormValid = false;
        const span = document.createElement('span');
        span.className = "form-error__span";
        span.textContent = " Email no válido";
        labelEmail.appendChild(span);
    }
    // 6. PHONE
    const labelPhone = document.getElementById("labelPhone");
    const errorPhone = labelPhone.querySelector(".form-error__span");
    if (errorPhone)
        errorPhone.remove();
    if (!regexPhone.test(phoneValue)) {
        isFormValid = false;
        const span = document.createElement('span');
        span.className = "form-error__span";
        span.textContent = " 9 números obligatorios";
        labelPhone.appendChild(span);
    }
    // 7. PAYMENT METHOD
    const labelPaymentMethod = document.getElementById("labelPaymentMethod");
    const errorPaymentMethod = labelPaymentMethod.querySelector(".form-error__span");
    if (errorPaymentMethod)
        errorPaymentMethod.remove();
    if (paymentMethodValue === "") {
        isFormValid = false;
        const span = document.createElement('span');
        span.className = "form-error__span";
        span.textContent = " Seleccione una opción";
        labelPaymentMethod.appendChild(span);
    }
    // 8. IBAN (BANK DATA)
    const labelBankData = document.getElementById("labelBankData");
    const errorBankData = labelBankData.querySelector(".form-error__span");
    if (errorBankData)
        errorBankData.remove();
    const cleanIban = bankDataValue.replace(/\s+/g, '');
    if (cleanIban !== "" && !regexIBAN.test(cleanIban)) {
        isFormValid = false;
        const span = document.createElement('span');
        span.className = "form-error__span";
        span.textContent = " IBAN incorrecto (ES + 22 dígitos)";
        labelBankData.appendChild(span);
    }
    // 9. PRIVACY POLICY
    const privacyContainer = privacyPolicy.parentElement;
    const errorPrivacy = privacyContainer.querySelector(".form-error__span");
    if (errorPrivacy)
        errorPrivacy.remove();
    if (!privacyPolicy.checked) {
        isFormValid = false;
        const span = document.createElement('span');
        span.className = "form-error__span";
        span.textContent = " Obligatorio aceptar los términos";
        privacyContainer.appendChild(span);
    }
    // FINAL RESULT
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
            bankData: cleanIban,
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
        console.log("Customer Registration Data:", customerData);
        localStorage.setItem("CustomerData", JSON.stringify(customerData));
        alert("Cliente dado de alta con éxito");
    }
    else {
        console.error("Form validation failed.");
    }
};
form.addEventListener("submit", validateForm);
export {};
//# sourceMappingURL=customer_registration.js.map