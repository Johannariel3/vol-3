// ===============================
// MUSIC SYSTEM
// ===============================

window.addEventListener("load", () => {

    const music = document.getElementById("bgm");

    // ambil posisi lagu terakhir
    const savedTime = localStorage.getItem("musicTime");

    // lanjutkan lagu dari posisi terakhir
    if (savedTime) {
        music.currentTime = savedTime;
    }

    // play music
    music.play().catch(() => {
        console.log("Autoplay diblokir browser");
    });
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

    // hapus data musik
    localStorage.removeItem("musicTime");

    // kembali ke login
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