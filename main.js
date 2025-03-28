import express from 'express'
import dotenv from 'dotenv'
const app= express()
app.use(express.json())
app.route('/')
    .get((req, res)=> {
        res.send("Hello Worldnktgmkfkhfifgngfknjgdfkfgfdx")
    }) 
const Port=process.env.Port || 8000
app.listen(Port, (req, res) => {
    console.log(`Server run at http://localhost:${Port}`)
})