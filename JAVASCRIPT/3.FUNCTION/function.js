


// ! Named function


function display() {
    console.log("I am display function");

}

display()


// ! function with parameter


function msg(username) {
    console.log(username);

}

msg("Dhoni")


// ! function with return

function add(a, b) {
    return a + b
}

let sum = add(20, 30)
console.log(sum);


// ! ananymous function

// function that does not have any name

// ? syntax : function() {

// ?                     }

// now we have to store this function in one variable

let adde = function (a, b) {
    console.log("I am function with exprression");
    console.log(a + b);
}

adde(10, 50)


// ! Arrow function

// 

let mul = (a, b) => {
    console.log(a * b);
}

mul(2, 4)


let str = "mom"
let rev = ""

function palindrome() {

    for (let i = str.length; i < 0; i--) {

        rev = rev + str.charAt(i)
    }

    // console.log(rev);
    

    if (str == rev)

        console.log("yes")

    else

        console.log("no");
        



}

palindrome()

// ! nested function


let outer= () =>{

    let a=10

    let inner =() => {

        let b=20
        console.log(a+b);
        
    }

    inner()

}

outer()


// ! Lexical scoping

//  when we are taking nested function, inner function can take propery of outer function but the outer function can't take the property of inner function, it is called lexcial function


// ! Higher order function

// any function that takes another function as a parameters that is called higher order function

// the function we are sending as parameter to the higher order function


let bye =()=>{
    console.log("bye...");
    
}

let hello =(msg)=>{

    msg()
}

hello(()=>{
    console.log('hi how are you');
    
})

hello(bye)

let play=()=>{
    console.log('likes to play cricket');
    
}

let hof=(myname,age,like)=>{
    console.log(myname)
    console.log(age);
    like()
    
}

hof('san',10, ()=>{
    console.log('likes to watch the movie');
    
})

hof ('vk',20,play);


// ! IIFE

// Immediate Invoke Function Expression


(function()
{
    console.log('Iam fine');
    
})()


























