const slider=document.getElementById("volumeSlider");

const icon=document.getElementById("volumeIcon");
const audios=document.querySelectorAll("audio")
slider.addEventListener('input',()=>{
    const val=parseFloat(slider.value);
    audios.forEach(audio=>audio.volume=val);
    if (val===0){
        icon.className="fa-solid fa-volume-xmark";

    }else if(val<0.4){
        icon.className="fa-solid fa-volume-low";
    }else if(val<0.7){
        icon.className="fa-solid fa-volume-high";

    }else{
        icon.className="fa-solid fa-volume-high";
    }
});
let pName="";
let submit=false;
const form = document.querySelector("form");
form.addEventListener("submit",(e) =>{
    e.preventDefault();
    submit=true;
    
    pName=document.getElementById("playerName").value;
    console.log(pName);

})
const start=document.querySelector(".gameStart");


start.addEventListener("click",()=>{
    pName=document.getElementById("playerName").value;
    if(pName ==="" || submit===false){
        alert("enter the the name first and submit the name first ");
        return ;
    }
    
    document.querySelector(".homepage").style.display="none";
    document.querySelector(".gameContainer").style.display="block";
        
    document.querySelector(".welcome").innerText = `welcome ${pName} 😁`;    //when i put this pout of if the name disappeared because 
                                                                               //it It runs immediately when page loads at page load default value of pName is = "";
    })
    

    const choice = document.querySelector(".playerChoice");
let pChoice;

choice.addEventListener("click", (e) => {
    const clicked = e.target.closest(".block__item");
    const thinking = document.querySelector(".thinking");
    const cursor = document.querySelector(".cursor");

    if (clicked) {
        pChoice = clicked.id;
        choice.style.display = "none";

        // Show the thinking container
        thinking.style.visibility = "visible";
        thinking.style.opacity = "1";

        // Reset the animation first (important trick)
        cursor.classList.remove("typewriter-animation");
        void cursor.offsetWidth;  // force reflow to reset animation
        cursor.classList.add("typewriter-animation");
    }
});
