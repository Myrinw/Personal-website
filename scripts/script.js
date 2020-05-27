const navItems = document.querySelectorAll("li a");
const websiteOne= document.querySelector(".website1");
const popup = document.querySelector(".popup");
const close = document.querySelectorAll(".close");
const modal = document.querySelector(".modal");
const video = document.querySelector(".bg__video");
const pause = document.querySelector(".pause");

//video pause
pause.addEventListener("click", function(){
    if(video.paused){
        video.play();
        pause.innerHTML = '<i class="fas fa-pause"></i> Pause';

    }else{
        video.pause();
        pause.innerHTML = '<i class="fas fa-play"></i> Play';

    }
})

//Open popup
for(let i = 1; i < 7; i++){
document.querySelector(`.website${i}`).addEventListener("click", function(){
    popup.style.display = "flex";
    document.querySelector(`.modal${i}`).style.display = "flex";
});}

//Close popup
for(let i = 0; i < 6; i++){
close[i].addEventListener("click", function(){
    popup.style.display = "none";
    for(let i = 1; i < 7; i++){
        document.querySelector(`.modal${i}`).style.display = "none";
    }
});
}


