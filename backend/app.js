const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();
const authRoutes = require("./routers/authRoute");
const categoryRouter = require("./routers/categoryRoute");
// middleware
app.use(express.json());
app.use(cors());

//routes
app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRouter);

// connect MongoDB
mongoose.connect(process.env.MONGODB_URI).then(() => {
    const PORT = process.env.PORT || 8000
    app.listen(PORT, () => {
        console.log(`App is Listening on PORT ${PORT}`);
    })
}).catch(err => {
    console.log(err);
});
// app.listen(process.env.PORT,()=>{
//     console.log("Server Work...")
// })
// route
app.get("/", (req, res) => {
    res.status(201).json({message: "Connected to Backend!"});
});