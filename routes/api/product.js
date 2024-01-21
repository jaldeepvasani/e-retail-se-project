const express = require("express");
const router = express.Router();
const product_controller = require("../../controllers/productController");
const product_validation = require("../../middlewares/validation/validateProduct");
const handle_images = require("../../middlewares/handleImageMulter");
const { auth, sellerAuth, adminAuth, sellerAdminAuth } = require("../../middlewares/auth");

// @route   GET /api/product
// @desc    Get all products
router.get("/", product_controller.allProducts);

// @route   GET /api/product/:userId/products
// @desc    Get a specific user products
router.get("/my_products", auth, product_controller.userProducts);

// @route   POST /api/product/create
// @desc    Create a new product
router.post(
  "/create",
  auth,
  sellerAdminAuth,
  handle_images.productImages(),
  product_validation.validateAdd,
  product_controller.createProduct
);

// @route   GET /api/product/:id
// @desc    Get one product details
router.get("/:id", product_controller.productDetails);

// @route   DELETE /api/product/:id/delete
// @desc    Delete one product
router.delete("/:id/delete", auth, sellerAdminAuth, product_controller.deleteProduct);

// @route   POST /api/product/:id/update
// @desc    Update one product
router.post(
  "/:id/update",
  auth,
  sellerAdminAuth,
  handle_images.productImages(),
  product_validation.validateUpdate,
  product_controller.updateProduct
);

module.exports = router;
