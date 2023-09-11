document.addEventListener("DOMContentLoaded", function () {
    const userForm = document.getElementById("userForm");
    const thankYouMessage = document.getElementById("thankYouMessage");
    const userNameSpan = document.getElementById("userName");

    userForm.addEventListener("submit", function (e) {

        //Javascript event Handler
        e.preventDefault();
        const nameInput = document.getElementById("name");
        const emailInput = document.getElementById("email");

        const userName = nameInput.value;
        userNameSpan.textContent = userName;

        userForm.style.display = "none";
        thankYouMessage.style.display = "block";
    });
});
