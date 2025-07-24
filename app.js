const express = require("express")
const app = express()
const PORT = 5000

function test() {
    console.log('hello world')
}

const sampleObj = {
    name: "hello",
    test: function() {
        console.log('this is a sample method'); 
    }
}

sampleObj.test(); 


const candy = require("./datas.json");
console.log('candy', candy)

app.get("/", (req, res) => {
    res.json(candy)
} )

app.get("/api/brand", (req, res) => {
    res.json({
    })
})

app.listen(PORT, () => {
    console.log(`http://localhost:${PORT}`)
})
