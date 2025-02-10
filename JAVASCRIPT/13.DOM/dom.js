// DOM - Document Object Model
// BOM - Browser Object Model

// ! 1.How to acess element


// ? document.getelementbyid()

let p1=document.getElementById('p1')

console.log(p1);



let p2=document.getElementById('con1')

console.log(p2);



// ! 2.How to know what is present inside the element


let p3=document.getElementById('con2')

console.log(p3);


//  ! i> Inner text   it will give only the text which is present inside the id

console.log(con2.innerText);

//  ! ii> inner html

console.log(con2.innerHTML);



let p4=document.getElementById('PP2')   // when we want to write normal text at that time we use innertext

p4.innerText='hello'


con2.innerHTML=`<h2> i am from js </h2>
                <p2> hi</p2>`



// ! how to apply css

let head=document.getElementById('heading3')

head.style.color="red"
head.style.backgroundColor="black"




