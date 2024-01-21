const express = require("express");
const router = express.Router();
const { auth, adminAuth } = require("../../middlewares/auth");
const permissions_controller = require("./../../controllers/permissionsController");

// @route   GET api/permissions/allUsers
// @desc    Get all users
router.get("/allUsers", auth, adminAuth, permissions_controller.getAllUsers);

// @route   GET api/permissions/allShippers
// @desc    Get all shippers
router.get("/allShippers", auth, adminAuth, permissions_controller.getAllShippers);

// @route   PUT /api/permissions/addShipper
// @desc    Add permissions to any user to be a shipper
router.put("/addShipper", auth, adminAuth, permissions_controller.addShipper);

// @route   PUT /api/permissions/addShipperInfo
// @desc    Add permissions to any user to be a shipper
router.put("/addShipperInfo", auth, adminAuth, permissions_controller.addShipperInfo);

// @route   PUT /api/permissions/addAdmin
// @desc    Add permissions to any user to be an Admin
router.put("/addAdmin", auth, adminAuth, permissions_controller.addAdmin);

// @route   PUT /api/permissions/restrictUser
// @desc    Restrict user from doing any function
router.put("/restrictUser", auth, adminAuth, permissions_controller.restrictUser);

module.exports = router;
