
// ! fetch

let fetchdata = fetch("https://fakestoreapi.com/products")  // fetch is used to fetch any api data

// console.log(fetchdata);

/*

fetchdata
    .then((data) => {

        // console.log(data);

        let jsondata = data.json()     // converting into json
        // console.log(jsondata);

        jsondata
            .then((final) => {

                console.log(final);

                final.map((ele)=>{
                    console.log(ele.title);
                    
                })

            })

            .catch((err) => {

                console.log(err);

            })


    })

    .catch((err) => {
        console.log(err); final
    })
*/


let getData=async ()=>{    // ! we should use (await) only inside the asynrocnized function only.

    try{

        let fetchdata=await fetch("https://fakestoreapi.com/products")    // await is the implict conversion of the (.then) and (.catch) block

        let data=await fetchdata.json()

        console.log(data);
        
    }

    catch(err)
    {
        console.log(err);
        
    }

}

getData()





