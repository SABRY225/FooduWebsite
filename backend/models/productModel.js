const mongoose = require('mongoose');
const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      unique: true,
    },
    namecategory: {
      type: String,
      required: true,
      unique: true,
    },
    oldprice:{
        type: String,
        required: true,
    },
    newprice:{
      type: String,
      required: true,
    },
    img:{
      type: String,
      required: true,
    },
    imgone:{
      type: String,
      required: true,
    },
    imgtwo:{
      type: String,
      required: true,
    },
    imgthree:{
      type: String,
      required: true,
    },
    imgfour:{
      type: String,
      required: true,
    },
    description:{
      type: String,
      required: true,
    }
}
);

const Product = mongoose.model('Product', productSchema);

module.exports = Product;