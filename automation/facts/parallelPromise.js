// async //promises //parallely

let fs=require("fs");

let f1Promise=fs.promises.readFile("./f1.text");
let f2Promise=fs.promises.readFile("./f2.text");
let f3Promise=fs.promises.readFile("./f3.text");



//success callback
f1Promise.then(function(data){
    console.log("content "+data);
});

//Failed callback
f1Promise.catch(function(error){
    console.log(error);
})

//success callback
f2Promise.then(function(data){
    console.log("content "+data);
});

//Failed callback
f2Promise.catch(function(error){
    console.log(error);
})

//success callback
f3Promise.then(function(data){
    console.log("content "+data);
});

//Failed callback
f3Promise.catch(function(error){
    console.log(error);
})

