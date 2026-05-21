const music = document.getElementById("bgm");

if (music) {
    music.addEventListener("canplay", () => {
        const savedTime = localStorage.getItem("musicTime");
        if (savedTime) {
            music.currentTime = parseFloat(savedTime);
        }
        if (localStorage.getItem("musicPlaying") === "true") {
            music.play().catch(() => {});
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
}

function goDashboard() {
    const music = document.getElementById("bgm");
    if (music) {
        localStorage.setItem("musicTime", music.currentTime);
    }
    window.location.href = "dashboard.html";
}