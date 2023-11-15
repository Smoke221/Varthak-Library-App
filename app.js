const express = require("express");
const { connection } = require("./configs/db");
const { userRouter } = require("./routes/user");

const app = express()
require("dotenv").config()

app.use(express.json())

app.use("/user", userRouter)


const PORT = process.env.PORT || 3000
app.listen(PORT, async () => {
    try {
      await connection
      console.log("Connected to DB");
    } catch (err) {
      console.log(err.message);
    }
    console.log(`Server is running at port ${PORT}`);
  });
