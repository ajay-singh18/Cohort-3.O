// function sum(n){
//     let sum = 0
//     for (let i = 0; i <= n; i++) {
//          sum+=i
//     }
//     return sum
// }

// let ans =  sum(5)
// console.log(ans);

// function sum2(a,b){
//     return parseInt(a)+parseInt(b)
// }
// let ans2 = sum2("3",5)
// console.log(ans2);
function cb(err,data){
    if(err){
        console.log("Error while fetching");
    } else{
        console.log(data);
        
    }
    console.log("Done");
    
}
const fs = require('fs') // file system module
const data = fs.readFile('Async/a.txt','utf8',cb)  // asynchronously
console.log(data);
const content = fs.readFileSync('Async/b.txt','utf8')  // synchronously
console.log(content);


