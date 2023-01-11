// async //promises //Serially

let fs=require("fs");

let f1Promise=fs.promises.readFile("./f1.text");


//Promise hell => chaining
//success callback
f1Promise.then(function(data){
    console.log("content "+data);
    let f2Promise=fs.promises.readFile("./f2.text");
    f2Promise.then(function(data){
        console.log("content "+data);
        let f3Promise=fs.promises.readFile("./f3.text");
        f3Promise.then(function(data){
            console.log("content "+data);
        });
        f3Promise.catch(function(error){
            console.log(error);
        })
    });
    f2Promise.catch(function(error){
        console.log(error);
    })
});

//Failed callback
f1Promise.catch(function(error){
    console.log(error);
})
