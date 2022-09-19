// practice biranie packet 
// practice :01
/*
const names = ['abul', 'babul', 'kabul', 'cabul', 'darun', 'kabul', 'mabub', 'dabul', 'abul', 'abul', 'darun', 'kabul', 'darun'];

function dublicateChecker(names) {
    const unique = [];
    for (let i = 0; i < names.length; i++) {
        const name = names[i] // ekjon ekjon kore jabe 
        if (unique.includes(name) === false) {
            unique.push(name);
        }
    }
    return unique;
}
const uniqueName = dublicateChecker(names);
console.log(uniqueName);

// practise :02
const personNames = ['abul', 'babul', 'kabul', 'cabul', 'darun', 'kabul', 'mabub', 'dabul', 'abul', 'abul', 'darun', 'kabul', 'darun'];
function dublicatePersonChecker(personNames) {
    const uniquePerson = [];
    for (let i = 0; i <personNames.length; i++) {
        const personName = personNames[i] // se ekjon ekjon kore per kore dey
        if (uniquePerson.includes(personName)===false) {
            uniquePerson.push(personName)
        }
    }
    return uniquePerson;
}
const realPerson = dublicatePersonChecker(personNames);
console.log(realPerson);

// practise :03
const persons = ['abul', 'babul', 'kabul', 'cabul', 'darun', 'kabul', 'mabub', 'dabul', 'abul', 'abul', 'darun', 'kabul', 'darun'];
function thiefChecker(persons) {
    const notTheif= [];
    for (let i = 0; i < persons.length; i++) {
        const person = persons[i];
        if (notTheif.includes(person)===false) {
            notTheif.push(person);
        }   
    }
    return notTheif
}
const biraniPabe = thiefChecker(persons);
console.log(biraniPabe);
*/
// practise :04
const mangoPeoples = ['abul', 'babul', 'kabul', 'cabul', 'darun', 'kabul', 'mabub', 'dabul', 'abul', 'abul', 'darun', 'kabul', 'darun', 'abul', 'babul', 'kabul', 'cabul', 'darun', 'kabul', 'mabub', 'dabul', 'abul', 'abul', 'darun', 'kabul', 'darun'];
function realPersonChecker(mangoPeoples) {
    const realPeople = [];
    for (let i = 0; i < mangoPeoples.length; i++) {
        const mangoPeople = mangoPeoples[i];
        if (realPeople.includes(mangoPeople) === false) {
            realPeople.push(mangoPeople)
        }
    }
    return realPeople;
}
const realMangoPeoples = realPersonChecker(mangoPeoples);
console.log(realMangoPeoples);
// practise :05