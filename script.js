console.log("Welocme to Mysongs");

// initilaize the variables
let songIndex  = 0; // index of song which song is playing
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay'); // masterPlay is present in our HTML id = masterPlay
let MyprogressBar = document.getElementById('MyprogressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));



let song = [
    {songName : "Warrio-Mortals[NCS release]" , filePath:"song/1.mp3 ", coverPath : "covers/Warrio.jpeg"},
    {songName : "kesariya tera Ishq hai piya" , filePath:"song/2.mp3" , coverPath : "covers/cover1.jpeg"},
    {songName : "Door Akhiyon Se - Rochak Kohli" , filePath:"song/3.Door Akhiyon Se - Rochak Kohli.mp3" , coverPath : "covers/Door ankhiyo se.jpeg"},
    {songName : "Har Har Shambhu Shiv Mahadeva" , filePath:"song/4.Har Har Shambhu Shiv Mahadeva.mp3" , coverPath : "covers/Har har sambhu.jpeg"},
    {songName : "Ishq Da Dariyaa - Stebin Ben" , filePath:"song/5.Ishq Da Dariyaa - Stebin Ben.mp3" , coverPath : "covers/Ishq-Da-Dariyaa-Lyrics-In-Hindi-Stebin-Ben.jpeg"},
    {songName : "Kuch To Bata Zindagi LoFi" , filePath:"song/6.Kuch To Bata Zindagi LoFi.mp3" , coverPath : "covers/Zindagi.jpeg"},
    {songName : "Lo Safar Shuru Ho Gaya" , filePath:"song/7.Lo Safar Shuru Ho Gaya.mp3" , coverPath : "covers/Lo-Safar-1.jpeg"},
    {songName : "Man Ye Sahib Ji (1)" , filePath:"song/8.Man Ye Sahib Ji (1).mp3" , coverPath : "covers/Sahib.jpeg"},
    {songName : "Mann Mera (Unplugged) Gajendra Verma" , filePath:"song/9.Mann Mera (Unplugged) Gajendra Verma.mp3" , coverPath : "covers/Maan mera.jpeg"},
    {songName : "Tum Mile Lofi" , filePath:"song/10.Tum Mile Lofi.mp3" , coverPath : "covers/Tum-Mile-Lofi--Hindi-2021-20211201193351-500x500.jpeg"},
    {songName : "kesariya tera Ishq hai piya" , filePath:"song/11.mp3" , coverPath : "covers/cover1.jpeg"},
     // in this javascript we have songs whihc is array of objects
]

songItems.forEach((element, i)=>{
    element.getElementsByTagName("img")[0].src = song[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = song[i].songName;


})

//audioElement.play();

// Handle pause/play click
masterPlay.addEventListener('click', ()=>{ // we are using here addeventlistener because we want to comfirm that audio is playing or not playing
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;

    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;

    }

});


// listen to events
audioElement.addEventListener('timeupdate', () =>{
    // console.log('timeupdate')
    //update seekBar
    progress = parseInt((audioElement.currentTime / audioElement.duration)*100);
    console.log(progress);
    MyprogressBar.value = progress; // It will set progress


})

MyprogressBar.addEventListener('change', ()=>{ // when my progrss bar changes we seek our audio at that location
    audioElement.currentTime = MyprogressBar.value * audioElement.duration/100;
})

const makeAllPlays = ()=> {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle')
        element.classList.add('fa-play-circle');
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        console.log(e.target)
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `song/${songIndex+1}.mp3`;
        masterSongName.innerText = song[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })

    
})

document.getElementById('next').addEventListener('click', ()=> {
    if(songIndex >= 9){
        songIndex = 0;

    }
    else{
        songIndex += 1
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = song[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('next').addEventListener('click', ()=> {
    if(songIndex <= 0){
        songIndex = 0;
    }
    else{
        songIndex -= 1
    }
    audioElement.src = `song/${songIndex+1}.mp3`;
    masterSongName.innerText = song[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    masterPlay.classList.remove('fa-play-circle');
    masterPlay.classList.add('fa-pause-circle');
})