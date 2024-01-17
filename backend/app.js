const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");
require("dotenv").config();

// middleware
const corsOptions = {
    origin: "https://foodu-nido.onrender.com/" // frontend URI (ReactJS)
}
app.use(express.json());
app.use(cors(corsOptions));

// connect MongoDB
// mongoose.connect(process.env.MONGODB_URI).then(() => {
//     const PORT = process.env.PORT || 8000
//     app.listen(PORT, () => {
//         console.log(`App is Listening on PORT ${PORT}`);
//     })
// }).catch(err => {
//     console.log(err);
// });
app.listen(process.env.PORT,()=>{
    console.log("Server Work...")
})
// route
app.get("/", (req, res) => {
    res.status(201).json({message: "Connected to Backend!"});
});