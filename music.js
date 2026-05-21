document.addEventListener("DOMContentLoaded", function () {
    const bgm = document.getElementById("bgm");

    if (!bgm) return;

    // restore posisi lagu
    const savedTime = localStorage.getItem("bgmTime");
    if (savedTime) {
        bgm.currentTime = parseFloat(savedTime);
    }

    // cek apakah musik diizinkan
    if (localStorage.getItem("musicPlaying") === "yes") {
        bgm.play().catch(() => {});
    }

     // fallback touch (iOS fix)
    document.addEventListener("touchstart", () => {
        if (bgm.paused && localStorage.getItem("musicPlaying") === "true") {
            bgm.play().catch(() => {});
        }
        }, { once: true });

    // simpan posisi setiap detik
    setInterval(() => {
        if (!bgm.paused) {
            localStorage.setItem("bgmTime", bgm.currentTime);
        }
    }, 500);
});

// dipanggil setelah login sukses
function startMusic() {
    localStorage.setItem("musix", "on");
}

function logout() {
    localStorage.setItem("music", "no");
    window.location.href = "index.html";
}
