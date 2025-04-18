function doc(abajab) {
    return document.getElementById(abajab);
}
let finishedEle = doc("finished");
let good = doc("goodMorning")
let finished = false;
setInterval(() => {
    finishedEle.hidden = finished;
    console.log(good.style.fontSize);
    if(good.style.fontSize < 1){
        1
    }
}, 30);
window.addEventListener("gamepadconnected", (event) => {
    console.log("A gamepad connected:");
    console.log(event.gamepad);
});
 
window.addEventListener("gamepaddisconnected", (event) => {
    console.log("A gamepad disconnected:");
    console.log(event.gamepad);
});
let gamepads = navigator.getGamepads();
console.log(gamepads);