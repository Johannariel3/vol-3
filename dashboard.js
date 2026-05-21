// ===============================
// MUSIC SYSTEM
// ===============================

window.addEventListener("load", () => {

    const music = document.getElementById("bgm");

    music.addEventListener("canplay", () => {
        const savedTime = localStorage.getItem("musicTime");
        if (savedTime) {
            music.currentTime = parseFloat(savedTime); // ← parseFloat penting!
        }
        music.play().catch(() => {
            console.log("Autoplay diblokir browser");
        });
    }, { once: true }); // ← once: true agar tidak dipanggil berkali-kali

    music.addEventListener("play", () => {
        localStorage.setItem("musicPlaying", "true");
    });

    music.addEventListener("pause", () => {
        localStorage.setItem("musicPlaying", "false");
    });

    setInterval(() => {
        if (!music.paused) {
            localStorage.setItem("musicTime", music.currentTime);
        }
    }, 1000);

    document.addEventListener("touchstart", () => {
        if (music.paused && localStorage.getItem("musicPlaying") === "true") {
            music.play().catch(() => {});
        }
    }, { once: true });
});


// ===============================
// NAVIGATION
// ===============================

// menuju halaman memories
function goMemories() {

    saveMusicTime();

    window.location.href = "memories.html";
}

// menuju halaman things
function goThings() {

    saveMusicTime();

    window.location.href = "things.html";
}

// menuju halaman notes
function goNotes() {

    saveMusicTime();

    window.location.href = "notes.html";
}

// kembali ke dashboard
function BackToDashboard() {

    saveMusicTime();

    window.location.href = "dashboard.html";
}


// ===============================
// LOGOUT
// ===============================

function logout() {

    localStorage.removeItem("musicTime");
    localStorage.removeItem("musicPlaying");
    localStorage.removeItem("bgmTime");  
    window.location.href = "index.html";
}


// ===============================
// SAVE MUSIC POSITION
// ===============================

function saveMusicTime() {

    const music = document.getElementById("bgm");

    if (music) {
        localStorage.setItem("musicTime", music.currentTime);
    }
}