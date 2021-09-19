music_name = "music.mp3";
let play_btn = document.querySelector("#play");
let next_btn = document.querySelector("#next");
let prev_btn = document.querySelector("#prev");
let range = document.querySelector("#range");
let play_img = document.querySelector("#play_img");
let isPlaying = false;
let duration = 0;
let currentTime = 0;
let Song = new Audio();
window.onload = playsong

function playsong() {
  Song.src = music_name;
  play_btn.addEventListener('click', function() {
    if(!isPlaying) {
      Song.play();
      isPlaying = true;
      duration = Song.duration;
      range.max = duration;
      play_img.src = "https://img.icons8.com/bubbles/50/000000/pause.png";
    }else {
      Song.pause();
      isPlaying = false;
      play_img.src = "https://img.icons8.com/bubbles/50/000000/play.png";
    }
    range.addEventListener('change', function() {
      Song.currentTime = range.value;
    })
    Song.addEventListener('timeupdate', function() {
      range.value = Song.currentTime;
    })
  })
}
