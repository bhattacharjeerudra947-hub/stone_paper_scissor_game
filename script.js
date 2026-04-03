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
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
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
    setTimeout(() => audio.play(), 20);
    const audio=document.querySelector(".loosesound");
    audio.play();
    document.querySelector("#looseMessage").innerText =
        `Sorry, you lost! Computer chose ${comChoice}.`;
    playagain();
}
function celebrate() {
    for (let i = 0; i < 30; i++) {
        const emoji = document.createElement("div");
        emoji.classList.add("emoji");
        emoji.innerText = "🎉";

        emoji.style.left = Math.random() * 100 + "vw";
        emoji.style.animationDuration = (Math.random() * 2 + 1) + "s";

        document.body.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 60000);
    }
}

function winnerMessage(comChoice) {
    setTimeout(() => audio.play(), 20);
    const audio=document.querySelector(".winsound");
    audio.play();
    document.querySelector("#winnerMessage").innerText =
        `Congrats ${pName}, you won! Computer also chose ${comChoice}.`;
        celebrate();
    playagain();
}

function drawMessage(comChoice) {
    setTimeout(() => audio.play(), 20);
    const audio=document.querySelector(".drawsound");
    audio.play();
    document.querySelector("#draw").innerText =
        `It's a draw! You both chose ${comChoice}.`;
    playagain()
}
function playagain(){
    document.querySelector(".playAgain").style.display="block";
}

choice.addEventListener("click", async (e) => {
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

        await delay(6000);   // wait 2 seconds
        thinking.style.visibility = "hidden"; // optional
        decision();
    }
});
function resetBtn(){
    document.querySelector("#winnerMessage").innerText = "";
    document.querySelector("#looseMessage").innerText = "";
    document.querySelector("#draw").innerText = "";
    
    document.querySelector(".playerChoice").style.display = "flex";
    document.querySelector(".thinking").style.visibility = "hidden";
    document.querySelector(".playAgain").style.display="none";
}
const playAgain=document.querySelector(".playAgain button");

playAgain.addEventListener("click",()=>{
    resetBtn();

});
const newGame=document.querySelector(".newGame button");
newGame.addEventListener("click", () => {
    resetBtn();

    document.querySelector(".homepage").style.display = "flex";
    document.querySelector(".gameContainer").style.display = "none";

    document.getElementById("playerName").value = "";
    pName = "";
    submit = false;
    console.log("clicked")
});
