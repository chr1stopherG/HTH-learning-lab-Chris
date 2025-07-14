const products = {
    gallonMilk:[6.99, 4], 
    dozenEggs:[10.49, 3],
    banana:[0.49,20],
    pintIceCreamVan:[7.99, 4],
    pintIceCreamStraw:[7.99, 6],
    pintIceCreamChoc:[7.99, 0],
    wholeWheatBread:[4.49, 12],
    whiteBread:[4.99, 3],
    yogurt:[2.49, 3],
    apple:[0.79, 23],
}

let shoppingCart = [['banana', 4] ,['yogurt', 3],['dozenEggs', 3], ['wholeWheatBread',1], ['pintIceCreamStraw',1]];
let total = 0;

for (let i = 0; i< shoppingCart.length; i++){
    let itemTuple = shoppingCart[i];
    let item = itemTuple[0];
    let itemCount = itemTuple[1]; 
    console.log(products[item]);
    let prodPrice = products[item][0];
    let prodCount = products[item][1] ;
    if (prodCount <itemCount){
        itemCount = prodCount 
        console.log('Not enough product in stock')
    }
    products[item][1] = products[item][1] - itemCount;
    if (products[item][1] === 0){
        products[item][1] = 'OUT OF STOCK';
    }
    total = total + prodPrice*itemCount;
    console.log(products[item][1]);

}
console.log(total.toFixed(2));