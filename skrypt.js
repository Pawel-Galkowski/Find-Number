var random = Math.floor(Math.random() * 10000 + 1);
var tryNr = 0;

function insertBefore() {
    "use strict";
    var last = document.getElementById("last").value;
    var number = random;
    var shots = [];
    if (last !== '') {
        var lastOne = last;
        shots.push(lastOne);
        var p = document.querySelector("#his");
        var strong = p.firstElementChild;
        var newNode = document.createElement("li");
        if (last > number) {
            newNode.style.color = "red";
            newNode.style.fontWeight = "600";
            newNode.innerText += shots;
            shots.pop();
            p.insertBefore(newNode, strong);
        } else if (last < number) {
            newNode.style.color = "green";
            newNode.style.fontWeight = "600";
            newNode.innerText += shots;
            shots.pop();
            p.insertBefore(newNode, strong);
        } else {
            newNode.style.color = "#ffd700";
            newNode.style.fontWeight = "600";
            newNode.innerText += shots;
            shots.pop();
            p.insertBefore(newNode, strong);
        }
    }
}

function checkNumber() {
    "use strict";
    var last = document.getElementById("last").value;
    if (!last) {
        window.alert("You should write any number");
    } else {
        insertBefore();
        var number = random;
        tryNr += 1;
        document.getElementById("try").value = tryNr;
        if (last > number) {
            window.alert("Your's number is too hight");
        } else if (last < number) {
            window.alert("Your's number is too low");
        } else {
            var msg = window.confirm("You right! The number was: " + number + "\nNumber of tries: " + tryNr);
            if (msg === true) {
                window.location.reload(true);
            } else {
                window.location.href = "https://itgalkowski.pl";
            }
        }
    }
}
