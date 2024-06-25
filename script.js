
const clapButton = document.getElementById("clap");
clapButton.addEventListener("click", function(e) {
    //alert("Clap");
    const audio = new Audio("sounds/clap.mp3");
    audio.play();
});

const hihatButton = document.getElementById("hihat");
hihatButton.addEventListener("click", function(e) {
    //alert("Hi Hat");
    const audio = new Audio("sounds/hihat.mp3");
    audio.play();
});

const kickButton = document.getElementById("kick");
kickButton.addEventListener("click", function(e) {
    //alert("Kick");
    const audio = new Audio("sounds/kick.mp3");
    audio.play();
});

const snareButton = document.getElementById("snare");
snareButton.addEventListener("click", function(e) {
    //alert("Snare");
    const audio = new Audio("sounds/snare.mp3");
    audio.play();
});
