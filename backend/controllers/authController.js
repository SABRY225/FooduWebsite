// import userModel from "../models/userModel.js";
// import { comparePassword, hashPassword } from "./../helpers/authHelper.js";
// import JWT from "jsonwebtoken";
const userModel =require("../models/userModel.js")
const { comparePassword, hashPassword }  =require("./../helpers/authHelper.js")
const JWT  =require("jsonwebtoken")
const registerController = async (req, res) => {
  try {
    const role=0
    const { name, email, password, phone, address, questions} = req.body;
    //validations
    if (!name) {
      return res.send({ message: "Name is Required" });
    }
    if (!email) {
      return res.send({ message: "Email is Required" });
    }
    if (!password) {
      return res.send({ message: "Password is Required" });
    }
    if (!phone) {
      return res.send({ message: "Phone no is Required" });
    }
    if (!address) {
      return res.send({ message: "Address is Required" });
    }
    if (!questions) {
      return res.send({ message: "questions is Required" });
    }
    //check user
    const exisitingUser = await userModel.findOne({ email });
    //exisiting user
    if (exisitingUser) {
      return res.status(200).send({
        success: false,
        message: "Already Register please login",
      });
    }
    //register user
    const hashedPassword = await hashPassword(password);
    //save
    const user = await new userModel({
      name,
      email,
      phone,
      address,
      role,
      password: hashedPassword,
      questions
    }).save();

    res.status(201).send({
      success: true,
      message: "User Register Successfully",
      user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Errro in Registeration",
      error,
    });
  }
};

//POST LOGIN
const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    //validation
    if (!email || !password) {
      return res.status(404).send({
        success: false,
        message: "Invalid email or password",
      });
    }
    //check user
    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(404).send({
        success: false,
        message: "Email is not registerd",
      });
    }
    const match = await comparePassword(password, user.password);
    if (!match) {
      return res.status(200).send({
        success: false,
        message: "Invalid Password",
      });
    }
    //token
    const token = await JWT.sign({ _id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "7d",
    });
    res.status(200).send({
      success: true,
      message: "login successfully",
      user: {
        _id: user._id,
        name: user.name,
        email: user.email,
        phone: user.phone,
        adddress: user.address,
      },
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success: false,
      message: "Error in login",
      error,
    });
  }
};

// forgetPasswordControllers
const forgetPasswordControllers =async (req,res)=>{
  try {
    const {email,password,questions}=req.body
    if(!email){
      res.status(400).send({message:"Email is required"})
    }
    if(!questions){
      res.status(400).send({message:"questions is required"})
    }
    if(!password){
      res.status(400).send({message:"new password is required"})
    }
    // Cheack
    const user=await userModel.findOne({email,questions})
    //vaildations
    if(!user){
      res.status(404).send({
        success:false,
        message:"Email Or Password is Wrong ",
      })
    }
    const hashed= await hashPassword(password);
    await userModel.findByIdAndUpdate(user._id,{password:hashed});
    res.status(200).send({
      success:true,
      message:"Password Reset Successfully ",
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success:false,
      message:"Something went Wrong ",
      error
    })
  }

}

//test controller
const testController = (req, res) => {
  try {
    res.send("Protected Routes");
  } catch (error) {
    console.log(error);
    res.send({ error });
  }
};
const editeprofileadmin = async(req,res)=>{
  try {
    const {name,email,phone,address,jobtitle,lname,imgAdmin}=req.body
    if(!email){
      res.status(400).send({message:"Email is required"})
    }
    if(!name){
      res.status(400).send({message:"First Name is required"})
    }
    if(!lname){
      res.status(400).send({message:"Last Name is required"})
    }
    if(!phone){
      res.status(400).send({message:"Phone is required"})
    }
    if(!address){
      res.status(400).send({message:"address is required"})
    }
    if(!jobtitle){
      res.status(400).send({message:"job title is required"})
    }
    if(!imgAdmin){
      res.status(400).send({message:"image Admin is required"})
    }
    // Cheack
    const user=await userModel.findOne({role:1})
    //vaildations
    if(!user){
      res.status(404).send({
        success:false,
        message:"role is Wrong ",
      })
    }
    const fullname=name+lname
    await userModel.findByIdAndUpdate(user._id,{name:fullname,email,phone,address,jobtitle,imgAdmin});
    res.status(200).send({
      success:true,
      message:"Edit Profile Admin Successfully ",
    })
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success:false,
      message:"Something went Wrong ",
      error
    })
  }
}

const profileadmin = async(req,res)=>{
  try {
    const user=await userModel.findOne({role:1})
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success:false,
      message:"Something went Wrong ",
      error
    })
  }
}
const showuser = async(req,res)=>{
  try {
    const user=await userModel.find({role:0})
    res.json(user);
  } catch (error) {
    console.log(error);
    res.status(500).send({
      success:false,
      message:"Something went Wrong ",
      error
    })
  }
}
module.exports = {registerController, loginController,testController,forgetPasswordControllers,editeprofileadmin,profileadmin,showuser};