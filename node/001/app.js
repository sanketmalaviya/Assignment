const express = require("express");
const app = express();
const port = 9001;
const mongoose = require("mongoose");
app.use(express.json());
const DB_URL = "mongodb+srv://sanketmalaviya:project@cluster0.prb08rc.mongodb.net/Task_1?retryWrites=true&w=majority";

mongoose.connect(DB_URL).then(() => {
  console.log("DB connected");
});


const userRouter = require("./router/userRouter")
app.use("/",userRouter)
const productRouter = require("./router/productRouter")
app.use("/",productRouter)


app.listen(port, () => {
  console.log("Server Running " + port);
});
