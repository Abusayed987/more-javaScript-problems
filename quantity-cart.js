/**
const shoppingCart = [
    { name: 'Show', price: 1200, quantity: 2 },
    { name: 'shirt', price: 2200, quantity: 3 },
    { name: 'pant', price: 3200, quantity: 2 },
    { name: 'belt', price: 600, quantity: 2 },
];
function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i];
        const totalProductCost = product.quantity * product.price;
        sum = sum + totalProductCost;
        console.log(product);
    }
    return sum
}
const totalExpence = totalCost(shoppingCart)
console.log(totalExpence);
 */
// practise :02
const buyInMonth = [
    { Name: 'medicine', price: 250 ,quantity:6},
    { Name: 'table', price: 1250 ,quantity:2},
    { Name: 'mobole recharge', price: 20 ,quantity:12},
]
function totalCostThisMondth(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        const totalShoppingCost = product.price* product.quantity
        sum = sum + totalShoppingCost;
        console.log(product);
    }
    return sum
}
const totalExpenceInMondth = totalCostThisMondth(buyInMonth);
console.log(totalExpenceInMondth);