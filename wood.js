// practice:01
/***
 * 1.chair --> 3 cft
 * 2.table -->10 cft
 * 3.bed --->50 cft
 * fixed: per iter wood rewuerment
 * vary: quentity
 */
/*
function woodCalculater(chairQuentity, tableQuentity, bedQuentity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;

    const totalChairWood = chairQuentity * perChairWood;
    const totalTableWood = tableQuentity * perTableWood;
    const totalBedWood = bedQuentity* perBedWood;
    const totalWood =  totalChairWood+totalTableWood+totalBedWood;
    return totalWood;
}
const totalWood = woodCalculater(6,4,4);
console.log(totalWood);
*/
// practice :02
// total light Cost
/**
 * fixed: cost
 * dim light >>>  3o tk
 * energy light >>> 100 tk
 * belun bulb >>>2800 tk
 */

function bulbCalculetor(dimLight, enegryLight, belunBulb) {
    const dimLightPrice = 30;
    const enegryLightPrice = 100;
    const belunBulbPrice = 280;

    const dimLightTotal = dimLightPrice * dimLight;
    const enegryLightTotal = enegryLightPrice * enegryLight;
    const belunBulbTotal = belunBulbPrice * belunBulb;


    const totalCost = dimLightTotal+enegryLightTotal+belunBulbTotal;
    return totalCost;
}
const totalCost = bulbCalculetor(4,10,4)
console.log(totalCost);