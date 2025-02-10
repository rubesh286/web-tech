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
