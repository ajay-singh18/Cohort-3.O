// function sum(a,b){
//     return a+b
// }
// function mutiply(a,b){
//     return a*b
// }
// let ans = sum(5,6)
// console.log(ans);


// external. 

// import chalk from "chalk";
// console.log(chalk);
// console.log(chalk.blue("hello"));
// console.log(chalk.red("hello"));
// console.log(chalk.green("hello"));

// path library
// const path = require("path")
// console.log(__dirname);
// console.log(path.join(__dirname , "index.js", "projects"))

// To count the number of words in a file

console.log(process.argv)
const fs = require("fs")
function main(fileName){
    fs.readFile(fileName, 'utf-8', function(err,data){
        //  if (err) {
        //     console.error("❌ Error reading file:", err.message);
        //     return;
        // }
        let total = 0;
        for(let i =0;i<data.length;i++){
            if(data[i]===' ') {
                total++;
            }
        }
        console.log(total+1);  
    })
}

// main('a.txt')
main(process.argv[2])









