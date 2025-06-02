window.addEventListener("load", initClock);
function initClock() {
    var canvas = document.getElementById("analog-clock");
    var ctx = canvas.getContext("2d");
    var radius = canvas.height / 2;
    ctx.translate(radius, radius);
    radius = radius * 0.90;
    setInterval(drawClock, 1000);
    setInterval(displayTime, 500);

    function drawClock() {
        drawFace(ctx, radius);
        drawNumbers(ctx, radius);
        drawTime(ctx, radius);
    }
    function displayTime(){
        document.getElementById('digit-clock').innerHTML = new Date().toLocaleString('en-US', { 
            month: 'short', day: 'numeric', year: '2-digit', 
            hour: '2-digit', minute: '2-digit', hour12: true 
        });        
    }
}
