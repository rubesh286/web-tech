

let str = 'hello'
let str2 = "HELLO"
let str3 = `hello`

console.log(typeof str2)


// ! how to know the length of the string

console.log(str.length)


// ! String methods

// ! 1.touppercase()

// It is used to convert any string into uppercase and it will return one new string

let upper = str.toUpperCase()
console.log(upper)
console.log(str);   // it will not convert the original string we need to store the string

// ! 2.lowercas()

// it is used to convert any string into lowercase and it will return one new string

let lower = str2.toLocaleLowerCase()
console.log(lower)
console.log(str2)

// ! 3.indexof()

// it is used to return the index of the specific character.

// it will take the first ocuurance of the character

console.log(str.indexOf('l'));


// ! 4. charat()

// it is used to know the character of the specific index.

console.log(str.charAt(2));


//  ! 5.Includes()

let str4='Hello how are you'

console.log(str.includes('lo')) //true
console.log(str.includes('a')); // false

console.log(str4.includes('how '));  // true


// !  6.trim
// it is used to remove the white-spaces from both sides of the string.

let str5="  hi   "


console.log(str5.length);
// console.log(str5);

console.log(str5.trim());  


// ! 7.split()

// it will convert any string into array:

let str6="hello how are you"

console.log(str6.split(" "));
console.log(str6.split(""));


// ! 8.Slice
// It is used to extract the string from another string.
// here it will take two parameters (startindex,endindex)
// it will not include the endIndex value. ***

console.log(str6.slice(0,4));     // hell
console.log(str6.slice(4));       // o how are you
console.log(str6.slice(-3));      // you
console.log(str6.slice(-3,-1));   //  yo

console.log(str.slice(-1,-3));   // we can't give right to left value it will not give any output


// ! 9.substring()

// it is used to extract the string from another string
// here it will take two parameters (startindex,endindex)
// it will not include the endindex value. ***


console.log(str6.substring(0,4));
console.log(str6.substring(4));
console.log(str6.substring(-3));


console.log(str6.substring(4,1));  // it will replace the string (4,1) to (1,4)


// ! 10.lastindexof()

// it will give the last occurance's index of the specific character.


let str7="hello how are you"

console.log(str7.lastIndexOf("o"));

// ! 11.concat()

//  it  is used  to combine the string

let combine=str.concat(" ",str2," how are you")

console.log(combine);




























