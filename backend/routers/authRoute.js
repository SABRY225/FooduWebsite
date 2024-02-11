var express = require("express");
var router = express.Router();

const {
  registerController,
  loginController,
  testController,
  forgetPasswordControllers,
  editeprofileadmin,
  profileadmin,
  showuser
} = require("../controllers/authController.js") ;
const{isAdmin,requireSignIn} = require("../middlewares/authMiddleware.js") ;
//router object

//routing
//REGISTER || METHOD POST
router.post("/register", registerController);

//LOGIN || POST
router.post("/login", loginController);

//test routes
router.post("/test", requireSignIn, isAdmin, testController);

//forget Password
router.post("/forgetpassword",forgetPasswordControllers );


// Admin route auth 
router.post("/userauth", requireSignIn,(req,res)=>{
res.status(200).send({ok:true});
});

// Show profile Admin Edit profile Admin
router.post("/editeprofileadmin", editeprofileadmin);
// Show profile Admin
router.get("/profileadmin", profileadmin);
// Show Users  
router.get("/showuser", showuser);

module.exports = router;