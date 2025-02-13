let currentSpotifyLink = "";

function startCalculation() {
    document.getElementById('welcomeScreen').classList.add('hidden');
    document.getElementById('loadingScreen').classList.remove('hidden');

    setTimeout(() => {
        document.getElementById('loadingScreen').classList.add('hidden');
        document.getElementById('resultScreen').classList.remove('hidden');
        displayTime();
    }, 3000);
}

function maybeLater() {
    alert("Okay, maybe later! 😊");
}

function displayTime() {
    const startDate = new Date("2025-01-30T00:00:00"); // Fixed to January 30, 2025
    const now = new Date();
    
    let diff = now - startDate;
    
    let years = Math.floor(diff / (1000 * 60 * 60 * 24 * 365));
    diff -= years * (1000 * 60 * 60 * 24 * 365);
    
    let months = Math.floor(diff / (1000 * 60 * 60 * 24 * 30));
    diff -= months * (1000 * 60 * 60 * 24 * 30);
    
    let days = Math.floor(diff / (1000 * 60 * 60 * 24));
    diff -= days * (1000 * 60 * 60 * 24);
    
    let hours = Math.floor(diff / (1000 * 60 * 60));
    diff -= hours * (1000 * 60 * 60);
    
    let minutes = Math.floor(diff / (1000 * 60));
    diff -= minutes * (1000 * 60);
    
    let seconds = Math.floor(diff / 1000);

    document.getElementById('timeDisplay').innerHTML = `
        <p>${years} ${years === 1 ? 'Year' : 'Years'}</p>
        <p>${months} ${months === 1 ? 'Month' : 'Months'}</p>
        <p>${days} ${days === 1 ? 'Day' : 'Days'}</p>
        <p>${hours} Hours</p>
        <p>${minutes} Minutes</p>
        <p>${seconds} Seconds</p>
    `;
}

function showPlaylist() {
    document.getElementById('welcomeScreen').classList.add('hidden');
    document.getElementById('playlistScreen').classList.remove('hidden');
}

function backToWelcome() {
    document.getElementById('playlistScreen').classList.add('hidden');
    document.getElementById('resultScreen').classList.add('hidden');
    document.getElementById('welcomeScreen').classList.remove('hidden');
}

function showSong(title, artist, link, image) {
    document.getElementById('playlistScreen').classList.add('hidden');
    document.getElementById('songScreen').classList.remove('hidden');

    document.getElementById('songTitle').innerText = title;
    document.getElementById('songArtist').innerText = artist;
    document.getElementById('songImage').src = image;
    currentSpotifyLink = link;
}

function backToPlaylist() {
    document.getElementById('songScreen').classList.add('hidden');
    document.getElementById('playlistScreen').classList.remove('hidden');
}

function openSpotify() {
    window.open(currentSpotifyLink, '_blank');
}

/* Cute cat gif animations */
document.addEventListener("DOMContentLoaded", function() {
    document.querySelectorAll(".cat-gif").forEach(cat => {
        cat.style.transition = "transform 0.5s";
        cat.addEventListener("mouseover", () => {
            cat.style.transform = "scale(1.1) rotate(5deg)";
        });
        cat.addEventListener("mouseout", () => {
            cat.style.transform = "scale(1)";
        });
    });
});
