//will only showe allergies if they exist in dish
let allergyLabel = document.getElementsByClassName("allergy");

for (let i = 0; i < allergyLabel.length; i++) {
     if (allergyLabel[i].innerHTML == "Allergies/Intolerances: ") {
          allergyLabel[i].innerHTML = "Allergies/Intolerances: N/A"
     }
}

//converts vegan/vegetarin boolean to readable
let veganLabel = document.getElementsByClassName("vegan");
let vegeLabel = document.getElementsByClassName("vegetarian");

for (let i = 0; i < veganLabel.length; i++) {
     if (veganLabel[i].innerHTML == "True") {
          veganLabel[i].innerHTML = "Vegan Friendly"
     } else {
          veganLabel[i].innerHTML = ""
     }
}

for (let i = 0; i < vegeLabel.length; i++) {
     if (vegeLabel[i].innerHTML == "True") {
          vegeLabel[i].innerHTML = "Vegetarian Friendly"
     } else {
          vegeLabel[i].innerHTML = ""
     }
}