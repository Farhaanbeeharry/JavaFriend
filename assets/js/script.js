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
        //Questions
        else if (text.includes('is Java OOP') || text.includes('is Java object oriented')) {
            p = document.createElement('p');
            p.innerText = "Yes, Java is an Object Oriented Programming (OOP) language";
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
        } else if (text.includes('what') && text.includes('is') && text.includes('Java')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * javaDefinition.length);
            p.innerText = javaDefinition[random];
            document.getElementById('texts').appendChild(p);
        } else if (text.includes('what is Java') || text.includes('Java description') || text.includes('define Java') || text === "Java") {
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
        else if (text.includes('open NetBeans page') || text.includes('open NetBeans website') || text.includes('more about NetBeans') || text.includes("NetBeans page")) {
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
        //environment setup
        else if (text.includes('help me set up my environment') || text.includes('help me setup my environment') || text.includes('how to setup environment') || text.includes('more on environment setup')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * environmentSetupRedirection.length);
            p.innerText = environmentSetupRedirection[random];
            document.getElementById('texts').appendChild(p);
            window.setTimeout(function() {
                window.open(environmentSetupLink);
            }, 1000);
        } else if (text.includes('environment') || text.includes('brief on environment') || text.includes('setup to use Java')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * environmentSetup.length);
            p.innerText = environmentSetup[random];
            document.getElementById('texts').appendChild(p);
        }
        //Loops
        else if (text.includes('read more on loop') || text.includes('more on loop') || text.includes('open loops page') || text.includes('open loop page') || text.includes('more about loop')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * loopsRedirection.length);
            p.innerText = loopsRedirection[random];
            document.getElementById('texts').appendChild(p);
            window.setTimeout(function() {
                window.open(loopsLink);
            }, 1000);
        } else if (text.includes('what is a loop') || text.includes('what is loop') || text.includes('define loop') || text.includes('definition of loop')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * loopsList.length);
            p.innerText = loopsList[random];
            document.getElementById('texts').appendChild(p);
        }
        //Basic syntaxes
        else if (text.includes('open basic syntax') || text.includes('more on basic syntax') || text.includes('basic syntaxes page') || text.includes('basic syntax page')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * basicSyntaxRedirection.length);
            p.innerText = basicSyntaxRedirection[random];
            document.getElementById('texts').appendChild(p);
            window.setTimeout(function() {
                window.open(basicSyntaxLink);
            }, 1000);
        } else if (text.includes('what is a basic syntax') || text.includes('what are basic syntaxes') || text.includes('basic syntax') || text.includes('definition of basic syntax') || text.includes("define basic syntax")) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * basicSyntax.length);
            p.innerText = basicSyntax[random];
            document.getElementById('texts').appendChild(p);
        }
        //Object and Classes
        else if (text.includes('open object and class') || text.includes('more on object and class') || text.includes('go to object and class') || text.includes('object and classes page') || text.includes('object and class page')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * objectAndClassesRedirection.length);
            p.innerText = objectAndClassesRedirection[random];
            document.getElementById('texts').appendChild(p);
            window.setTimeout(function() {
                window.open(objectAndClassesLink);
            }, 1000);
        } else if (text.includes('what is object and class') || text.includes('what are object and class') || text.includes('object and class') || text.includes('definition of object and class') || text.includes("define object and class")) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * objectAndClasses.length);
            p.innerText = objectAndClasses[random];
            document.getElementById('texts').appendChild(p);
        }
        //Constructors
        else if (text.includes('open constructor') || text.includes('more on constructor') || text.includes('go to constructor') || text.includes('constructor page') || text.includes('constructors page')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * constructorRedirection.length);
            p.innerText = constructorRedirection[random];
            document.getElementById('texts').appendChild(p);
            window.setTimeout(function() {
                window.open(constructorLink);
            }, 1000);
        } else if (text.includes('what is constructor') || text.includes('what are constructors') || text.includes('constructor') || text.includes('definition of constructor') || text.includes("define constructor")) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * constructor.length);
            p.innerText = constructor[random];
            document.getElementById('texts').appendChild(p);
        }
        //Data types
        else if (text.includes('open data type') || text.includes('more on data type') || text.includes('go to data type') || text.includes('data type page') || text.includes('data types page')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * datatypeRedirection.length);
            p.innerText = datatypeRedirection[random];
            document.getElementById('texts').appendChild(p);
            window.setTimeout(function() {
                window.open(datatypeLink);
            }, 1000);
        } else if (text.includes('what is data type') || text.includes('what are data type') || text.includes('data type') || text.includes('definition of data type') || text.includes("define data type")) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * datatype.length);
            p.innerText = datatype[random];
            document.getElementById('texts').appendChild(p);
        }
        //variable types
        else if (text.includes('open variable type') || text.includes('more on variable type') || text.includes('go to variable type') || text.includes('variable type page') || text.includes('variable types page')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * variableTypeRedirection.length);
            p.innerText = variableTypeRedirection[random];
            document.getElementById('texts').appendChild(p);
            window.setTimeout(function() {
                window.open(variableTypeLink);
            }, 1000);
        } else if (text.includes('what is variable type') || text.includes('what are variable type') || text.includes('variable type') || text.includes('definition of variable type') || text.includes("define variable type")) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * variableType.length);
            p.innerText = variableType[random];
            document.getElementById('texts').appendChild(p);
        }
        //Modifier types
        else if (text.includes('open modifier type') || text.includes('more on modifier type') || text.includes('go to modifier type') || text.includes('modifier type page') || text.includes('modifier types page')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * modifierTypeRedirection.length);
            p.innerText = modifierTypeRedirection[random];
            document.getElementById('texts').appendChild(p);
            window.setTimeout(function() {
                window.open(modifierTypeLink);
            }, 1000);
        } else if (text.includes('what is modifier type') || text.includes('what are modifier type') || text.includes('modifier type') || text.includes('definition of modifier type') || text.includes("define modifier type")) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * modifierType.length);
            p.innerText = modifierType[random];
            document.getElementById('texts').appendChild(p);
        }
        //Basic Operators
        else if (text.includes('open basic operator') || text.includes('more on basic operator') || text.includes('go to basic operator') || text.includes('basic operator page') || text.includes('basic operators page')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * basicOperatorsRedirection.length);
            p.innerText = basicOperatorsRedirection[random];
            document.getElementById('texts').appendChild(p);
            window.setTimeout(function() {
                window.open(basicOperatorsLink);
            }, 1000);
        } else if (text.includes('what is basic operator') || text.includes('what are basic operator') || text.includes('basic operator') || text.includes('definition of basic operator') || text.includes("define basic operator")) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * basicOperators.length);
            p.innerText = basicOperators[random];
            document.getElementById('texts').appendChild(p);
        }









        //unreadable
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