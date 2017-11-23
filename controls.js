var myTrack = document.getElementById('mytrack');
var playButton = document.getElementById('playButton');

playButton.addEventListener('click', playOrPause, false);

function playOrPause() {
    if (!myTrack.paused && !myTrack.ended) {
        myTrack.pause();
        playButton.style.backgroundImage = 'url(./play.png)';
    }
    else {
        myTrack.play();
        playButton.style.backgroundImage = 'url(./pause.png)';
    }
}