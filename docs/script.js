// my old code from before, any document.getElementById calls
// are from before adding the old code with the docID func or
// are me wanting to use the real thing and not docID for
// consistency in a function
function docID(abajab) {
    return document.getElementById(abajab);
}

let finishedEle = docID("finished");
let good = docID("goodMorning")

let basePage = "";
    
let finished = true;
finishedEle.hidden = finished;

/// page load millis since unix epoch i think and sleep func
let pageLoadTime = Date.now();
function sleep(sleepMilliseconds) {
    let millisStartSleep = Date.now();
    while ( Date.now() - millisStartSleep <= sleepMilliseconds ) { }
    return;
}

sleep(10);

/// part management

function gotopart(part) {
    if ( part == 1 ) {
        window.location.href = basePage + "#theMe";
    } else if ( part == 2 ) {
        window.location.href = basePage + "#thedeclarationthing";
    } else if ( part == 0 ) {
        window.location.href = basePage + "#titler";
    } else if ( part == 3 ) {
        window.location.href = basePage + "#the-representation-of-me";
    } else if ( part == 4 ) {
        window.location.href = basePage + "#thepointsofstrong";
    } else if ( part == 5 ) {
        window.location.href = basePage + "#credobolotos";
    } else if ( part == 6 ) {
        window.location.href = basePage + "#ZEEND";
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
        basePage = window.location.href;
    }
}
