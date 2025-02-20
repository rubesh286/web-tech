

let msg = ()=>{
    console.log("hello how are you")
}
let msg2 = ()=>{
    console.log("I am fine")
}


let hello =()=>{
    alert("hello")
}


let hi = ()=>{

    let con1 = document.getElementById("con1")

    con1.style.backgroundColor ="yellow"

}

let bye =()=>{
    let con1 = document.getElementById("con1")

    con1.style.backgroundColor ="pink"
}


let changeColor =()=>{

   document.body.classList.toggle("dark")
}



// !  Event Listener 



let btn = document.getElementById("btn1")


btn.addEventListener("click",()=>{
    alert("I am event listener...")
})
btn.addEventListener("click",()=>{
    alert("I am event listener 2...")
})


let btn2 = document.getElementById("btn2")


btn2.addEventListener("click",(e)=>{


    console.log(e.target.innerText)
    console.log(e.type)

    console.log("btn2 is clicked")
})


// !  keyboard events 

let inp1 = document.getElementById("inp1")


inp1.addEventListener("keydown",()=>{

    console.log("keydown triggered")
})

inp1.addEventListener('keyup',()=>{
    console.log("keyup triggered")
})


let inp2 = document.getElementById("inp2")


inp2.addEventListener("keyup",(e)=>{
   
    console.log(e.target.value)

    let box= document.getElementById("box")


    box.innerText = e.target.value

    // box.innerHTML = `<h1> ${e.target.value}</h1>`
     
})


// !  form events 



// ! change

let select = document.getElementById("select")

select.addEventListener("change",(e)=>{

    document.body.style.backgroundColor = e.target.value;
})


// ! submit 

let form = document.getElementById("form")

form.addEventListener("submit",(e)=>{


    e.preventDefault()

    let userName = document.getElementById("userName").value
   

    let userPass = document.getElementById("userPass").value

    console.log({userName, userPass})

    console.log("submitted..")
})