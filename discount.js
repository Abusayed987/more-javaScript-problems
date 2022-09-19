/**
 *1. if ticket numbers is less then 100, per ticket :100 taka
 * 2. if ticket  is more then 100, but less then 200. first 100 tickets  will be 100/ticket rest tickets will be 90 taka per piece 
 * 3. if you more then purchase more then 200  tickets 
 *          first  100 ---->100 tk 
 *          101-200 ---->90 tk
 *          200 + ---->70 tk    

// practice: 01
function ticketPrice(ticketNumber) {
    const first100rate = 100;
    const second100rate = 90;
    const moreThen200rate = 70;
    if (ticketNumber <= 100) {
        const totalCost = ticketNumber * first100rate;
        return totalCost;
    }
    else if (ticketNumber <= 200) {
        const first100price = 100 * first100rate;
        const restTicketQuantity = ticketNumber - 100; // negative number jeno na ase 
        const restTicketPrice = second100rate  * restTicketQuantity;
        const totalCost = first100price + restTicketPrice;
        return totalCost
    }
    else{
        const first100price = 100 * first100rate;
        const second100price = 100* second100rate;
        const restTicketQuantity = ticketNumber -200;
        const restTicketPrice = restTicketQuantity * moreThen200rate;
        const totalCost = first100price + second100price + restTicketPrice
        return totalCost ;
    }
}
const totalPrice = ticketPrice(220);
console.log('total cost: today', totalPrice);

// practice: 02
function ticketPrice(ticketQuantity) {
    const first100rate = 100;
    const second100rate = 90;
    const restRate = 90;
    if (ticketQuantity <= 100) {
        const totalCost = ticketQuantity * first100rate;
        return totalCost;
    }
    else if (ticketQuantity <= 200) {
        const first100price = 100 * first100rate;
        const restTicketQuantity = ticketQuantity - 100// -negative value jeno na ase
        const restTicketPrice = restTicketQuantity * second100rate;
        const totalCost = first100price + restTicketPrice;
        return totalCost;
    }
    else {
        const first100price = 100 * first100rate;
        const second100price = 100 * second100rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = ticketQuantity * restRate;
        const totalCost = first100price + second100price + restTicketPrice;
        return totalCost;
    }
}
const totalPrice = ticketPrice(220);
console.log(totalPrice);
// practice: 03
function ticketPrice(ticketQuantity) {
    const first100rate = 100;
    const second100rate = 90;
    const restRate = 70;
    if (ticketQuantity <= 100) {
        const totalCost = ticketQuantity * 100;
        return totalCost
    }
    else if (ticketQuantity <= 200) {
        const first100price = 100 * first100rate;
        const restTicketQuantity =  100 - ticketQuantity;
        const restTicketPrice = restTicketQuantity * second100rate;
        const totalCost = first100price + restTicketPrice; 
        return totalCost
    }
    else{
        const first100price = 100 * first100rate;
        const second100price = 100 * second100rate;
        const restTicketQuantity = ticketQuantity -200;
        const restTicketPrice = restTicketQuantity * restRate;
        const totalCost = first100price + second100price +restTicketPrice;
        return totalCost
    }
}
const totalPrice = ticketPrice(210)
console.log(totalPrice);

 */
// practice: 04
function ticketPrice(ticketQuantity) {
    const first100rate = 100;
    const second100rate = 90;
    const restRate = 70;
    if (ticketQuantity <= 100) {
        const totalCost = ticketQuantity * first100rate;
        return totalCost;
    } else if (ticketQuantity <= 100) {
        const first100price = 100 * first100rate;
        const restTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTicketQuantity * second100rate;
        const totalCost = first100price + restTicketPrice;
    }
    else{
        const firset100price = 100 * first100rate;
        const second100price = 100 * second100rate;
        const  restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restRate;
        const totalCost =  firset100price + second100price + restTicketPrice;
        return totalCost;
    }
}
const totalPrice = ticketPrice(2215)
console.log( totalPrice);
// practice: 05