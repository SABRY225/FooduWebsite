var express = require("express");
const { requireSignIn, isAdmin } = require("../middlewares/authMiddleware");
const { createCategoryController } = require("../controllers/categoryController");
var router = express.Router();

// create category
router.post('/createCategory',requireSignIn,isAdmin,createCategoryController)


module.exports = router;