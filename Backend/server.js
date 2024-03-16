const express = require('express')
const cors = require('cors')
require('dotenv').config()
const port = process.env.PORT || 3000

const app = express();
app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
    res.send('Hello User, Welcome to RoamIndia : Discover the Soul of India')
})

app.listen(port,()=>{
    console.log(`The server is running at port ${port}`)
})