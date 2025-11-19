/* MINI PLAYER */
function togglePlayer() {
    document.getElementById("player").classList.toggle("expanded");
}
let audio = document.getElementById("audio");
let songTitle = document.getElementById("song-title");

// Toggle player open/close
function togglePlayer() {
    document.getElementById("player").classList.toggle("expanded");
}

// Play/pause the mini player audio
function togglePlay() {
    if(audio.paused){
        audio.play();
        document.querySelector(".play-btn").innerText = "⏸";
    } else {
        audio.pause();
        document.querySelector(".play-btn").innerText = "▶";
    }
}




/* SCROLL REVEAL */
const reveals = document.querySelectorAll(".reveal");
function revealOnScroll() {
    for (let r of reveals) {
        let top = r.getBoundingClientRect().top;
        if (top < window.innerHeight - 50) {
            r.classList.add("active");
        }
    }
}
window.addEventListener("scroll", revealOnScroll);
revealOnScroll();

/* VIDEO SECTION ANIMATION */
const videoSection = document.querySelector(".video-section");
window.addEventListener("scroll", () => {
    if (!videoSection) return;
    let top = videoSection.getBoundingClientRect().top;
    if (top < window.innerHeight - 100) {
        videoSection.classList.add("show");
    }
});

/* MOBILE MENU TOGGLE */
function toggleMenu() {
    document.getElementById("nav-links").classList.toggle("open");
}

/* BOOKING FORM SUBMISSION */
const bookingForm = document.getElementById("booking-form");
const formMsg = document.getElementById("form-msg");

bookingForm.addEventListener("submit", function(e) {
    e.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const date = document.getElementById("event-date").value;
    const type = document.getElementById("event-type").value;

    if (!name || !email || !date || !type) {
        formMsg.innerText = "Please fill in all required fields.";
        return;
    }

    formMsg.innerText = `Thanks ${name}! Your booking request has been sent.`;
    bookingForm.reset();
});

