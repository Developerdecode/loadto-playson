
function playsound(songName){
    let audio = new Audio(songName)
    audio.loop = true;
    audio.play();
}

function onfunction(){
    setTimeout(() => {
        playsound('onelove.mp3')
    },5000);
}

window.addEventListener('load',onfunction)