

function ac() {
    console.log("clearbtnclick");
    document.getElementById("display").value = "";
}
function input_display(val) {
    document.getElementById("display").value += val;
}

function del() {
    let current_value = document.getElementById("display").value;
    let len_value = current_value.length;
    document.getElementById("display").value = current_value.substring(0,len_value-1);
}

function solve() {
    let equation = document.getElementById("display").value;
    document.getElementById("display").value = eval(equation)
}
