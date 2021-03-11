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

var forLoopList = [
    "Redirecting you to Java For-Loops page...",
    "Opening a new page to teach you For-Loops in Java"
]

var whileLoopsList = [
    "Redirecting you to Java While-Loops page...",
    "Opening a new page to teach you While-Loops in Java"
]

var javaDefinition = [
    "Java is a class-based and an Object Oriented Programming (OOP) language designed to have as few implementation dependencies as possible. "
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
        } else if (text.includes('for loop') || text.includes('for loops')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * forLoopList.length);
            p.innerText = forLoopList[random];
            document.getElementById('texts').appendChild(p);
        } else if (text.includes('while loop') || text.includes('while loops')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * whileLoopsList.length);
            p.innerText = whileLoopsList[random];
            document.getElementById('texts').appendChild(p);
        } else if (text.includes('what is Java') || text.includes('Java definition') || text.includes('Java description') || text.includes('define Java')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * javaDefinition.length);
            p.innerText = javaDefinition[random];
            document.getElementById('texts').appendChild(p);
        } else if (text.includes('is Java OOP') || text.includes('is Java object oriented')) {
            p = document.createElement('p');
            p.innerText = "Yes, Java is an Object Oriented Programming (OOP) language";
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