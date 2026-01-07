// SWITCH MODE

const switchBtn = document.getElementById("checkNativeSwitch") as HTMLInputElement;

const switchLightMode = () => {

    document.body.classList.toggle("light-mode");
};


switchBtn.addEventListener("change", switchLightMode)