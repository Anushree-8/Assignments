function addToggleButton(inputFieldId, eyeButtonId) {
    const inputField = document.getElementById(inputFieldId);
    const eyeButton = document.getElementById(eyeButtonId);

    inputField.addEventListener("click", () => {
        const type = eyeButton.getAttribute("type") === "password" ? "text" : "password";
        eyeButton.setAttribute("type", type);

        inputField.classList.toggle("fa-eye");
        inputField.classList.toggle("fa-eye-slash");
    });
}