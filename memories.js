const music = document.getElementById("bgm");

if (music) {
    const savedTime = localStorage.getItem("musicTime");
    if (savedTime) {
        music.currentTime = parseFloat(savedTime);
    }

    if (localStorage.getItem("musicPlaying") === "true") {
        music.play().catch(() => {});
    }

    music.ontimeupdate = () => {
        localStorage.setItem("musicTime", music.currentTime);
    };

    document.addEventListener("touchstart", () => {
        if (music.paused && localStorage.getItem("musicPlaying") === "true") {
            music.play().catch(() => {});
        }
    }, { once: true });
}