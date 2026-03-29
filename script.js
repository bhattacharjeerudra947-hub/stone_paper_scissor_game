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
const form = document.querySelector("form");
form.addEventListener("submit",(e) =>{
    e.preventDefault();
    pName=document.getElementById("playerName").value;
    console.log(pName);

})
const start=document.querySelector("gameStart");
start.addEventListener("click",()=>{
    document.querySelector("homepage").style.display="none";
    document.querySelector("gameContainer").style.display="block";
})