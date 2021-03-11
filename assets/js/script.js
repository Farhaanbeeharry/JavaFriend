var greetingList = [
    "Hello, how can I help you?",
    "Hi, how can I assist you today?",
    "Greetings, how can I be of help to you?"
]

var greetingList2 = [
    "Hello. I'm good. How can I assist you?",
    "Hi, I'm fine. How can I be of help to you?",
    "Greetings, doing good. How can I help you?"
]

var unreadable = [
    "Sorry, I couldn't catch that. Can you try again?",
    "Apologies, I didn't understand. Can you please try again?"
]


$(document).keypress('.manualInput', function(e) {
    if (e.which == 13) {
        e.preventDefault();
        //button pressed function
    }
});

function speechBtnClicked() {
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



    if (e.results[0].isFinal) {

        if (text.includes('how') && text.includes('are') && text.includes('you')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * greetingList2.length);
            p.innerText = greetingList2[random];
            document.getElementById('texts').appendChild(p);
        } else if (text.includes('hello') || text.includes('greetings')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * greetingList.length);
            p.innerText = greetingList[random];
            document.getElementById('texts').appendChild(p);
        } else {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * unreadable.length);
            p.innerText = unreadable[random];
            document.getElementById('texts').appendChild(p);
        }


        p = document.createElement('p');
        p.classList.add("sent");
    }

})