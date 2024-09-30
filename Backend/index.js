require('dotenv').config();
const express = require("express");
const Connection = require("./src/db");
const userRouter = require("./src/routes/user.router");
const productRouter = require("./src/routes/product.router");
const authMiddleware = require("./src/middleware/auth");
const cors = require("cors");

const app = express();

app.use(cors());

app.use(express.json());

app.use("/user", userRouter);
app.use("/product", productRouter);

const PORT = process.env.port || "3000"

app.listen(PORT, () => {
  Connection();
  console.log(`Server is running at ${PORT}`);
});
