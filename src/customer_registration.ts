console.log("Probando, probando...1,2 ... jeje")

// ELEMENT SELECTION
const form = document.getElementById("customerForm") as HTMLFormElement;
const fiscalName = document.getElementById("fiscalName") as HTMLInputElement;
const commercialName = document.getElementById("commercialName") as HTMLInputElement;
const taxId = document.getElementById("taxId") as HTMLInputElement;
const address = document.getElementById("address") as HTMLInputElement;
const zipCode = document.getElementById("zipCode") as HTMLInputElement;
const country = document.getElementById("country") as HTMLInputElement;
const email = document.getElementById("email") as HTMLInputElement;
const phone = document.getElementById("phone") as HTMLInputElement;
const paymentMethod = document.getElementById("paymentMethod") as HTMLSelectElement;
const bankData = document.getElementById("bankData") as HTMLInputElement;
const deliveryAddress = document.getElementById("deliveryAddress") as HTMLInputElement;
const deliveryZipCode = document.getElementById("deliveryZipCode") as HTMLInputElement;
const vatRegime = document.getElementById("vatRegime") as HTMLSelectElement;
const observations = document.getElementById("observations") as HTMLInputElement;
const blockedSales = document.getElementById("blockedSales") as HTMLSelectElement;
const blockReason = document.getElementById("blockReason") as HTMLInputElement;
const privacyPolicy = document.getElementById("privacyPolicy") as HTMLInputElement;

const validateForm = (e: Event) => {
    e.preventDefault();

    // INITIAL STATE
    let isFormValid = true;

    // VALUES
    const fiscalNameValue: string = fiscalName.value;
    const commercialNameValue: string = commercialName.value;
    const taxIdValue: string = taxId.value;
    const addressValue: string = address.value;
    const zipCodeValue: string = zipCode.value;
    const countryValue: string = country.value;
    const emailValue: string = email.value;
    const phoneValue: string = phone.value;
    const paymentMethodValue: string = paymentMethod.value;
    const bankDataValue: string = bankData.value;
    const deliveryAddressValue: string = deliveryAddress.value;
    const deliveryZipCodeValue: string = deliveryZipCode.value;
    const vatRegimeValue: string = vatRegime.value;
    const observationsValue: string = observations.value;
    const blockedSalesValue: string = blockedSales.value;
    const blockReasonValue: string = blockReason.value;
    const privacyPolicyValue: boolean = privacyPolicy.checked;

    // REGEX
    const regexGeneral = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ]{3,}$/i;
    const regexEmail = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.(es|com|net|org)$/;
    const regexPhone = /^[0-9]{9}$/;
    const regexTaxId = /^[a-zA-Z0-9]{9}$/i;
    const regexZipCode = /^[0-9]{5}$/;
    const regexIBAN = /^ES[0-9]{22}$/i;

    // --- VALIDATIONS ---

    // 1. FISCAL NAME
    const labelFiscalName = document.getElementById("labelFiscalName") as HTMLLabelElement;
    const errorFiscalName = labelFiscalName.querySelector(".form-error__span") as HTMLSpanElement;
    if (errorFiscalName) errorFiscalName.remove();

    if (!regexGeneral.test(fiscalNameValue)) {
        isFormValid = false;
        const span = document.createElement('span');
        span.className = "form-error__span";
        span.textContent = " Mínimo 3 caracteres";
        labelFiscalName.appendChild(span);
    }

    // 2. TAX ID (CIF/NIF)
    const labelTaxId = document.getElementById("labelTaxId") as HTMLLabelElement;
    const errorTaxId = labelTaxId.querySelector(".form-error__span") as HTMLSpanElement;
    if (errorTaxId) errorTaxId.remove();

    if (!regexTaxId.test(taxIdValue)) {
        isFormValid = false;
        const span = document.createElement('span');
        span.className = "form-error__span";
        span.textContent = " Formato incorrecto (9 caracteres)";
        labelTaxId.appendChild(span);
    }

    // 3. ADDRESS
    const labelAddress = document.getElementById("labelAddress") as HTMLLabelElement;
    const errorAddress = labelAddress.querySelector(".form-error__span") as HTMLSpanElement;
    if (errorAddress) errorAddress.remove();

    if (addressValue.length <= 5) {
        isFormValid = false;
        const span = document.createElement('span');
        span.className = "form-error__span";
        span.textContent = " Dirección demasiado corta";
        labelAddress.appendChild(span);
    }

    // 4. ZIP CODE
    const labelZipCode = document.getElementById("labelZipCode") as HTMLLabelElement;
    const errorZipCode = labelZipCode.querySelector(".form-error__span") as HTMLSpanElement;
    if (errorZipCode) errorZipCode.remove();

    if (!regexZipCode.test(zipCodeValue)) {
        isFormValid = false;
        const span = document.createElement('span');
        span.className = "form-error__span";
        span.textContent = " Debe tener 5 números";
        labelZipCode.appendChild(span);
    }

    // 5. EMAIL
    const labelEmail = document.getElementById("labelEmail") as HTMLLabelElement;
    const errorEmail = labelEmail.querySelector(".form-error__span") as HTMLSpanElement;
    if (errorEmail) errorEmail.remove();

    if (!regexEmail.test(emailValue)) {
        isFormValid = false;
        const span = document.createElement('span');
        span.className = "form-error__span";
        span.textContent = " Email no válido";
        labelEmail.appendChild(span);
    }

    // 6. PHONE
    const labelPhone = document.getElementById("labelPhone") as HTMLLabelElement;
    const errorPhone = labelPhone.querySelector(".form-error__span") as HTMLSpanElement;
    if (errorPhone) errorPhone.remove();

    if (!regexPhone.test(phoneValue)) {
        isFormValid = false;
        const span = document.createElement('span');
        span.className = "form-error__span";
        span.textContent = " 9 números obligatorios";
        labelPhone.appendChild(span);
    }

    // 7. PAYMENT METHOD
    const labelPaymentMethod = document.getElementById("labelPaymentMethod") as HTMLLabelElement;
    const errorPaymentMethod = labelPaymentMethod.querySelector(".form-error__span") as HTMLSpanElement;
    if (errorPaymentMethod) errorPaymentMethod.remove();

    if (paymentMethodValue === "") {
        isFormValid = false;
        const span = document.createElement('span');
        span.className = "form-error__span";
        span.textContent = " Seleccione una opción";
        labelPaymentMethod.appendChild(span);
    }

    // 8. IBAN (BANK DATA)
    const labelBankData = document.getElementById("labelBankData") as HTMLLabelElement;
    const errorBankData = labelBankData.querySelector(".form-error__span") as HTMLSpanElement;
    if (errorBankData) errorBankData.remove();

    const cleanIban = bankDataValue.replace(/\s+/g, '');
    if (cleanIban !== "" && !regexIBAN.test(cleanIban)) {
        isFormValid = false;
        const span = document.createElement('span');
        span.className = "form-error__span";
        span.textContent = " IBAN incorrecto (ES + 22 dígitos)";
        labelBankData.appendChild(span);
    }

    // 9. PRIVACY POLICY
    const privacyContainer = privacyPolicy.parentElement as HTMLElement;
    const errorPrivacy = privacyContainer.querySelector(".form-error__span");
    if (errorPrivacy) errorPrivacy.remove();

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
        
    } else {
        console.error("Form validation failed.");
    }
}

form.addEventListener("submit", validateForm);