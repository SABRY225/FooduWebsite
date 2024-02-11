const Product =require("../models/productModel")
const createCategoryController = async (req, res) => {
    try {
      const {name,oldprice,newprice,img,description,imgone,imgtwo,imgthree,imgfour} =req.body
      if(!name){
        return res.status(401).send({message:"Name is Required",})
      }
      if(!newprice){
        return res.status(401).send({message:"new price is Required",})
      }
      if(!oldprice){
        return res.status(401).send({message:"old price is Required",})
      }
      if(!img){
        return res.status(401).send({message:"Price is Required",})
      }
      if(!name){
        return res.status(401).send({message:"image Home is Required",})
      }
      if(!imgone){
        return res.status(401).send({message:"image 1 is Required",})
      }
      if(!imgtwo){
        return res.status(401).send({message:"image 2 is Required",})
      }
      if(!imgthree){
        return res.status(401).send({message:"image 3 is Required",})
      }
      if(!imgfour){
        return res.status(401).send({message:"image 4 is Required",})
      }
      if(!description){
        return res.status(401).send({message:"description is Required",})
      }
      const existingProduct = await Product.findOne({name,oldprice,newprice,img,description,imgone,imgtwo,imgthree,imgfour});
    //exisiting Category
    if (existingProduct) {
      return res.status(200).send({
        success: false,
        message: "Category Already  Exisits",
      });
    }
    const product= await new Product({name,name,Price,img,description,imgone,imgtwo,imgthree,imgfour}).save();
    res.status(201).send({
      success: true,
      message: "new Category created",
      product,
    });
    } catch (error) {
      console.log(error);
      res.status(500).send({
        success:false,
        message:"Something went Wrong ",
        error
      })
    }
  };

module.exports = {createCategoryController};