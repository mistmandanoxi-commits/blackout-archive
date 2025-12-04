let allMainTracks = document.querySelectorAll(".main-track");
let sampleAudio = null;
let currentSample = null;


function stopAllMain() {
    allMainTracks.forEach(track => {
        track.pause();
        track.currentTime = 0;
    });
}


function stopSample() {
    if (sampleAudio) {
        sampleAudio.pause();
        sampleAudio.currentTime = 0;
    }
    if (currentSample) {
        currentSample.hidden = false;
        currentSample.parentElement.querySelector(".stop-sample").hidden = true;
    }
    sampleAudio = null;
    currentSample = null;
}

document.querySelectorAll(".play-sample").forEach(btn => {
    btn.addEventListener("click", () => {
        stopSample();
        stopAllMain();
        const src = btn.dataset.sample;
        sampleAudio = new Audio(src);
        sampleAudio.play();
        currentSample = btn;
        btn.hidden = true;
        btn.parentElement.querySelector(".stop-sample").hidden = false;
        sampleAudio.onended = () => stopSample();
    });
});

document.querySelectorAll(".stop-sample").forEach(btn => {
    btn.addEventListener("click", () => stopSample());
});

document.querySelector("#search").addEventListener("input", e => {
    const value = e.target.value.toLowerCase().trim();
    document.querySelectorAll(".single-card").forEach(card => {
        const title = card.querySelector("h2").textContent.toLowerCase();
        card.style.display = title.includes(value) ? "block" : "none";
    });
});
