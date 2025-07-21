 //Data structure holding items store has
 const products = {
    eggs: 7.49,
    milk: 5.99,
    flour: 4.49,
    banana: .49, 
    butter: 3.99
}

for(const item in products){
    const newButton = document.createElement('button');
    const buttonLabel = document.createTextNode(item);
    newButton.appendChild(buttonLabel)
    const bodyElement = document.getElementById('store-items');
    bodyElement.appendChild(newButton);
}
const buttonList = document.getElementsByTagName('button');

const total = document.getElementById('cart-total');
let cartId = 1;
let totalPrice = 0;
function addToCart(event) {
    
    const newItem = document.createElement('p')
    const item = event.target.textContent;
    newItem.innerHTML = cartId+'. ' + item;
    const cart = document.getElementById('cart');
    cart.appendChild(newItem);
    cartId++;
    totalPrice += products[item]
    total.innerHTML = totalPrice.toFixed(2)
}
for(const btn of buttonList){
    btn.addEventListener('click', (event)=> 
        addToCart(event))

}