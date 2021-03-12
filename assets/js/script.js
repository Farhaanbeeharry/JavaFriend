$(document).keypress('.manualInput', function(e) {
    if (e.which == 13) {
        e.preventDefault();
        //button pressed function
    }
});

function speechBtnClicked() {
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

    if (e.results[0].isFinal) {

        var speechBtn = document.getElementById('speechIcon');
        speechBtn.classList = "fas fa-microphone fa-4x";

        //Fun
        if (text.includes("Koi Mil Gaya")) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * koiMilGaya.length);
            p.innerText = koiMilGaya[random];
            document.getElementById('texts').appendChild(p);
        }
        //Greetings with enquiry
        else if (text.includes('how') && text.includes('are') && text.includes('you')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * greetingList2.length);
            p.innerText = greetingList2[random];
            document.getElementById('texts').appendChild(p);
        }
        //Normal greetings
        else if (text.includes('hello') || text.includes('greetings')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * greetingList.length);
            p.innerText = greetingList[random];
            document.getElementById('texts').appendChild(p);
        }
        //Java definition
        else if (text.includes('open Java definition') || text.includes('open what is Java') || text.includes('open Java description')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * openJavaDefinition.length);
            p.innerText = openJavaDefinition[random];
            document.getElementById('texts').appendChild(p);
            window.setTimeout(function() {
                window.open(javaDefinitionLink);
            }, 1000);
        } else if (text.includes('what is Java') || text.includes('Java description') || text.includes('define Java')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * javaDefinition.length);
            p.innerText = javaDefinition[random];
            document.getElementById('texts').appendChild(p);
        }
        //Java advantage
        else if (text.includes('open Java advantage') || text.includes("advantages of Java") || text.includes('open what are the advantages') || text.includes('open Java benefits')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * advantageJavaRedirection.length);
            p.innerText = advantageJavaRedirection[random];
            document.getElementById('texts').appendChild(p);
            window.setTimeout(function() {
                window.open(javaAdvantageLink);
            }, 1000);
        } else if (text.includes('why learn Java') || text.includes('why use Java') || text.includes('advantage of Java') || text.includes('why do we use Java')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * advantageJava.length);
            p.innerText = advantageJava[random];
            document.getElementById('texts').appendChild(p);
        }
        //Netbeans
        else if (text.includes('open NetBeans page') | text.includes('open NetBeans website') || text.includes('more about NetBeans') || text.includes("NetBeans page")) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * netbeansRedirection.length);
            p.innerText = netbeansRedirection[random];
            document.getElementById('texts').appendChild(p);
            window.setTimeout(function() {
                window.open(netbeansLink);
            }, 1000);
        } else if (text.includes('what is NetBeans') || text.includes('definition of NetBeans') || text.includes('about NetBeans')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * netbeans.length);
            p.innerText = netbeans[random];
            document.getElementById('texts').appendChild(p);
        }






        /*
        
        else if (text.includes('for loop') || text.includes('for loops')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * loopList.length);
            p.innerText = loopList[random];
            document.getElementById('texts').appendChild(p);
        }  else if (text.includes('why') && text.includes('use') && text.includes('Java')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * advantageJava.length);
            p.innerText = advantageJava[random];
            document.getElementById('texts').appendChild(p);
        } else if (text.includes('is Java OOP') || text.includes('is Java object oriented')) {
            p = document.createElement('p');
            p.innerText = "Yes, Java is an Object Oriented Programming (OOP) language";
            document.getElementById('texts').appendChild(p);
        } else if (text.includes('hello world') || text.includes('basic tutorial') || text.includes('first tutorial') || text.includes('first program in Java')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * helloWorld.length);
            p.innerText = helloWorld[random];
            document.getElementById('texts').appendChild(p);
        } else if (text.includes('NetBeans')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * netbeans.length);
            p.innerText = netbeans[random];
            document.getElementById('texts').appendChild(p);
        } else if (text.includes('environment') && text.includes('setup')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * environment.length);
            p.innerText = environment[random];
            document.getElementById('texts').appendChild(p);
        } else if (text.includes('basic syntax') || text.includes('syntax') || text.includes('need to know')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * basicSyntax.length);
            p.innerText = basicSyntax[random];
            document.getElementById('texts').appendChild(p);
        } else if (text.includes('object') || text.includes('class') || text.includes('object and class')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * objectAndClasses.length);
            p.innerText = objectAndClasses[random];
            document.getElementById('texts').appendChild(p);
        } else if (text.includes('constructor')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * basicSyntax.length);
            p.innerText = basicSyntax[random];
            document.getElementById('texts').appendChild(p);
        } */
        else {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * unreadable.length);
            p.innerText = unreadable[random];
            document.getElementById('texts').appendChild(p);
        }



        p = document.createElement('p');
        p.classList.add("sent");
    }

})