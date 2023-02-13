(function ($) {
    var audio = [];
    var mousedown = false;

    function playRandomBurn() {
        _playBurn(audio[_getWeightedBoolean() ? 0 : 1]);
    }

    function _getWeightedBoolean() {
        return Math.random() < 0.3;
    }

    function _showButtonUp() {
        $('.burnbutton-up').show();
    }

    function _showButtonDown() {
        $('.burnbutton-down').show();
    }

    function _hideButtonUp() {
        $('.burnbutton-up').hide();
    }

    function _hideButtonDown() {
        $('.burnbutton-down').hide();
    }

    function _playBurn(audio) {
        if (!audio.paused) {
            audio.pause();
        }
        audio.currentTime = 0;
        audio.play();
    }

    function _createNewAudio(src) {
        var index = audio.length;
        audio[index] = new Audio();
        audio[index].src = src;
        audio[index].onended = function() {
            audio[index].currentTime = 0;
            if (mousedown) {
                _playBurn(audio[index]);
            }
        };
    }

    $(document).ready(function () {
        _createNewAudio('assets/sounds/burn1.wav');
        _createNewAudio('assets/sounds/burn2.wav');
        // _createNewAudio('assets/sounds/burn3.wav');

        $('.burnbutton').mousedown(function () {
            mousedown = true;
            _hideButtonUp();
            _showButtonDown();
            playRandomBurn();
        }).mouseup(function () {
            mousedown = false;
            _hideButtonDown();
            _showButtonUp();
        });

        $('.burnbutton').show();
        _showButtonUp();
    });
})(jQuery);
