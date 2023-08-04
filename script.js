

function ac() {
    console.log("clearbtnclick");
    document.getElementById("display").value = "";
}
function input_display(val) {
    if(document.getElementById("display").value.length < 9) {
        document.getElementById("display").value += val;
    }
    else {
        alert("You can not enter more than 9 digits.")
    }
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
