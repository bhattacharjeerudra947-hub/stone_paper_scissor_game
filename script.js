const slider = document.getElementById("volumeSlider");
const icon = document.getElementById("volumeIcon");
const audios = document.querySelectorAll("audio");

slider.addEventListener('input', () => {
    const val = parseFloat(slider.value);
    audios.forEach(audio => audio.volume = val);
    if (val === 0) {
        icon.className = "fa-solid fa-volume-xmark";
    } else if (val < 0.5) {
        icon.className = "fa-solid fa-volume-low";
    } else {
        icon.className = "fa-solid fa-volume-high";
    }
});

let pName = "";
let submit = false;
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    submit = true;
    pName = document.getElementById("playerName").value;
});

const start = document.querySelector(".gameStart");
start.addEventListener("click", () => {
    pName = document.getElementById("playerName").value;
    if (pName === "" || submit === false) {
        alert("Enter the name first and submit it.");
        return;
    }
    document.querySelector(".homepage").style.display = "none";
    document.querySelector(".gameContainer").style.display = "block";
    document.querySelector(".welcome").innerText = `Welcome ${pName} 😁`;
});

const choice = document.querySelector(".playerChoice");
let pChoice;

function getRandom() {
    const comChoices = ["rock", "paper", "scissor"];
    return comChoices[Math.floor(Math.random() * 3)];
}

// ✅ Fix 1: Generate computer choice ONCE and pass it to both functions
function decision() {
    const comChoice = getRandom(); // single roll

    // ✅ Fix 2: Proper rock-paper-scissors logic
    if (pChoice === comChoice) {
        drawMessage(comChoice);
    } else if (
        (pChoice === "rock"    && comChoice === "scissor") ||
        (pChoice === "paper"   && comChoice === "rock")    ||
        (pChoice === "scissor" && comChoice === "paper")
    ) {
        winnerMessage(comChoice);
    } else {
        looseMessage(comChoice);
    }
}

function looseMessage(comChoice) {
    document.querySelector(".lossemessage").innerText =
        `Sorry, you lost! Computer chose ${comChoice}.`;
    document.querySelector(".winnerMessage").innerText = "";
}

function winnerMessage(comChoice) {
    document.querySelector(".winnerMessage").innerText =
        `Congrats ${pName}, you won! Computer chose ${comChoice}.`;
    document.querySelector(".lossemessage").innerText = "";
}

function drawMessage(comChoice) {
    document.querySelector(".winnerMessage").innerText = "";
    document.querySelector(".lossemessage").innerText =
        `It's a draw! You both chose ${comChoice}.`;
}

choice.addEventListener("click", (e) => {
    const clicked = e.target.closest(".block__item");
    const thinking = document.querySelector(".thinking");
    const cursor = document.querySelector(".cursor");

    if (clicked) {
        pChoice = clicked.id;
        choice.style.display = "none";
        thinking.style.visibility = "visible";
        thinking.style.opacity = "1";
        cursor.classList.remove("typewriter-animation");
        void cursor.offsetWidth;
        cursor.classList.add("typewriter-animation");

        decision();
    }
});