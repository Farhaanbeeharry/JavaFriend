window.onload = function() {
    playVoice("Welcome to this application. If you're asking me to open an external webpage or using voice commands for the first time, it will be blocked by your browser. Kindly allow popups when asked and try again. How can I help you?");
}

$(document).keypress('.manualInput', function(e) {
    if (e.which == 13) {
        e.preventDefault();
        cancelSynthesis();
        var text = document.getElementById('manualInput').value;
        document.getElementById('manualInput').value = "";
        let p = document.createElement('p');
        p.classList.add("sent");
        p.innerText = text;
        document.getElementById('texts').appendChild(p);
        var objDiv = document.getElementById("scrollableBox");
        objDiv.scrollTop = objDiv.scrollHeight;
        checkRecognition(text);
        var objDiv = document.getElementById("scrollableBox");
        objDiv.scrollTop = objDiv.scrollHeight;

    }

    p = document.createElement('p');
    p.classList.add("sent");
});

function speechBtnClicked() {
    cancelSynthesis();
    var speechBtn = document.getElementById('speechIcon');
    speechBtn.classList = "fas fa-cog fa-spin fa-4x";
    recognition.start();
}

const texts = document.querySelector('.texts');

window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const recognition = new window.SpeechRecognition();
recognition.interimResults = true;

let p = document.createElement('p');
p.classList.add("sent");

recognition.addEventListener('result', (e) => {
    const text = Array.from(e.results).map(result => result[0]).map(result => result.transcript).join('');

    p.innerText = text;
    document.getElementById('texts').appendChild(p);
    var objDiv = document.getElementById("scrollableBox");
    objDiv.scrollTop = objDiv.scrollHeight;

    if (e.results[0].isFinal) {

        var speechBtn = document.getElementById('speechIcon');
        speechBtn.classList = "fas fa-microphone fa-4x";

        checkRecognition(text);


        var objDiv = document.getElementById("scrollableBox");
        objDiv.scrollTop = objDiv.scrollHeight;

        p = document.createElement('p');
        p.classList.add("sent");
    }

})

var muted = 0;

function playVoice(text) {

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = 1;
    utterance.pitch = 1;
    if (muted == 0) {
        utterance.volume = 1;
    } else if (muted == 1) {
        utterance.volume = 0;
    }
    speechSynthesis.speak(utterance);
}

function cancelSynthesis() {
    recognition.stop();
    var speechBtn = document.getElementById('speechIcon');
    speechBtn.classList = "fas fa-microphone fa-4x";
    window.speechSynthesis.cancel();

}

function muteVoice() {
    if (muted == 0) {
        cancelSynthesis();
        muted = 1;
        document.getElementById('volumeIcon').classList = "fas fa-volume-mute fa-2x";
    } else if (muted == 1) {
        muted = 0;
        document.getElementById('volumeIcon').classList = "fas fa-volume-up fa-2x";
    }
}

function openHelp() {
    cancelSynthesis();
    location.href = "help.html";
}

function openApp() {
    location.href = "getStarted.html";
}

function goHome() {
    location.href = "index.html";
}

function validateText(text) {
    text = text.replace(/\s\s+/g, ' ');
    var text = text.toLowerCase();
    text = text.replace('?', '');
    text = text.replace('!', '');
    text = text.replace('`', '');
    text = text.replace('~', '');
    text = text.replace('@', '');
    text = text.replace('#', '');
    text = text.replace('$', '');
    text = text.replace('%', '');
    text = text.replace('^', '');
    text = text.replace('&', '');
    text = text.replace('*', '');
    text = text.replace('(', '');
    text = text.replace(')', '');
    text = text.replace('-', '');
    text = text.replace('_', '');
    text = text.replace('=', '');
    text = text.replace('+', '');
    text = text.replace('[', '');
    text = text.replace('{', '');
    text = text.replace(']', '');
    text = text.replace('}', '');
    text = text.replace(';', '');
    text = text.replace(':', '');
    text = text.replace('\'', '');
    text = text.replace('"', '');
    text = text.replace('\\', '');
    text = text.replace('|', '');
    text = text.replace(',', '');
    text = text.replace('<', '');
    text = text.replace('.', '');
    text = text.replace('>', '');
    text = text.replace('/', '');
    return text;
}

function clearTexts() {
    cancelSynthesis();
    var newConversation = "Conversation cleared. Let's start over again. How can I help you?";
    document.getElementById('texts').innerHTML = "<p>" + newConversation + "</p>";
    playVoice(newConversation);
}

function returnLastWord(words) {
    words = words.replace(/\s*$/, '');
    var n = words.split(" ");
    return n[n.length - 1];

}