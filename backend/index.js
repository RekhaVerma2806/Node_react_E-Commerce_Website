const express  = require('express');

const mongoose = require('mongoose');

const app = express();

const connectDB = async () => {
    mongoose.connect("mongodb://localhost:27017/e-commerce");
    const productSchema = new mongoose.Schema({
        name: String,
        price: Number,
        description: String,
        image: String
    });
    const Product = mongoose.model('Product', productSchema);
    const data = await Product.find();
    console.warn(data);
}

connectDB();

app.get("/",(req,resp)=>{
    resp.send("Hello World");

});

app.listen(5000);