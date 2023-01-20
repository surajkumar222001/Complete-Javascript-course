//prepare chicken curry with function
let glassBowl=function (rawChicken,masala){
    //marinating the chicken
    let marinatedChicken=`MIXING :(${rawChicken} +${masala})`;
    return marinatedChicken;

};
let cookingBowl=function (marinatedChicken,water){
  //cooking Logic
  let cookedChicken=`COOKING (${marinatedChicken} + ${water})`;
  return cookedChicken;
};
let eatingPlate=function (cookedChicken , rice){
  //Eating Logic
  let eating = `EATING : (${cookedChicken} + ${rice})`;
  console.log(eating);
};

let rawChicken='3kg chicken';
let masala='garlic , pepper ,salt';
let marinatedChicken=glassBowl(rawChicken,masala);
let water='1 ltr water';
let cookedChicken=cookingBowl(marinatedChicken,water);
let rice='1kg rice';
eatingPlate(cookedChicken,rice);