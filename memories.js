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
}