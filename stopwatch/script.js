window.onload = function () {
    var minutes = 0;
    var seconds = 0;
    var milliseconds = 0;
    var Interval;

    var appendMinutes = document.getElementById("minutes");
    var appendMilliseconds = document.getElementById("milliseconds");
    var appendSeconds = document.getElementById("seconds");
    var buttonStart = document.getElementById("button-start");
    var buttonStop = document.getElementById("button-stop");
    var buttonReset = document.getElementById("button-reset");

    function startTimer() {
        milliseconds++;

        if (milliseconds <= 9) {
            appendMilliseconds.innerHTML = "0" + milliseconds;
        } else if (milliseconds <= 99) {
            appendMilliseconds.innerHTML = milliseconds;
        }

        if (milliseconds > 99) {
            seconds++;
            appendSeconds.innerHTML = seconds < 10 ? "0" + seconds : seconds;
            milliseconds = 0;
            appendMilliseconds.innerHTML = "00";
        }

        if (seconds > 59) {
            minutes++;
            appendMinutes.innerHTML = minutes < 10 ? "0" + minutes : minutes;
            seconds = 0;
            appendSeconds.innerHTML = "00";
        }
    }

    buttonStart.onclick = function () {
        clearInterval(Interval);
        Interval = setInterval(startTimer, 10);
    };

    buttonStop.onclick = function () {
        clearInterval(Interval);
    };

    buttonReset.onclick = function () {
        clearInterval(Interval);
        minutes = 0;
        seconds = 0;
        milliseconds = 0;
        appendMinutes.innerHTML = "00";
        appendMilliseconds.innerHTML = "00";
        appendSeconds.innerHTML = "00";
    };
};
