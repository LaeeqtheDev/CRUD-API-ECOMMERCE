const express = require('express')
const mongoose = require('mongoose')
const Product = require('./models/product.model')
const app = express()

app.use(express.json())

app.listen(3000, ()=>{
    console.log('server is running on port 3000');
})


app.get('/', (req, res)=> {
    res.send("Hello there from Node API server")

})

app.get('/api/products', async(req,res)=>{
    try {
        const products = await Product.find({});
        res.status(200).json(products)
    } catch (error) {
        res.status(500).json({message: error.message})
    }
})


app.post('/api/products', async(req, res)=>{
  
    try{
        const product =    await Product.create(req.body)
        res.status(200).json(product)
    }   catch(error) {
        res.status(500).json({message: error.message})

    }
})

mongoose.connect("mongodb+srv://admin:admin123@crud-apidb.gsnok8e.mongodb.net/Crud-apidb?retryWrites=true&w=majority&appName=Crud-apidb").then(()=>{
    console.log("connected to the database");
    
})
.catch(()=>{
    console.log("Connection Failed")
})