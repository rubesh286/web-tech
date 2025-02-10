
// ! fetch

let fetchdata = fetch("https://fakestoreapi.com/products")  // fetch is used to fetch any api data

// console.log(fetchdata);



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








