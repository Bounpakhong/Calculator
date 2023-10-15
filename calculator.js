//#region "var button elements"
var zero = document.getElementById("zero");
var one = document.getElementById("one");
var two = document.getElementById("two");
var three = document.getElementById("three");
var four = document.getElementById("four");
var five = document.getElementById("five");
var six = document.getElementById("six");
var seven = document.getElementById("seven");
var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var plus = document.getElementById("plus");
var minus = document.getElementById("minus");
var times = document.getElementById("times");
var div = document.getElementById("div");
var equal = document.getElementById("equal");
var point = document.getElementById("point");
var bracket = document.getElementById("bracket");
var percent = document.getElementById("percent");
var cls = document.getElementById("cls");
var bs = document.getElementById("bs");
//#endregion

//#region "var display elements"
var eq = document.getElementsByClassName("equation")[0];
var res = document.getElementsByClassName("result")[0];
//#endregion

//#region "button's event"
zero.onclick = () => numbers("0");
one.onclick = () => numbers("1");
two.onclick = () => numbers("2");
three.onclick = () => numbers("3");
four.onclick = () => numbers("4");
five.onclick = () => numbers("5");
six.onclick = () => numbers("6");
seven.onclick = () => numbers("7");
eight.onclick = () => numbers("8");
nine.onclick = () => numbers("9");
point.onclick = () => pointing(".");
plus.onclick = () => operator("+");
minus.onclick = () => operator("-");
times.onclick = () => operator("*");
div.onclick = () => operator("/");
cls.onclick = () => clear();
bs.onclick = () => backspace();
//#endregion

//#region get position of blink cursor
var theBlink = 0;
document.addEventListener("mouseup", function(){
    eq.focus();
    theBlink = eq.selectionEnd;
  });
//#endregion

//#region equation update
function update(val) {
    if (val) {
        return res.innerHTML = eval((val));
    }
    res.innerHTML = (res.innerHTML!="")?eval(eq.value):"0";
}
//#endregion

//#region allow inputting
eq.addEventListener("keypress", function(event) {
    event.preventDefault();
})
document.addEventListener('keyup', function(event) {
    if (/\d/.test(event.key)) {
      numbers(event.key);
    } else if (/\+|\-|\*|\/|\%/.test(event.key)) {
        operator(event.key);
    } else if (/\./.test(event.key)) {
        pointing(event.key);
    }
  });
//#endregion

//#region buttons' function
function numbers(n) {
    if (eq.value == "0") {
        eq.value = n;
    } else {
        eq.value += n;
    }
    eq.focus();
    update();
}
function pointing(d) {
    let eqval = eq.value;
    let eqend = eqval.length - 1;
    let eqlast = eqval[eqend];
    if (eqval != "") {
        if (eqlast != ".") {
            if (/[+\-*/]/.test(eqlast)) {
                eq.value = eqval.slice(0, eqend) + d;
            } else {
            let eqarr = eqval.split(/[+\-*/]/);
                if (!eqarr[eqarr.length - 1].includes(".")) {
                    eq.value += d;
                }
            }    
        }
    } else {
        eq.value = "0."
    }
    eq.focus();
}
function operator(o) {
    let eqval = eq.value;
    let eqend = eqval.length - 1;
    let eqlast = eqval[eqend];
    if (eqval != "") {
        if (/[+\-*/.]/.test(eqlast)) {
            eq.value = eqval.slice(0, eqend) + o;
        } else {
            eq.value += o;
        }
    }
    eq.focus();
}
function clear() {
    eq.value = "";
    res.innerHTML = "";
    eq.focus();
}
function backspace() {
    eq.value = eq.value.slice(0, eq.value.length - 1);
    if (eq.value == "") eq.value = "0";
    if (/[+\-*/]/.test(eq.value[eq.value.length - 1])) {
        return update(eq.value.slice(0, eq.value.length - 1));
    }
    update();
    eq.focus();
}
//#endregion