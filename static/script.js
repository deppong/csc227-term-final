var uppercase = document.getElementById("uppercase");
var numbers = document.getElementById("numbers");
var symbols = document.getElementById("symbols");
var passlen = document.getElementById("passlen");
var generate = document.getElementById("generate");

var output = document.getElementById("password");

// charsets
var upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var num = "1234567890";
var sym = "!@#$%^&*+=";


generate.addEventListener("click", function() {
    var charset = "abcdefghijklmnopqrstuvwxyz";
    var length = 10;
    var result = "";

    if (uppercase.checked) { charset += upper; }
    if (numbers.checked) { charset += num; }
    if (symbols.checked) { charset += sym; }

    if (passlen.value) {
        length = passlen.value; 
    } 

    for (var i = 0; i < length; i++) {
        result += charset.charAt(Math.random() * charset.length);
    }

    output.innerText = result;
});