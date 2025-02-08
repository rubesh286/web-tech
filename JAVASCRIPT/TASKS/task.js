

let a=[10,20,30,40,50,60]

console.log(a.length);  

console.log(a);

// push

console.log(typeof a);

a.push(70)

console.log(a);  // [10,20,30,40,50,60,70]

// pop

a.pop()

console.log(a);  //[10,20,30,40,50,60]


console.log(a.pop());  // it will give the deleted element
 

// unshift

let b=[20,30,50,60]

console.log( b.unshift(12));  // it will give the length of the modified array
console.log(b);  //12, 20, 30, 50, 60

// shift

b.shift()

console.log(b);  //[20, 30, 50, 60]


// indexof

console.log(b.indexOf(50));


// Includes

let subjects=['html','css','java','sql']

console.log(subjects.includes('css'));


// concat

let c=[20,'hi']

let d=[30,'bye']


console.log(c.concat(d));


// join

let e=['H','E','L','L','O']

console.log(e.join(" "));


// reverse

console.log(e.reverse());

// splice






