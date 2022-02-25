var mouseEvent="empty";
var lastPostionofx,lastPostionofy;
canvas=document.getElementById('myCanvas');
ctx=canvas.getContext("2d");
color="red";
width=1;

canvas.addEventListener("mousedown",my_mousedown);
function my_mousedown(e){
    color=document.getElementById("color").value;
    width=document.getElementById("width").value;
    mouseEvent="mouseDown";
}
canvas.addEventListener("mousemove",my_mousemove);
function my_mousemove(e){
    currentpostionofmousex=e.clientX-canvas.offsetLeft;
    currentpostionofmousey=e.clientY-canvas.offsetTop;

    if(mouseEvent=="mouseDown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;

        console.log("lastpostionofxandycoordinates=");
        console.log("x="+lastPostionofx+"y="+lastPostionofy);
        ctx.moveTo(lastPostionofx,lastPostionofy);

        console.log("currentpostionofxandycoordinates=");
        console.log("x="+currentpostionofmousex+"y="+ currentpostionofmousey);
        ctx.lineTo(currentpostionofmousex, currentpostionofmousey);
        ctx.stroke();
    }
    lastPostionofx=currentpostionofmousex;
    lastPostionofy=currentpostionofmousey;
}
canvas.addEventListener("mouseup",my_mouseup);
function my_mouseup(e){
    mouseEvent="mouseUp";
}
canvas.addEventListener("mouseleave",my_mouseleave);
function my_mouseleave(e){
    mouseEvent="mouseleave";
}
function clear() { ctx.clear(0, 0, ctx.canvas.width, ctx.canvas.height); }