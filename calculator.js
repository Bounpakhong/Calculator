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
var equato = document.getElementById("equato");
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
point.onclick = () => operator(".");
plus.onclick = () => operator("+");
minus.onclick = () => operator("-");
times.onclick = () => operator("*");
div.onclick = () => operator("/");
//#endregion

//#region buttons' function
function numbers(n) {
    if (eq.value == "0") {
        eq.value = n;
    } else {
        eq.value += n;
    }
    eq.focus();
}
function operator(o) {
    let end = eq.value.length - 1;
    if (o != ".") {
        if (/[+\-*/.]/.test(eq.value[end])) {
            eq.value = eq.value.slice(0, end) + o;
        } else if (eq.value == "" || eq.value == "0") {
            eq.value = "0" + o;
        } else {
            eq.value += o;
        }
    } else {
        if (/[+\-*/.]/.test(eq.value[end])) {
            eq.value = eq.value.slice(0, end) + o;
        } else if(eq.value == "0" || eq.value == "") {
            eq.value = "0.";
        } else {
            eq.value += ".";
        }
    }
}
//#endregion