const changeColor = function () {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        // Move random selection INSIDE the loop for variety
        color += hex[Math.floor(Math.random() * 16)];
    }
    return color;
};

let intervalId;

function startChangingColor() {
    // Only start if an interval isn't already running
    if (!intervalId) {
        intervalId = setInterval(() => {
            document.body.style.backgroundColor = changeColor();
        }, 1000);
    }
}

function stopChangingColor() {
    clearInterval(intervalId);
    intervalId = null; // Essential so startChangingColor can run again
}

document.getElementById('start').addEventListener('click', startChangingColor);
document.getElementById('stop').addEventListener('click', stopChangingColor);