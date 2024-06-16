var swfobject = {};

swfobject.embedSWF = function(url, cont, width, height){
    var ruffle = window.RufflePlayer.newest(),
        player = Object.assign(document.getElementById(cont).appendChild(ruffle.createPlayer()), {
            width: '100%',
            height: '100%',
            style: 'width: 100%; height: 100%;',
        });

    player.load({ url: url });
}

// Adjust game size on window resize
window.addEventListener('resize', function() {
    var ruffleElement = document.getElementById('ruffle');
    if (ruffleElement) {
        ruffleElement.style.width = '100%';
        ruffleElement.style.height = '100%';
    }
});

