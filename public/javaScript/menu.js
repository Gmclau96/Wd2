//will only showe allergies if they exist in dish
let allergyLabel = document.getElementsByClassName("allergy");

for (let i = 0; i < allergyLabel.length; i++) {
    if(allergyLabel[i].innerHTML == "Allergies/Intolerances: "){
         allergyLabel[i].innerHTML = ""
    }
  }