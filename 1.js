var out =[];
var s = document.getElementById('new');

document.getElementById("ok").onclick=f1;
function f1(){
var q = document.getElementById('index').value;
var p = document.getElementById('element').value;
out[q] =p;
s.innerHTML=out;
}

document.getElementById("pop").onclick=f2;
function f2(){
t = out.pop();
s.innerHTML=out;
}

document.getElementById("shift").onclick=f3;
function f3(){
w = out.shift();
s.innerHTML=out;
}

document.getElementById("push").onclick=f4;
function f4(){
var p = document.getElementById('element').value;
r = out.push(p);
s.innerHTML=out;
}