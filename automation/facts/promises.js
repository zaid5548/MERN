let fs=require("fs");

let pendingPromise=fs.promises.readFile("./f1.text");

console.log(pendingPromise);


//success callback
pendingPromise.then(function(data){
    console.log(data);
});

//Failed callback
pendingPromise.catch(function(error){
    console.log(error);
})

