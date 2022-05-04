// shows alerts when making dishes (un)available
var available = document.getElementsByClassName('available');
var unavailable = document.getElementsByClassName('unavailable');

for (let i = 0; i < available.length; i++) {
    available[i].onclick = function () {
        alert(available[i].value + " is now on the Menu")
    }
};

for (let i = 0; i < unavailable.length; i++) {
    unavailable[i].onclick = function () {
        alert(unavailable[i].value + " is no longer on the Menu")
    }
};

//finds dish
function myFunction() {
    let input = document.getElementById('find').value
    input = input.toLowerCase();
    let x = document.getElementsByClassName('dish');
    let y = document.getElementsByClassName('items');

    for (i = 0; i < y.length; i++) {
        for (i = 0; i < x.length; i++) {

            if (!x[i].value.toLowerCase().includes(input)) {
                x[i].hidden = true;
                y[i].hidden = true;
            }
            else {
                x[i].hidden = false;
                y[i].hidden = false;
            }
        }
    }
}