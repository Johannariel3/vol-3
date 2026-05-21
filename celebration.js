const bgm = document.getElementById("bgm");

// ambil data terakhir
const savedTime = localStorage.getItem("musicTime");
const isPlaying = localStorage.getItem("musicPlaying");

// set waktu terakhir
if (savedTime) {
  bgm.currentTime = parseFloat(savedTime);
}

// autoplay sesuai state
if (isPlaying === "true") {
  bgm.play().catch(() => {});
}

// simpan posisi lagu setiap 1 detik
setInterval(() => {
  localStorage.setItem("musicTime", bgm.currentTime);
}, 1000);

// simpan status play/pause
bgm.addEventListener("play", () => {
  localStorage.setItem("musicPlaying", "true");
});

bgm.addEventListener("pause", () => {
  localStorage.setItem("musicPlaying", "false");
});

// fallback klik (biar browser izinkan audio)
document.addEventListener("click", () => {
  if (bgm.paused && localStorage.getItem("musicPlaying") === "true") {
    bgm.play().catch(() => {});
  }
}, { once: true });

// fallback touch (iOS fix)
document.addEventListener("touchstart", () => {
  if (bgm.paused && localStorage.getItem("musicPlaying") === "true") {
    bgm.play().catch(() => {});
  }
}, { once: true });

// tombol toggle
function toggleMusic() {
  if (bgm.paused) {
    bgm.play();
  } else {
    bgm.pause();
  }
}