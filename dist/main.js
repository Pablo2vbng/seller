"use strict";
//SWITCH MODE
Object.defineProperty(exports, "__esModule", { value: true });
const switchBtn = document.getElementById("checkNativeSwitch");
const switchLightMode = () => {
    const switchTheme = document.getElementById("body");
    if (switchTheme.className === "") {
        switchTheme.className = "light-mode";
    }
    else {
        switchTheme.className = "";
    }
};
switchBtn.addEventListener("change", switchLightMode);
//# sourceMappingURL=main.js.map