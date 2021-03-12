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
    var objDiv = document.getElementById("scrollableBox");
    objDiv.scrollTop = objDiv.scrollHeight;

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
        //Decision making
        else if (text.includes('open decision making') || text.includes('more on decision making') || text.includes('go to decision making') || text.includes('decision making page')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * decisionMakingRedirection.length);
            p.innerText = decisionMakingRedirection[random];
            document.getElementById('texts').appendChild(p);
            window.setTimeout(function() {
                window.open(decisionMakingLink);
            }, 1000);
        } else if (text.includes('what is decision making') || text.includes('what are decision making') || text.includes('decision making') || text.includes('definition of decision making') || text.includes("define decision making")) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * decisionMaking.length);
            p.innerText = decisionMaking[random];
            document.getElementById('texts').appendChild(p);
        }
        //Numbers
        else if (text.includes('open number') || text.includes('more on number') || text.includes('go to number') || text.includes('number page') || text.includes('numbers page')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * numbersRedirection.length);
            p.innerText = numbersRedirection[random];
            document.getElementById('texts').appendChild(p);
            window.setTimeout(function() {
                window.open(numbersLink);
            }, 1000);
        } else if (text.includes('what is number') || text.includes('what are number') || text.includes('number') || text.includes('definition of number') || text.includes("define number")) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * numbers.length);
            p.innerText = numbers[random];
            document.getElementById('texts').appendChild(p);
        }
        //Characters
        else if (text.includes('open character') || text.includes('more on character') || text.includes('go to character') || text.includes('character page') || text.includes('characters page')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * charactersRedirection.length);
            p.innerText = charactersRedirection[random];
            document.getElementById('texts').appendChild(p);
            window.setTimeout(function() {
                window.open(charactersLink);
            }, 1000);
        } else if (text.includes('what is character') || text.includes('what are character') || text.includes('character') || text.includes('definition of character') || text.includes("define character")) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * characters.length);
            p.innerText = characters[random];
            document.getElementById('texts').appendChild(p);
        }
        //String
        else if (text.includes('open string') || text.includes('more on string') || text.includes('go to string') || text.includes('string page') || text.includes('string page')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * stringRedirection.length);
            p.innerText = stringRedirection[random];
            document.getElementById('texts').appendChild(p);
            window.setTimeout(function() {
                window.open(stringLink);
            }, 1000);
        } else if (text.includes('what is string') || text.includes('what are string') || text.includes('string') || text.includes('definition of string') || text.includes("define string")) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * string.length);
            p.innerText = string[random];
            document.getElementById('texts').appendChild(p);
        }
        //Arrays
        else if (text.includes('open array') || text.includes('more on array') || text.includes('go to array') || text.includes('array page') || text.includes('array page')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * arraysRedirection.length);
            p.innerText = arraysRedirection[random];
            document.getElementById('texts').appendChild(p);
            window.setTimeout(function() {
                window.open(arraysLink);
            }, 1000);
        } else if (text.includes('what is array') || text.includes('what are array') || text.includes('array') || text.includes('definition of array') || text.includes("define array")) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * array.length);
            p.innerText = array[random];
            document.getElementById('texts').appendChild(p);
        }
        //Date and Time
        else if (text.includes('open date and time') || text.includes('more on date and time') || text.includes('go to date and time') || text.includes('date and time page') || text.includes('date and time page') || text.includes('go to date') || text.includes('go to time')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * dateAndTimeRedirection.length);
            p.innerText = dateAndTimeRedirection[random];
            document.getElementById('texts').appendChild(p);
            window.setTimeout(function() {
                window.open(dateAndTimeLink);
            }, 1000);
        } else if (text.includes('what is date and time') || text.includes('what are date and time') || text.includes('date and time') || text.includes('definition of date and time') || text.includes("define date and time") || text.includes('date') || text.includes('time')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * dateAndTime.length);
            p.innerText = dateAndTime[random];
            document.getElementById('texts').appendChild(p);
        }
        //Regular expressions
        else if (text.includes('open regular expression') || text.includes('more on regular expression') || text.includes('go to regular expression') || text.includes('regular expression page') || text.includes('regular expressions page')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * regexRedirection.length);
            p.innerText = regexRedirection[random];
            document.getElementById('texts').appendChild(p);
            window.setTimeout(function() {
                window.open(regexLink);
            }, 1000);
        } else if (text.includes('what is regular expression') || text.includes('what are regular expression') || text.includes('regular expression') || text.includes('definition of regular expression') || text.includes("define regular expression")) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * regex.length);
            p.innerText = regex[random];
            document.getElementById('texts').appendChild(p);
        }
        //Methods
        else if (text.includes('open method') || text.includes('more on method') || text.includes('go to method') || text.includes('method page') || text.includes('method page')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * methodsRedirection.length);
            p.innerText = methodsRedirection[random];
            document.getElementById('texts').appendChild(p);
            window.setTimeout(function() {
                window.open(methodsLink);
            }, 1000);
        } else if (text.includes('what is method') || text.includes('what are method') || text.includes('method') || text.includes('definition of method') || text.includes("define method")) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * methods.length);
            p.innerText = methods[random];
            document.getElementById('texts').appendChild(p);
        }
        //Files, input and output
        else if (text.includes('open files and input and output') || text.includes('more on files and input and output') || text.includes('go to files and input and output') || text.includes('files and input and output page') || text.includes('files and input and output page')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * fileIORedirection.length);
            p.innerText = fileIORedirection[random];
            document.getElementById('texts').appendChild(p);
            window.setTimeout(function() {
                window.open(fileIOLink);
            }, 1000);
        } else if (text.includes('what is files and input and output') || text.includes('what are files and input and output') || text.includes('files and input and output') || text.includes('definition of files and input and output') || text.includes("define files and input and output")) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * fileIO.length);
            p.innerText = fileIO[random];
            document.getElementById('texts').appendChild(p);
        } else if (text.includes('open files') || text.includes('more on files') || text.includes('go to files') || text.includes('files page') || text.includes('files page')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * fileIORedirection.length);
            p.innerText = fileIORedirection[random];
            document.getElementById('texts').appendChild(p);
            window.setTimeout(function() {
                window.open(fileIOLink);
            }, 1000);
        } else if (text.includes('what is files') || text.includes('what are files') || text.includes('files') || text.includes('definition of files') || text.includes("define files")) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * fileIO.length);
            p.innerText = fileIO[random];
            document.getElementById('texts').appendChild(p);
        } else if (text.includes('open input and output') || text.includes('more on input and output') || text.includes('go to input and output') || text.includes('input and output page') || text.includes('inputs and outputs page')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * fileIORedirection.length);
            p.innerText = fileIORedirection[random];
            document.getElementById('texts').appendChild(p);
            window.setTimeout(function() {
                window.open(fileIOLink);
            }, 1000);
        } else if (text.includes('what is input and output') || text.includes('what are input and output') || text.includes('input and output') || text.includes('definition of input and output') || text.includes("define input and output")) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * fileIO.length);
            p.innerText = fileIO[random];
            document.getElementById('texts').appendChild(p);
        } else if (text.includes('open input') || text.includes('more on input') || text.includes('go to input') || text.includes('input page') || text.includes('inputs page')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * fileIORedirection.length);
            p.innerText = fileIORedirection[random];
            document.getElementById('texts').appendChild(p);
            window.setTimeout(function() {
                window.open(fileIOLink);
            }, 1000);
        } else if (text.includes('what is input') || text.includes('what are input') || text.includes('input') || text.includes('definition of input') || text.includes("define input")) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * fileIO.length);
            p.innerText = fileIO[random];
            document.getElementById('texts').appendChild(p);
        } else if (text.includes('open output') || text.includes('more on output') || text.includes('go to output') || text.includes('output page') || text.includes('output page')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * fileIORedirection.length);
            p.innerText = fileIORedirection[random];
            document.getElementById('texts').appendChild(p);
            window.setTimeout(function() {
                window.open(fileIOLink);
            }, 1000);
        } else if (text.includes('what is output') || text.includes('what are output') || text.includes('output') || text.includes('definition of output') || text.includes("define output")) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * fileIO.length);
            p.innerText = fileIO[random];
            document.getElementById('texts').appendChild(p);
        }
        //Exceptions
        else if (text.includes('when does exception occur') || text.includes('how does exception occur') || text.includes('when exception occur') || text.includes('how exception occur')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * exceptionReason.length);
            p.innerText = exceptionReason[random];
            document.getElementById('texts').appendChild(p);
        } else if (text.includes('open exception') || text.includes('more on exception') || text.includes('go to exception') || text.includes('exception page') || text.includes('exception page')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * exceptionRedirection.length);
            p.innerText = exceptionRedirection[random];
            document.getElementById('texts').appendChild(p);
            window.setTimeout(function() {
                window.open(exceptionLink);
            }, 1000);
        } else if (text.includes('what is exception') || text.includes('what are exception') || text.includes('exception') || text.includes('definition of exception') || text.includes("define exception")) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * exception.length);
            p.innerText = exception[random];
            document.getElementById('texts').appendChild(p);
        }
        //Inner classes
        else if (text.includes('open inner class') || text.includes('more on inner class') || text.includes('go to inner class') || text.includes('inner class page') || text.includes('inner class page')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * innerClassRedirection.length);
            p.innerText = innerClassRedirection[random];
            document.getElementById('texts').appendChild(p);
            window.setTimeout(function() {
                window.open(innerClassLink);
            }, 1000);
        } else if (text.includes('what is inner class') || text.includes('what are inner class') || text.includes('inner class') || text.includes('definition of inner class') || text.includes("define inner class")) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * innerClasslength);
            p.innerText = innerClass[random];
            document.getElementById('texts').appendChild(p);
        } else if (text.includes('open nested class') || text.includes('more on nested class') || text.includes('go to nested class') || text.includes('nested class page') || text.includes('nested class page')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * innerClassRedirection.length);
            p.innerText = innerClassRedirection[random];
            document.getElementById('texts').appendChild(p);
            window.setTimeout(function() {
                window.open(innerClassLink);
            }, 1000);
        } else if (text.includes('what is nested class') || text.includes('what are nested class') || text.includes('nested class') || text.includes('definition of nested class') || text.includes("define nested class")) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * innerClasslength);
            p.innerText = innerClass[random];
            document.getElementById('texts').appendChild(p);
        }
        //Hello world
        else if (text.includes('open hello world') || text.includes('more on hello world') || text.includes('go to hello world') || text.includes('hello world page') || text.includes('hello world page') || text.includes('teach me hello world')) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * helloWorldRedirection.length);
            p.innerText = helloWorldRedirection[random];
            document.getElementById('texts').appendChild(p);
            window.setTimeout(function() {
                window.open(helloWorldLink);
            }, 1000);
        } else if (text.includes('what is hello world') || text.includes('what are hello world') || text.includes('hello world') || text.includes('definition of hello world') || text.includes("define hello world")) {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * helloWorld.length);
            p.innerText = helloWorld[random];
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
        //unreadable
        else {
            p = document.createElement('p');
            const random = Math.floor(Math.random() * unreadable.length);
            p.innerText = unreadable[random];
            document.getElementById('texts').appendChild(p);
        }

        var objDiv = document.getElementById("scrollableBox");
        objDiv.scrollTop = objDiv.scrollHeight;

        p = document.createElement('p');
        p.classList.add("sent");
    }

})