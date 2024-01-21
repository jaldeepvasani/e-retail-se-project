const express = require("express");
const router = express.Router();
const { auth } = require("../../middlewares/auth");
const address_controller = require("./../../controllers/addressController");
const address_validation = require("../../middlewares/validation/validateAddress");

// @route   POST api/address?action=add
// @desc    Add a user address
router.post("/", auth, address_validation.validateAdd, address_controller.addAddress);

// @route   PUT api/address?action=edit&address=12313123123
// @desc    Edit a user address
router.put("/", auth, address_validation.validateUpdate, address_controller.editAddress);

// @route   DELETE api/address?action=delete&address=12313123123
// @desc    delete a user address
router.delete("/", auth, address_controller.deleteAddress);

// @route   GET api/address
// @desc    get user addresses
router.get("/", auth, address_controller.getAddresses);

module.exports = router;
