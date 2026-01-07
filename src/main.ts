//SWITCH MODE

const switchBtn = document.getElementById("checkNativeSwitch") as HTMLInputElement;

const switchLightMode = () => {
    const switchTheme = document.getElementById("body") as HTMLElement
    if(switchTheme.className ===""){
        switchTheme.className = "light-mode"
    }else{
        switchTheme.className = ""
    }
};

switchBtn.addEventListener("change", switchLightMode);