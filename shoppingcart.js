 //Data structure holding items store has
 const products = {
    dozenEggs: 7.49,
    milkGallon: 5.99,
    flour: 4.49,
    banana: .49, 
    butter: 3.99
}//Looks through every item in this object(hopefully)
 console.log('test');
for(const item in products){
    const newButton = document.createElement('button');
    const buttonLabel = document.createTextNode(item);
    newButton.appendChild(buttonLabel)
    const bodyElement = document.getElementById("store-items");
    bodyElement.appendChild(newButton);
}
const buttonList = document.getElementsByTagName('button');


for(const btn of buttonList){
    console.log('buttonList')
    console.log(btn)

}