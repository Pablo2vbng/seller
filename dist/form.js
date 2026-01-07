"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const form = document.getElementById("contactForm");
const name = document.getElementById("name");
const email = document.getElementById("email");
const tel = document.getElementById("tel");
const comments = document.getElementById("comments");
const politics = document.getElementById("politics");
const validateForm = () => {
    const nameValue = name.value;
    const emailValue = email.value;
    const telValue = tel.value;
    const commentsValue = comments.value;
    const politicsValue = politics.value;
    localStorage.setItem("data");
};
form.addEventListener("submit", validateForm);
//# sourceMappingURL=form.js.map