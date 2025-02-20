/* ! output methods  */

console.log("I am  external js file")

document.write("hello")

 /* alert("hello") */


 /* !   how to decleare variable */


 /* var , let , const */

var a = 10
console.log(a)

let b = 20
console.log(b)


const c = 30
console.log(c)

/* ! in var keyword re-declaration is possible */

var a = 100
console.log(a)

 /* ? in let keyword re-declaration is not possible */

 /* let b=200 */
 /* console.log(b) */

 /* ! notes: for const we have to do the variable declaration and intialization in the same line */

 /* const myname */

let myname

myname = "rohit"
console.log(myname)




 /* ! data types */


//   ! 1.primitive datatype 

//  number , boolean , string , undefiend , null , bigint 

// ! Non-Primitve datatype 

 /* array , object , function */

//  ! Number 

let num1 = 20

 /* ! typeof operator is used to know the datatypes */

console.log(typeof num1)


let num2 = 20.8

console.log(typeof num2)

 /* ! boolean */


let IsPlayer = true

console.log(typeof IsPlayer)


 /* ! String */

let str1 = 'hello'
let str2 = 'hello'
let str3 = `hello`

console.log(typeof str1)
console.log(typeof str2)
console.log(typeof str3)


  /* ! Undefiend */

 /* when variable is not declared but not intialized then its know as undefiend */

let empname

console.log(empname)



 /* ! null */


let sal=null

console.log(sal)

console.log(typeof sal)   // object


 /* ! bigint */

let bigNumber=2n

console.log(bigNumber)
console.log(typeof bigNumber)



 /* ! NOn-primitive Data */

  /* Array */

 /* array will store both homogenous and hetrogenous type */



let arr=[10,'hello',true,null,undefined,[20,30]]


 /* ! object */


let student ={

    sname:"rahul",
    sid:100,
    IsPlayer:false,
    Skills:['java','html'],
    add : {
        city:'chennai',
        pin:123456
    }

}

console.log(student)



  /* ! function */


function display ()
{
    console.log('i am display console')
}


display()