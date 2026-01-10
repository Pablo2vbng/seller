// SELECCIÓN DE ELEMENTOS
const form = document.getElementById("customerForm");
const nombreFiscal = document.getElementById("nombreFiscal");
const nombreComercial = document.getElementById("nombreComercial");
const cifNif = document.getElementById("cifNif");
const direccion = document.getElementById("direccion");
const cp = document.getElementById("cp");
const pais = document.getElementById("pais");
const formaPago = document.getElementById("formaPago");
const datosBancarios = document.getElementById("datosBancarios");
const direccionEntrega = document.getElementById("direccionEntrega");
const cpEntrega = document.getElementById("cpEntrega");
const regimenIva = document.getElementById("regimenIva");
const observaciones = document.getElementById("observaciones");
const ventasBloqueadas = document.getElementById("ventasBloqueadas");
const motivoBloqueo = document.getElementById("motivoBloqueo");
const politics = document.getElementById("politics");
const validateForm = (e) => {
    e.preventDefault();
    // VALOR INICIAL
    let formOk = true;
    // VALORES
    const nombreFiscalValue = nombreFiscal.value;
    const nombreComercialValue = nombreComercial.value;
    const cifNifValue = cifNif.value;
    const direccionValue = direccion.value;
    const cpValue = cp.value;
    const paisValue = pais.value;
    const formaPagoValue = formaPago.value;
    const datosBancariosValue = datosBancarios.value;
    const direccionEntregaValue = direccionEntrega.value;
    const cpEntregaValue = cpEntrega.value;
    const regimenIvaValue = regimenIva.value;
    const observacionesValue = observaciones.value;
    const ventasBloqueadasValue = ventasBloqueadas.value;
    const motivoBloqueoValue = motivoBloqueo.value;
    const politicsValue = politics.checked;
    // REGEX
    const regexGeneral = /^[a-zA-Z0-9áéíóúÁÉÍÓÚñÑ ]{3,}$/i; // Mínimo 3 caracteres
    const regexCif = /^[a-zA-Z0-9]{9}$/i; // 9 caracteres alfanuméricos
    const regexCP = /^[0-9]{5}$/; // 5 números
    const regexIBAN = /^[a-zA-Z0-9 ]{15,34}$/; // Validación genérica de IBAN
    // --- VALIDACIONES ---
    // 1. NOMBRE FISCAL
    const labelNombreFiscal = document.getElementById("labelNombreFiscal");
    const errorNombreFiscal = labelNombreFiscal.querySelector(".form-error__span");
    if (errorNombreFiscal)
        errorNombreFiscal.remove();
    if (regexGeneral.test(nombreFiscalValue)) {
        console.log("Nombre Fiscal ok");
    }
    else {
        formOk = false;
        const span = document.createElement('span');
        span.className = "form-error__span";
        span.textContent = " Mínimo 3 caracteres";
        labelNombreFiscal.appendChild(span);
    }
    // 2. CIF / NIF
    const labelCifNif = document.getElementById("labelCifNif");
    const errorCifNif = labelCifNif.querySelector(".form-error__span");
    if (errorCifNif)
        errorCifNif.remove();
    if (regexCif.test(cifNifValue)) {
        console.log("CIF ok");
    }
    else {
        formOk = false;
        const span = document.createElement('span');
        span.className = "form-error__span";
        span.textContent = " Formato CIF/NIF incorrecto (9 caracteres)";
        labelCifNif.appendChild(span);
    }
    // 3. DIRECCIÓN
    const labelDireccion = document.getElementById("labelDireccion");
    const errorDireccion = labelDireccion.querySelector(".form-error__span");
    if (errorDireccion)
        errorDireccion.remove();
    if (direccionValue.length > 5) {
        console.log("Dirección ok");
    }
    else {
        formOk = false;
        const span = document.createElement('span');
        span.className = "form-error__span";
        span.textContent = " Dirección demasiado corta";
        labelDireccion.appendChild(span);
    }
    // 4. CÓDIGO POSTAL
    const labelCp = document.getElementById("labelCp");
    const errorCp = labelCp.querySelector(".form-error__span");
    if (errorCp)
        errorCp.remove();
    if (regexCP.test(cpValue)) {
        console.log("CP ok");
    }
    else {
        formOk = false;
        const span = document.createElement('span');
        span.className = "form-error__span";
        span.textContent = " CP debe tener 5 números";
        labelCp.appendChild(span);
    }
    // 5. FORMA DE PAGO (SELECT)
    const labelFormaPago = document.getElementById("labelFormaPago");
    const errorFormaPago = labelFormaPago.querySelector(".form-error__span");
    if (errorFormaPago)
        errorFormaPago.remove();
    if (formaPagoValue !== "") {
        console.log("Forma pago ok");
    }
    else {
        formOk = false;
        const span = document.createElement('span');
        span.className = "form-error__span";
        span.textContent = " Seleccione una opción";
        labelFormaPago.appendChild(span);
    }
    // 6. CHECK (POLÍTICA)
    const divPolitics = politics.parentElement;
    const errorPolitics = divPolitics.querySelector(".form-error__span");
    if (errorPolitics)
        errorPolitics.remove();
    if (politics.checked) {
        console.log("Check ok");
    }
    else {
        formOk = false;
        const span = document.createElement('span');
        span.className = "form-error__span";
        span.textContent = " Obligatorio aceptar los términos";
        divPolitics.appendChild(span);
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
        };
        // STRING PARA LOG Y LOCALSTORAGE
        const dataString = `
        ALTA NUEVO CLIENTE:
        -------------------
        Nombre Fiscal: ${nombreFiscalValue}
        Nombre Comercial: ${nombreComercialValue}
        CIF/NIF: ${cifNifValue}
        Dirección: ${direccionValue} (${cpValue}) - ${paisValue}
        Forma de Pago: ${formaPagoValue}
        IBAN: ${datosBancariosValue}
        Regimen IVA: ${regimenIvaValue}
        Entrega en: ${direccionEntregaValue} (${cpEntregaValue})
        Ventas bloqueadas: ${ventasBloqueadasValue}
        Motivo Bloqueo: ${motivoBloqueoValue}
        Observaciones: ${observacionesValue}
        `;
        console.log(customerData);
        console.log(dataString);
        localStorage.setItem("lastCustomerData", JSON.stringify(customerData));
        alert("Cliente dado de alta con éxito");
        // Opcional: form.reset()
    }
    else {
        console.error("El formulario tiene errores de validación.");
    }
};
// LISTENER
form.addEventListener("submit", validateForm);
export {};
//# sourceMappingURL=customer_registration.js.map