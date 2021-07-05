
function myFocusFunction() {
    document.getElementById("fname").style.backgroundColor = "red";
}

// When you leave the input field, a function is triggered which transforms the input text to upper case.
function myBlurFunction() {
    var x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
}

// click event
function myClickFunction() {
    document.getElementById("demo").innerHTML = "I will contact you asap. Thank you :)";
}

// move mouse onto the image
function bigImg(x) {
    x.style.height = "154px";
    x.style.width = "154px";
}

// moved out of the image  
function normalImg(x) {
    x.style.height = "122px";
    x.style.width = "122px";
}

