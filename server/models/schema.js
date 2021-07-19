const mongoose = require("mongoose")
const Schema = mongoose.Schema;

const productsSchema = new Schema({

name: {
    type: String,
    trim: true,
},
url:  {
    type: String,
    trim: true,
}, 

description: {
    type: String,
    trim: true,
},
price: {
    type: String,
    trim: true,
},
rating:  {type: {Number, default: 0},
trim: true,
},

maker: {
    name: {
        type: String,
        trim: true,
    },
    cif: {
        type: String,
        trim: true,
    },
    adress: {
        type: String,
        trim: true,
    }
   
}
});
const Products = mongoose.model('products', productsSchema);

module.exports = Products