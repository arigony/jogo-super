var swfobject = {};

swfobject.embedSWF = function(url, cont, width, height) {
    var ruffle = window.RufflePlayer.newest(),
        container = document.getElementById(cont),
        player = Object.assign(container.appendChild(ruffle.createPlayer()), {
            style: 'width: 100%; height: 100%'
        });

    player.load({ url: url });

    function resizePlayer() {
        var aspectRatio = 4 / 3;  // Proporção do jogo
        var newWidth = container.clientWidth;
        var newHeight = newWidth / aspectRatio;
        
        // Ajustar a altura do contêiner com base na proporção
        container.style.height = newHeight + 'px';
        player.style.width = newWidth + 'px';
        player.style.height = newHeight + 'px';
    }

    // Ajustar o tamanho do player quando a janela é redimensionada ou a orientação muda
    window.addEventListener('resize', resizePlayer);
    window.addEventListener('orientationchange', resizePlayer);

    // Chamar a função inicialmente para ajustar o tamanho
    resizePlayer();
};
