const music = document.getElementById("bgm");

if (music) {
    music.addEventListener("canplay", () => {
        const savedTime = localStorage.getItem("musicTime");
        if (savedTime && parseFloat(savedTime) > 0) {
            setTimeout(() => {
                music.currentTime = parseFloat(savedTime);
                if (localStorage.getItem("musicPlaying") === "true") {
                    music.play().catch(() => {});
                }
            }, 300);
        } else {
            if (localStorage.getItem("musicPlaying") === "true") {
                music.play().catch(() => {});
            }
        }
    }, { once: true });

    music.ontimeupdate = () => {
        localStorage.setItem("musicTime", music.currentTime);
    };

    document.addEventListener("touchstart", () => {
        if (music.paused && localStorage.getItem("musicPlaying") === "true") {
            music.play().catch(() => {});
        }
    }, { once: true });

    // Simpan posisi lagu setiap 1 detik
    setInterval(() => {
    // Hanya simpan jika musik aktif, tidak sedang pause, dan detiknya valid
        if (bgm && !bgm.paused && bgm.currentTime > 0) {
            localStorage.setItem("musicTime", bgm.currentTime);
        }
    }, 1000);
}

function goDashboard() {
    const music = document.getElementById("bgm");
    if (music) {
        localStorage.setItem("musicTime", music.currentTime);
    }
    window.location.href = "dashboard.html";
}
