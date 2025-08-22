// axios vs fetch

const axios = require("axios")
// GET is by default in fetch
async function main(){
    const response = await fetch("https://sum-server.100xdevs.com/todos",{
        method: "POST"
    })
    const json = response.json()
    console.log(json.todos.length);
}

async function main() {
    const response = await axios.post("https://sum-server.100xdevs.com/todos")
    //response.data
    console.log(response.data.todos.length);
}

main();