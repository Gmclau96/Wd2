var available = document.getElementsByClassName('available');
var unavailable= document.getElementsByClassName('unavailable');

for (let i = 0; i < available.length; i++) {
    available[i].onclick = function() {
        alert(available[i].value + " was made available")
    }
};

for (let i = 0; i < unavailable.length; i++) {
    unavailable[i].onclick = function() {
        alert(unavailable[i].value + " was made unavailable")
    }
};