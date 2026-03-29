// my old code from before, any document.getElementById calls
// are from before adding the old code with the docID func or
// are me wanting to use the real thing and not docID for
// consistency in a function
function docID(abajab) {
    return document.getElementById(abajab);
}

let finishedEle = docID("finished");
let good = docID("goodMorning")
    
let finished = false;
finishedEle.hidden = finished;

/// page load millis since unix epoch i think and sleep func
let pageLoadTime = Date.now();
function sleep(sleepMilliseconds) {
    let millisStartSleep = Date.now();
    while ( Date.now() - millisStartSleep <= sleepMilliseconds ) { }
    return 0;
}

sleep(10);

// reload when updating, is for developing with the Live Server vscode extention
if ( window.location.href != 'http://127.0.0.1:5500/docs/index.html' && finished != true)
{ window.location.href = 'http://127.0.0.1:5500/docs/index.html' }

/// part management

let currentpart = "title";

function nextpart(part) {
    if ( part == 1 ) {
        window.location.href = window.location.href + "#theMe";
        window.location.href = window.location.href.replaceAll("#thedeclarationthing","");
        currentpart == "theMe";
    } else if ( part == 2 ) {
        window.location.href = window.location.href.replaceAll("#theMe","#thedeclarationthing");
    } else if ( part == 0 ) {
        window.location.href = window.location.href.replaceAll("#theMe","#titler");
    } else if ( part == 3 ) {
        window.location.href = window.location.href.replaceAll("#thedeclarationthing","#the-representation-of-me");
    } else if ( part == 4 ) {
        window.location.href = window.location.href.replaceAll("#the-representation-of-me","#thepointsofstrong");
    }
    return 0;
}

/// add password

let portfolioDivElement = document.getElementById("titler");
portfolioDivElement.hidden = true;
function checkpasswd() {
    let textarea = document.getElementById("passwordtextarea");
    let div = document.getElementById("passworddiv");
    let portfolioDivElement = document.getElementById("titler");
    console.log(textarea.value);
    if ( textarea.value == "wowmewo" ) {
        portfolioDivElement.hidden = false;
        div.hidden = true;
    }
}