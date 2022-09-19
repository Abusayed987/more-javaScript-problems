// practice : 01 chepest phone

const phones1 = [
    { name: 'samsung', carema: 19, storge: 16, price: 36000, color: 'silver' },
    { name: 'walton', carema: 12, storge: 32, price: 22000, color: 'balck' },
    { name: 'iPhone', carema: 25, storge: 36, price: 82000, color: 'golden' },
    { name: 'xiomi', carema: 15, storge: 38, price: 26000, color: 'white' },
    { name: 'Oppo', carema: 19, storge: 20, price: 20000, color: 'gray' },
    { name: 'Nokia', carema: 13, storge: 08, price: 21000, color: 'black' },
    { name: 'HTC', carema: 17, storge: 10, price: 27000, color: 'golden' }
]
function cheapestPhone(phones1) {
    let cheapest = phones1[0];
    for (let i = 0; i < phones1.length; i++) {
        const phone = phones1[i];
        if (phone.price < cheapest.price) {
            cheapest = phone;
        }
    }
    return cheapest
}
const mySelection = cheapestPhone(phones1);
console.log('chepest Phone:',mySelection);


// practice : 02 highest Camera
const phones2 = [
    { name: 'samsung', carema: 19, storge: 16, price: 36000, color: 'silver' },
    { name: 'walton', carema: 12, storge: 32, price: 22000, color: 'balck' },
    { name: 'iPhone', carema: 25, storge: 36, price: 82000, color: 'golden' },
    { name: 'xiomi', carema: 15, storge: 38, price: 26000, color: 'white' },
    { name: 'Oppo', carema: 19, storge: 20, price: 20000, color: 'gray' },
    { name: 'Nokia', carema: 13, storge: 08, price: 21000, color: 'black' },
    { name: 'HTC', carema: 17, storge: 10, price: 27000, color: 'golden' }
]
function highestCamera(phones2) {
    let highest = phones2[0];
    for (let i = 0; i < phones2.length; i++) {
        const phone = phones2[i];
        if (highest.carema<phone.carema) {
            highest=phone
        }
    }
    return highest;
}
const myChose = highestCamera(phones2)
console.log('Highest Camera:',myChose);

// practice : 03 Storage
const phones3 = [
    { name: 'samsung', carema: 19, storge: 16, price: 36000, color: 'silver' },
    { name: 'walton', carema: 12, storge: 32, price: 22000, color: 'balck' },
    { name: 'iPhone', carema: 25, storge: 36, price: 82000, color: 'golden' },
    { name: 'xiomi', carema: 15, storge: 38, price: 26000, color: 'white' },
    { name: 'Oppo', carema: 19, storge: 20, price: 20000, color: 'gray' },
    { name: 'Nokia', carema: 13, storge: 08, price: 21000, color: 'black' },
    { name: 'HTC', carema: 17, storge: 10, price: 27000, color: 'golden' }
]
function highestStorge(phones3) {
    let highest1 = phones3[0];
    for (let i = 0; i < phones3.length; i++) {
        const phone = phones3[i];
        if (highest1.storge<phone.storge) {
            highest1 = phone
        }        
    }
    return highest1
}
const myPhone = highestStorge(phones3)
console.log('highest Storage:',myPhone);