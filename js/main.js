document.getElementById('play').onclick = function() {
    document.getElementById('vid').style.display = 'block'
}

closeVideo = function() {
    document.getElementById('vid').style.display = 'none';
    document.querySelector('.vid iframe').muted = true;
}