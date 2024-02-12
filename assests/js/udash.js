// Session timer
var sessionTime = 30 * 60; // 15 minutes in seconds
var timerElement = document.getElementById('sessionTimer');

function formatTime(seconds) {
    var min = Math.floor(seconds / 60);
    var sec = seconds % 60;
    return min.toString().padStart(2, '0') + ':' + sec.toString().padStart(2, '0');
}

function updateTimer() {
    sessionTime--;
    if (sessionTime < 0) {
        clearInterval(timerInterval);
        timerElement.textContent = 'Session Expired';
    } else {
        timerElement.textContent = formatTime(sessionTime);
    }
}

var timerInterval = setInterval(updateTimer, 1000);