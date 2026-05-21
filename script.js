document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("loginForm");
    const nameInput = document.getElementById("name");
    const dateInput = document.getElementById("date");

    const correctNames = [
        "Khaira",
        "khaira",
        "Keiro",
        "keiro"
    ];

    const correctDates = [
        "23 Mei 2006",
        "23 mei 2006"
    ];

    form.addEventListener("submit", function (e) {
        e.preventDefault();

        const nameValue = nameInput.value.trim().toLowerCase();
        const dateValue = dateInput.value.trim().toLowerCase();

        const isNameCorrect = correctNames.includes(nameValue);
        const isDateCorrect = correctDates.includes(dateValue);

        if (isNameCorrect && isDateCorrect) {
            localStorage.setItem("musicPlaying", "true");
            localStorage.setItem("bgmTime", "0");
            window.location.href = "dashboard.html";
        } else {
            alert("Coba lagi boss");
            nameInput.value = "";
            dateInput.value = "";
            nameInput.focus();
        }
    });
});

function togglePassword() {
    const input = document.getElementById("date");
    const toggle = document.querySelector(".toggle");

    if (input.type === "password") {
        input.type = "text";
        toggle.textContent = "Hide";
    } else {
        input.type = "password";
        toggle.textContent = "Show";
    }
}
