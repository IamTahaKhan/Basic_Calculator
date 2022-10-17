
function sum() {
    let a = document.querySelector("#a1").value;
let b = document.querySelector("#a2").value;
a1 = Number(a);
a2 = Number(b);
    let sumu = ("The result is : " + (a1 + a2));
    document.querySelector("#a21").innerHTML = sumu;
}
function sub() {
    let a = document.querySelector("#a1").value;
let b = document.querySelector("#a2").value;
a1 = Number(a);
a2 = Number(b);
    let subu = ("The result is : " + (a - b));
    document.querySelector("#a21").innerHTML = subu;
}
function mul() {
    let a = document.querySelector("#a1").value;
let b = document.querySelector("#a2").value;
a1 = Number(a);
a2 = Number(b);
    let mull = ("The result is : " + (a * b));
    document.querySelector("#a21").innerHTML = mull;
}
function div() {
    let a = document.querySelector("#a1").value;
let b = document.querySelector("#a2").value;
a1 = Number(a);
a2 = Number(b);
    let divv =("The result is : " + (a / b));
    document.querySelector("#a21").innerHTML = divv;
}