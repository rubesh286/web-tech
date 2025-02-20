
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

// It is used to remove the element at the end of the array

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


// ! 10. splice()

// It will modify the original array.
//  it will tkae 3 parameters (Startindex,count,replacementValue)


let numbers=[10,20,30,40,50,60]
numbers.splice(2,2)
console.log(numbers);  // [10,20,50,60]


let numbers2=[10,20,30,40,50,60]
numbers2.splice(2,2,"how")
console.log(numbers2)  // [10,20,'how',50,60]


let numbers3=[10,20,30,40,50,60]
numbers3.splice(2,0,"hi") 
console.log(numbers3);  // [10,20,'hi',30,40,50,60]



// ! 11.Higher order function

// ! foreach

// It is higher order array method and it is usedto traverse the aaray.
// it has three parameters (element,index,array)
// It can not return anything

let arr3=[10,20,30,40,50,60]

arr3.forEach((element,index,array)=>{
    console.log(element,index,array);
    
})

let elements = arr3.forEach((ele)=>{

    return ele
    
})

console.log(elements);


let output=[]

arr3.forEach((ele)=>{

    if (arr3 > 30)
    {
        output.push(ele)
    }
        
})

console.log(output)


// ! 12.Filter()

// it is higherorder array method
// It can take 3 parametrs
// It will check the condition and it will return the element


let greater=arr3.filter((ele)=>{

    return ele >30
})

console.log(greater)


// input[10,20,30,40,50,60]

// output:[110,120,130,140,150,160]

let add_50=[]

arr3.forEach((ele)=>{

    add_50.push(ele+50)

})

console.log(add_50);


// ! 13.Map()

let add_100 =arr3.map((ele)=>{
    return ele+100
})

console.log(add_100);


// ! 14.reduce()

let add=arr3.reduce((acc,ele)=>{  

    // console.log(acc);
    return acc+ele 

},0)   //when ever we are not giving any value it will take the first element

console.log(add);


// ! 15. sort()

let unsortedarray=[80,1,90,2,84]

let asc=unsortedarray.sort((a,b)=>{
    return a-b
})

console.log(asc);


let desc=unsortedarray.sort((a,b)=>{
    return b-a
})

console.log(desc);











