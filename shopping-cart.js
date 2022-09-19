//  Calculate the total cost of the products in a shopping cart

const shoppingCart = [
    { name: 'Show', price: 1200 },
    { name: 'shirt', price: 2200 },
    { name: 'pant', price: 3200 },
    { name: 'belt', price: 600 },
];
function totalCost(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        const product = products[i]
        sum = sum + product.price;
        console.log(product);
    }
    return sum
}
const totalExpence = totalCost(shoppingCart)
console.log(totalExpence);

//  Calculate the total cost of the products in a shopping cart
// practise :02
const buyInMonth = [
    { Name: 'medicine', price: 2500 },
    { Name: 'table', price: 1250 },
    { Name: 'mobole recharge', price: 109 }
]
function totalCostThisMondth(products) {
    let sum = 0;
    for (let i = 0; i < products.length; i++) {
        let product = products[i];
        sum = sum + product.price;
        console.log(product);
    }
    return sum
}
const totalExpenceInMondth = totalCostThisMondth(buyInMonth);
console.log(totalExpenceInMondth);