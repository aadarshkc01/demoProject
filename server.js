const app = require("./src/app.js")
require("dotenv").config()

function startServer (){
    const port = process.env.PORT
    app.listen(port, function (){
        console.log(`Server has started at port ${port}`)
    })
}
startServer()