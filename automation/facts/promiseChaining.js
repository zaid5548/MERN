let fs=require("fs");

let f1Promise=fs.promises.readFile("./f1.text");

f1Promise.then(function(data){
    console.log("content "+data);
}).then(function(){
    let f2Promise=fs.promises.readFile("./f2.text");
    return f2Promise;
}).then(function(data){
    console.log("content "+data);
}).then(function(){
    let f3Promise=fs.promises.readFile("./f3.text");
    return f3Promise;
}).then(function(data){
    console.log("content "+data);
})