document.addEventListener("DOMContentLoaded", loadDOM)


// DOM elements
function loadDOM() {
var addButton = document.getElementById(addButton);
var subtractButton = document.getElementById(subtractButton);
var input = document.getElementById(input);
var num = document.getElementById(num);
var form1 = document.getElementById(form1);
};

addButton.addEventListener("click", function(e){
    e.preventDefault();
    var number = parseInt(num.textContent);
    var newNumber = parseInt(number) + parseInt(input.value);
    num.textContent = newNumber;
    console.log(newNumber);

    if (parseInt(num.textContent) < 0) {
        num.style.color = "red";
        } else {
            num.style.color = "black";
        }
});

subtractButton.addEventListener("click", function(e){
    e.preventDefault();
    var number = parseInt(num.textContent);
    var newNumber = parseInt(number) - parseInt(input.value);
    num.textContent = newNumber;
    console.log(newNumber);

    if (parseInt(num.textContent) < 0) {
    num.style.color = "red";
    } else {
        num.style.color = "black";
    }

});