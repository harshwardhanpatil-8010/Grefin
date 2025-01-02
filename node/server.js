const express = require('express');

require("./config/db")
const UserRouter = require("./api/auth")

const app = express();
app.use(express.json())

const cors = require('cors');
app.use(cors());

app.use("/user", UserRouter)


app.listen(8000, ()=>{
    console.log("SERVER IS CONNECTED ON PORT 8000")
})