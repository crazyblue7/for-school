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
if ( window.location.href == 'http://127.0.0.1:5500/docs/index.html#theMe' )
{ window.location.href = 'http://127.0.0.1:5500/docs/index.html' }

/// part management

let currentpart = "title";

function nextpart() {
    if ( currentpart == "title" ) {
    window.location.href = window.location.href + "#theMe";
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