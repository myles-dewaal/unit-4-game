var won = 0;
var lost = 0;
var randomNuber;
var targetNumber = [45];
var counter = 0;
var crystal1;
var crystal2;
var crystal3;
var crystal4;


$("#number").text(targetNumber);
var imageCrystal = $(".crystal");
//for loop
    for (var i = 0; i < numberOptions.length; i++) {
        imageCrystal.attr("data-crystalvalue", numberOptions[i]);

    }
$(".crystal").on("click", function () {


    var crystalValue = ($(this).attr("data-crystalvalue"));
    crystalValue = parseInt(crystalValue);
    counter += crystalValue;

    $("#score").text(counter);

    if (counter == targetNumber) {
        alert("You win!");
    }

    else if (counter > targetNumber) {
        alert("You lose!!");
    }

});
    function ranNumber() {
        crystal1 = Math.floor(Math.random() * 9 ) + 1;
        crystal2 = Math.floor(Math.random() * 9 ) + 1;
        crystal3 = Math.floor(Math.random() * 9 ) + 1;
        crystal4 = Math.floor(Math.random() * 9 ) + 1;
        randomNuber = Math.floor(Math.random() * ((120-19)+) ) 
    }
    