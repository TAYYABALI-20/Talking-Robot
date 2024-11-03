let mouth = document.getElementById('mouth');

mouth.addEventListener('click', function () {

    mouth.classList.add('speak');

    var voice = document.getElementById('robot-voice');

    // setTimeout(function () {
        voice.play().catch(function (error) {
            console.error("Voice play failed:", error);
        });
    // }, 1500);

});