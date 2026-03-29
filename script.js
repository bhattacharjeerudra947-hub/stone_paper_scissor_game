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
    start.addEventListener("click",()=>{
    pName=document.getElementById("playerName").value;
    if(pName ==="" || submit===false){
        alert("enter the the name first and submit the name first ");
        return ;
    }
    else{
        document.querySelector(".homepage").style.display="none";
        document.querySelector(".gameContainer").style.display="block";
        document.querySelector(".welcome").innerText=`welcome ${pName}😁`;
    }
    })
    
    
})
