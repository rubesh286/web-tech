


let pen = {
    brand:"camlin",
    price:100,
    color:["red","yellow","green"],
    work: function(){
        console.log("I can write");     
    }

}

//! HOW to access

console.log(pen.price);

pen.work()

console.log(pen.brand.toUpperCase());



// ! How to modify

pen.price=300

console.log(pen);

// ! how to add


pen.type=['gel','ballpoint pen','ink pen']

console.log(pen);

// ! how to delete


delete pen.type

console.log(pen);


// ! Methods

// ! 1.object.keys()

let keys=Object.keys(pen)

console.log(keys);

// console.log(Object.keys(pen));  

// ! Object values () 

//  it will return one array it will store all the values

let values=Object.values(pen)

console.log(values);


// ! object entries

let val=Object.entries(pen)

console.log(val);

// ! obj.frezee           // we cant able to add,delet,modify

// Object.freeze(pen)  

console.log(pen);

// ! obj.isfrozen

// console.log(Object.isFrozen(pen));

// ! sealed                   // we can modify but we cant add,delete

Object.seal(pen)

brand="flair"



// ! is seal

Object.isSealed(pen)

// !  hasownproperty

console.log(pen.hasOwnProperty("price"));


















