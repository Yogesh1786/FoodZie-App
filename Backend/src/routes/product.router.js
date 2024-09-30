const express = require("express");

const router = express.Router();
const { authorize, authenticate } = require("../middleware/auth");

const {
  CreateProduct,
  GetAllProducts,
} = require("../controller/product.controller");

router.post("/create", [authenticate, authorize], CreateProduct);
router.get("/all", GetAllProducts);

module.exports = router;
