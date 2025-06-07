const express = require("express")
const bookRoute = require ("./routes/bookRoute")

const app = express()
require("./database/connection")

app.use(express.json())
app.use("/api",bookRoute)

module.exports = app