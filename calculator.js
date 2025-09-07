let Display = document.getElementById('display')

function appendNumber(Number){
    Display.value  = Display.value + Number
}

function appendOperator(Operator){
    Display.value = Display.value + Operator
}

function appendDot(){
    Display.value = Display.value + ".";

}
function displayClear(){
    Display.value = " "

}
function appenddel(){
    Display.value = Display.value.slice(0,-1);
}

function calculate(){
    try{
        Display.value = eval(Display.value);
    } catch{
        Display.value = "Error";
    }
}