const mongoose=require('mongoose');

//Products Schema
const ProductSchema=new mongoose.Schema({
   
    name:{
        type: String,
        required: true
    },
    quantity:{
        type: Number,
        required: true
    },
    
});

const Product = mongoose.model('Product', ProductSchema);
module.exports= Product;