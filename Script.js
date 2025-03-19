console.log("welcome to Spotify");

let songIndex=0;
let audioElement=new Audio('1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById ('myProgressBar');
let gif = document.getElementById ('gif');
let songItems=Array.from(document.getElementsByClassName('songIntem'));

let songs = [
    {songName: "Dekha Ek Khwab", filePath:"Songs/1.mp3", coverPath:"Cover/1.jpg"},
    {songName: "Bewajaah", filePath:"Songs/2.mp3", coverPath:"Cover/2.jpg"},
    {songName: "Tu Chale Sang", filePath:"Songs/3.mp3", coverPath:"Cover/3.jpg"},
    {songName: "Ye Fitoor", filePath:"Songs/4.mp3", coverPath:"Cover/4.jpg"},
    {songName: "O Mere Dil Ke Chain", filePath:"Songs/5.mp3", coverPath:"Cover/5.jpg"},
    {songName: "Girl I Need You", filePath:"Songs/6.mp3", coverPath:"Cover/6.jpg"},
    {songName: "Jeena Jeena", filePath:"Songs/7.mp3", coverPath:"Cover/7.jpg"},
    {songName: "Ankho se Batana", filePath:"Songs/8.mp3", coverPath:"Cover/8.jpg"},
    {songName: "Ruby Ruby Ruby", filePath:"Songs/9.mp3", coverPath:"Cover/9.jpg"},
]

songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src=songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText=songs[i].songName;
})

//audioElement.play();
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        gif.style.opacity=1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity=0;
    }
})

audioElement.addEventListener('timeupdate',()=>{
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value=progress;

})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime=myProgressBar.value * audioElement.duration/100;
})

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src='${songIndex +1}.mp3';
        audioElement.currentTime=0;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})