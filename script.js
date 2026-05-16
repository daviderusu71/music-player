const audio = document.getElementById("audio");
const playBtn = document.getElementById("play");
const progress = document.querySelector(".progress");
const volume = document.getElementById("volume");

const title = document.querySelector(".title");
const artist = document.querySelector(".artist");
const cover = document.querySelector(".cover");

const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

const songs = [

{
    name:"Melodia 1",
    artist:"Artist 1",
    src:"songs/song1.mp3",
    cover:"images/cover1.jpg"
},

{
    name:"Melodia 2",
    artist:"Artist 2",
    src:"songs/song2.mp3",
    cover:"images/cover2.jpg"
},

{
    name:"Melodia 3",
    artist:"Artist 3",
    src:"songs/song3.mp3",
    cover:"images/cover3.jpg"
}

];

let songIndex = 0;
let isPlaying = false;

function loadSong(song){

    title.innerHTML = song.name;
    artist.innerHTML = song.artist;
    audio.src = song.src;
    cover.src = song.cover;

}

loadSong(songs[songIndex]);

playBtn.addEventListener("click", () => {

    if(isPlaying){

        audio.pause();
        playBtn.innerHTML = "▶";

    } else{

        audio.play();
        playBtn.innerHTML = "⏸";

    }

    isPlaying = !isPlaying;

});

nextBtn.addEventListener("click", () => {

    songIndex++;

    if(songIndex > songs.length - 1){
        songIndex = 0;
    }

    loadSong(songs[songIndex]);
    audio.play();

});

prevBtn.addEventListener("click", () => {

    songIndex--;

    if(songIndex < 0){
        songIndex = songs.length - 1;
    }

    loadSong(songs[songIndex]);
    audio.play();

});

audio.addEventListener("timeupdate", () => {

    progress.value = (audio.currentTime / audio.duration) * 100;

});

progress.addEventListener("input", () => {

    audio.currentTime = (progress.value / 100) * audio.duration;

});

volume.addEventListener("input", () => {

    audio.volume = volume.value;

});