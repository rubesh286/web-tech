



let now =new Date()

console.log(now);

console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());

console.log(now.getDate());
console.log(now.getMonth());
console.log(now.getFullYear());
console.log(now.getDay());

console.log(now.toLocaleDateString());
console.log(now.toString());

console.log(now.getTime());

let updatetime=()=>{
    let now=new Date();
    let heading=document.getElementById('heading');

    let h=now.getHours()
    let m=now.getMinutes()
    let s=now.getSeconds()


    let periods='AM'
    if(h>12)
    {
        period='PM'
    }

    if(h>12)
    {
        h=h-12
    }

    if(s<10)
    {
        s="0"+s
    }

    if(h<10)
    {
        h='0'+h
    }

    

    heading.innerText=`${h}:${m}:${s}`


}

setInterval(updatetime(),1000)


// !    Math object

console.log(Math.PI);

console.log(Math.sqrt(4));
console.log(Math.pow(2.4));

console.log(Math.floor(4.9));
console.log(math.cell(6.1));

console.log(Math.round(0.5));

console.log(Math.random());

console.log(Math.max(9,8,7));
console.log(math.min(9,8,7));

console.log(Math.floor.(math.random()*1000));

















