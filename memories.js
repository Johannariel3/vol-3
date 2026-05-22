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

    // Simpan posisi lagu setiap 1 detik
    // HAPUS setInterval yang lama, ganti dengan ini:
    setInterval(() => {
    // PENGAMAN: Hanya simpan jika musik ada, TIDAK sedang pause, 
    // dan detiknya berjalan (di atas 0)
        if (music && !music.paused && music.currentTime > 0) {
            localStorage.setItem("musicTime", music.currentTime);
        }
    }, 1000);

    music.ontimeupdate = () => {
        localStorage.setItem("musicTime", music.currentTime);
    };

    document.addEventListener("touchstart", () => {
        if (music.paused && localStorage.getItem("musicPlaying") === "true") {
            music.play().catch(() => {});
        }
    }, { once: true });
}

function BackToDashboard() {
    const music = document.getElementById("bgm");
    if (music) {
        localStorage.setItem("musicTime", music.currentTime);
    }
    window.location.href = "dashboard.html";
}