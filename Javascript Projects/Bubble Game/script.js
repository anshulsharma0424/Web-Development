let timer = 60;
let score = 0;
let hitrn = 0;
let intervalId = null;

// Yeh function Score ko +10 karega
function increaseScore() {
    score += 10;
    document.querySelector("#scoreVal").textContent = score;
}

// Yeh function Hit value ko Update karega - So that user jab correct bubble pe click karega th new HIT value generate hogi
function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = hitrn;
}

// Yeh function apna bubbles ko create karega
function makeBubble() {
    let clutter = ""; // clutter me bubbles add hoga ya honge whatever
    for (let i = 1; i <= 150; i++) {
        let rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`; // yeh apna 150 bubbles ko create karega - bcoz apan ne loop lagaya hai
    }
    document.querySelector("#pbtm").innerHTML = clutter;
}

// To handle bubble ke clicks
document.querySelector("#pbtm").addEventListener("click", function (dets) {
    const clickedNumber = Number(dets.target.textContent);
    if (dets.target.classList.contains("bubble")) {
        if (clickedNumber === hitrn) {
            increaseScore();
            makeBubble();
            getNewHit();
        } else {
            // Wrong bubble logic
            score -= 5;
            document.querySelector("#scoreVal").textContent = score;
            dets.target.classList.add("wrong");
            // Vibrate effect on wrong click - Ye wala chatPT se help lia hai mne - "FIRSE DEKHNA HAI ISKO"
            if (navigator.vibrate) {
                navigator.vibrate(100);
            }
            setTimeout(() => {
                dets.target.classList.remove("wrong");
            }, 300);
        }
    }
});

// Start Timer
function runTimer() {
    intervalId = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timerval").textContent = timer;
        } else {
            clearInterval(intervalId);
            showGameOver();
        }
    }, 1000);
}

// Game Over Screen
function showGameOver() {
    document.querySelector("#pbtm").innerHTML = `
        <div style="text-align: center;">
            <h1>Game Over</h1>
            <h2>Your Score: ${score}</h2>
            <button id="restartBtn">Restart</button>
        </div>`;

    document.querySelector("#restartBtn").addEventListener("click", function () {
        restartGame();
    });
}

// Start Game from Start Button
document.querySelector("#startBtn").addEventListener("click", function () {
    document.querySelector("#startScreen").style.display = "none";
    document.querySelector("#main").style.display = "flex";
    startGame();
});

// Start Game ka Logic
function startGame() {
    timer = 60;
    score = 0;
    document.querySelector("#scoreVal").textContent = score;
    document.querySelector("#timerval").textContent = timer;
    getNewHit();
    makeBubble();
    runTimer();
}

// Restart Game
function restartGame() {
    clearInterval(intervalId);
    startGame();
}
