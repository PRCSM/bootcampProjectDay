import express from 'express'
import mongoose from 'mongoose'
import dns from 'dns'
dns.setServers(['1.1.1.1'])
const app = express()
async function  connectDb(){
   try {
     const connect =await  mongoose.connect("mongodb+srv://128003014_db_user:WGHncNMZ8InkK7Kr@cluster0.nufjulr.mongodb.net/backendProject")
     console.log(connect)
   } catch (error) {
    console.log("mongodb connection error",error)
   }
}
    
connectDb()

const testSchema = new mongoose.Schema({
    name : String
})
const testModel = mongoose.model("testMode",testSchema)

const itemSchema = new mongoose.Schema({
    itemName : String,
    price : Number,
    quantity:Number,
    Name : String
})
const itemModel = mongoose.model("itemModel",itemSchema)

app.use(express.json())


app.get('/items',async (req,res)=>{
    const items =   await itemModel.find()
    res.json(items)
})
app.post('/items',async (req,res)=>{
    const {itemName,price,quantity,name} = req.body
    const newItem = await itemModel.create({
        name,itemName,price,quantity
    })

    res.json(newItem)
})
app.listen(5000,()=>{
    console.log("server is working fine ggg")
})