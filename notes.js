function goDashboard() {
    const music = document.getElementById("bgm");

    // simpan posisi lagu
    localStorage.setItem("musicTime", music.currentTime);

    // pindah halaman
    window.location.href = "dashboard.html";
}

// lanjutkan lagu dari posisi terakhir
window.addEventListener("load", () => {

    const music = document.getElementById("bgm");

    const savedTime = localStorage.getItem("musicTime");

    if (savedTime) {
        music.currentTime = savedTime;
    }

    music.play().catch(() => {});

    // fallback touch (iOS fix)
    document.addEventListener("touchstart", () => {
        if (bgm.paused && localStorage.getItem("musicPlaying") === "true") {
            bgm.play().catch(() => {});
        }
    }, { once: true });
});