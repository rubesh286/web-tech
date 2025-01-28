
let arr=[10,'hello',true,30]

console.log(arr);

// ! how to get the length of the array

console.log(arr.length);

// ! array Methods

// ! 1. push()

//  it is used to add element at the end of the array.


arr.push("byee")
console.log(arr);


// ! 2.pop()

let names=['rohit','virat','dhoni','ruthuraj gaikwad']

names.pop()

console.log(names);


// ! 3. unshift

// it is used to add the element the starting of the array.

names.unshift("dhawan")

console.log(names);

// ! 4. SHIFT()

let fruits=['mango','banana','apple']

fruits.shift()
console.log(fruits);



// ! 5.indexof()

let subjects=['html','css','java','sql']

console.log(subjects.indexOf("java"))


// ! 6. INCLUDES

// iT IS USED TO CHECK WHEATHER THE ELEMNET ARE PRESENT OR NOT IN THE ARRAY

console.log(subjects.includes('html'));


// ! 7.concat()

// it is used to combine two or more than two arrays.

let arr1=[10,20]
let arr2=[90,80]


let combinedArr=arr1.concat(arr2)
console.log(combinedArr);


// ! 8.join()

// It is used to convert array to string .

let char=['H','E','L','L','O']

console.log(char.join("-"));


// ! 9. Reverse

// It is used to reverse the array.

console.log(char.reverse());







