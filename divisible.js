/*
1.show output from: 1-50
2.if the number is divisible by 3 then insread of the number show 'foo'
2.if the number is divisible by 3 then insread of the number show 'bar'
2.if the number is divisible by 3 and 5 then insread of the number show 'foobar'
*/
// practise :01
/**
 
 

for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
    console.log('foobar');
    }
    else if(i % 3 === 0) {
        console.log('foo');
    }
    else if (i % 5 === 0) {
        console.log('bar');
     }
    else {
        console.log(i);
    }
}

*/
// practise :02
/**

 
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('foobar');
    }
    else if (i % 3 === 0) {
        console.log('foo');
    }
    else if (i % 5 === 0) {
        console.log('bar');
    }
    else {

        console.log(i);
    }

}
*/
for (let i = 1; i <= 50; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log(i,'foobar');
    } 
    else if(i % 3 === 0){
        console.log(i,'foo');
    }
    else if(i % 5 === 0){
        console.log(i, 'bar');
    }
    else{
        console.log(i);
    }
}
// practise :03