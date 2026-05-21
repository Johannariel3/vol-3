const notes = [
    {
        icon: '🌸',
        title: 'A Little Wish',
        body: `<p>I wish every morning you wake up feeling loved, warm, and ready for a beautiful day.</p>
               <p>You deserve all the good things life has to offer and I hope today is one of those days.</p>`
    },
    {
        icon: '☀️',
        title: 'For Your Mornings',
        body: `<p>Before the world gets loud today, I just wanted you to know that you are someone worth smiling about.</p>
               <p>Start slow, breathe deep, and remember: today is going to be okay. <span class="highlight">I believe in you.</span></p>`
    },
    {
        icon: '✨',
        title: 'Your Kindness',
        body: `<p>The way you treat people around you with so much warmth and care, it doesn't go unnoticed.</p>
               <p>You make the world a softer, kinder place just by being in it. Don't ever stop being you.</p>`
    },
    {
        icon: '🫧',
        title: "When You're Tired",
        body: `<p>On days when everything feels heavy, please remember it's okay to rest.</p>
               <p>You don't have to be strong all the time. <span class="highlight">Even the most beautiful flowers need rain.</span></p>`
    },
    {
        icon: '🌼',
        title: 'Your Laugh',
        body: `<p>Your laugh is one of my favourite sounds in the world. The way it fills a room effortless, genuine, contagious.</p>
               <p>I hope you laugh a lot today, and every day after that. 🌸</p>`
    },
    {
        icon: '💫',
        title: 'A Reminder',
        body: `<p>Just a small reminder: <span class="highlight">you are enough.</span></p>
               <p>Exactly as you are right now. Not a future, fixed, or filtered version of you. Just you, as you are today. That is more than enough.</p>`
    },
    {
        icon: '🌙',
        title: 'Our Future',
        body: `<p>I don't know exactly what the future holds but when I imagine mine, I always picture you somewhere in it.</p>
               <p>Maybe that means something. I think it does. 💕</p>`
    },
    {
        icon: '💌',
        title: 'My Lovely Khaira.',
        special: true,
        body: `<p>I'm so fucking in love with you, and I mean every word of that.</p>
               <p>Since the first time I met you, there was something different about you. Your way of speaking, your laugh, even your silence, everything makes me want to be close to you for longer.</p>
               <p>I love the little things about you that you might not even realize. The way your eyes sparkle when you talk about something you love. The way you always make sure the people around you are okay. You're such a good person, Sayang. And I've been trying not to hope too much. But it's impossible. Because every day I go through, the only thing that's always in my mind is <span class="highlight">you.</span></p>
               <p>You didn't just walk into my life you became the reason I look forward to it. Every morning feels different knowing you exist, knowing you're somewhere out there breathing the same air as me.</p>
               <p>I don't just want you near me. I need you near me the way a quiet room needs a song, the way a long night needs the promise of morning.</p>
               <p>Stay with me. Not because I'll fall apart without you, but because everything is simply better when you're in it. The laughs hit harder, the silence feels softer, and even the hard days seem worth getting through.</p>
               <p>Babe, i'm not asking for forever like it's some grand romantic gesture. I'm asking for your presence, your voice, your hand in mine when the world gets too loud.</p>
               <p>I love you in the most honest, unfiltered way I know how. And I hope God, I genuinely hope that you want to stay.</p>
               <p style="text-align:center; font-family:'Dancing Script',cursive; font-size:1.3rem; color:#c0396a; margin: 1rem 0;">
                   <em>Do you want to stay with me? 💕</em>
               </p>
               <p>I can't promise perfection. But I promise to always be there, to always care, and to always try to make you smile every single day.</p>`
    }
];

const grid = document.getElementById('envelopesGrid');

notes.forEach((note, index) => {
    const item = document.createElement('div');
    item.className = 'envelope-item';
    item.onclick = () => openModal(index);
    item.innerHTML = `
        <div class="envelope">${note.icon}</div>
        <div class="envelope-label">${note.title}</div>
    `;
    grid.appendChild(item);
});

function openModal(index) {
    const note = notes[index];
    document.getElementById('modalIcon').textContent = note.icon;
    document.getElementById('modalTitle').textContent = note.title;
    document.getElementById('modalBody').innerHTML = note.body;
    
    const btns = document.getElementById('answerBtns');
    btns.style.display = note.special ? 'flex' : 'none';
    const card = document.getElementById('modalCard');
    
    if (note.special) {
        card.classList.add('special');
        btns.style.display = 'flex';
    } else {
        card.classList.remove('special');
        btns.style.display = 'none';
    }
    
    document.getElementById('modalOverlay').classList.add('active');
}

function closeModal() {
    document.getElementById('modalOverlay').classList.remove('active');
}

function closeModalOutside(e) {
    if (e.target.id === 'modalOverlay') closeModal();
}

function pressYes() {
    const music = document.getElementById("bgm");
    if (music) {
        localStorage.setItem("musicTime", music.currentTime);
        localStorage.setItem("musicPlaying", "true"); // ← tambah ini
    }
    window.location.href = 'celebration.html';
}

// Di bagian paling bawah things.js, pastikan fungsi Back-nya seperti ini:
function goDashboard() {
    // Panggil fungsi yang ada di dashboard.js agar seragam
    if (typeof saveMusicTime === "function") {
        saveMusicTime();
    }
    window.location.href = "dashboard.html";
}

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