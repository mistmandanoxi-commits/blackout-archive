const faders=document.querySelectorAll('.fade-in');
const appearOptions={threshold:0.1,rootMargin:"0px 0px -50px 0px"};
const appearOnScroll=new IntersectionObserver(function(entries,observer){
    entries.forEach(entry=>{
        if(!entry.isIntersecting) return;
        entry.target.classList.add('appear');
        observer.unobserve(entry.target);
    });
},appearOptions);
faders.forEach(fader=>appearOnScroll.observe(fader));

document.querySelectorAll('.album-cover, .single-card img').forEach(card=>{
    card.addEventListener('mousemove',e=>{
        const width=card.offsetWidth;
        const height=card.offsetHeight;
        const x=e.offsetX;
        const y=e.offsetY;
        const rotateX=((y-height/2)/height)*10;
        const rotateY=((x-width/2)/width)*10;
        card.style.transform=`rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });
    card.addEventListener('mouseleave',()=>{card.style.transform='rotateX(0) rotateY(0) scale(1)';});
});

document.querySelectorAll('.album-cover, .single-card img').forEach(card=>{
    card.addEventListener('mousemove', e=>{
        const width=card.offsetWidth;
        const height=card.offsetHeight;
        const x=e.offsetX;
        const y=e.offsetY;
        const rotateX=((y-height/2)/height)*10;
        const rotateY=((x-width/2)/width)*10;
        card.style.transform=`rotateX(${-rotateX}deg) rotateY(${rotateY}deg) scale(1.05)`;
    });
    card.addEventListener('mouseleave',()=>{card.style.transform='rotateX(0) rotateY(0) scale(1)';});
});

// Фоновий трек для синглів
const bgMusicSingles = document.getElementById('bg-music-singles');
if(bgMusicSingles) { bgMusicSingles.volume = 0.2; }

// Відтворення уривків і пауза фонового треку
const playButtons = document.querySelectorAll('.play-sample');
playButtons.forEach(button => {
    button.addEventListener('click', () => {
        const sampleSrc = button.getAttribute('data-src');
        const sampleAudio = new Audio(sampleSrc);

        // Зупиняємо фон
        if(bgMusicSingles && !bgMusicSingles.paused) bgMusicSingles.pause();

        sampleAudio.play();

        // Після завершення відтворення — відновлюємо фон
        sampleAudio.addEventListener('ended', () => {
            if(bgMusicSingles) bgMusicSingles.play();
        });
    });
});
let allMainTracks = document.querySelectorAll(".main-track");
let currentSample = null;
let sampleAudio = null;
