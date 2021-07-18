// JavaScript source code
function input(val) {
    document.getElementById("screen").value += val;
}
function remove() {
    document.getElementById("screen").value = "";/*clear the elements*/
}
function output() {
    var text = document.getElementById("screen").value;
    var result = eval(text);
    document.getElementById('screen').value=result
}