// Heart animation for bubu.html only
function createHeart() {
    const heart = document.createElement('div');
    heart.className = 'heart';
    heart.style.left = Math.random() * 90 + 'vw';
    heart.style.animationDuration = (2 + Math.random() * 3) + 's';
    const container = document.getElementById('animation-container');
    if (container) {
        container.appendChild(heart);
        setTimeout(() => heart.remove(), 4000);
    }
}

if (window.location.pathname.includes('bubu.html')) {
    setInterval(createHeart, 500);
} 