//matches select drop downs to the state held in the DB
let vege = document.getElementById("vegeLabel");
let vegeList = document.getElementById("vegetarian");

if (vege.innerHTML == "True") {
    vegeList.value = "True"
} else {
    vegeList.value = "False"
}
vege.style.display = "none"

let vegan = document.getElementById("veganLabel");
let veganList = document.getElementById("vegan");

if (vegan.innerHTML == "True") {
    veganList.value = "True"
} else {
    veganList.value = "False"
}
vegan.style.display = "none"

let type = document.getElementById("itemTypeLabel");
let typeList = document.getElementById("itemType");

if (type.innerHTML == "Lunch") {
    typeList.value = "Lunch"
}
if (type.innerHTML == "Dinner") {
    typeList.value = "Dinner"
} if (type.innerHTML == "Side") {
    typeList.value = "Side"
} if (type.innerHTML == "Dessert") {
    typeList.value = "Dessert"
}
if (type.innerHTML == "Drink") {
    typeList.value = "Drink"
}
type.style.display = "none"

let special = document.getElementById("specialLabel");
let specialList = document.getElementById("special");

if (special.innerHTML == "True") {
    specialList.value = "True"
} else {
    specialList.value = "False"
}
special.style.display = "none"

let available = document.getElementById("availableLabel");
let availableList = document.getElementById("available");

if (available.innerHTML == "True") {
    availableList.value = "True"
} else {
    availableList.value = "False"
}
available.style.display = "none"

