const express = require("express");
const router = express.Router();
const { auth, shipperAuth } = require("../../middlewares/auth");
const order_controller = require("./../../controllers/orderController");

// @route   GET api/order/orderSuccess
// @desc    Finish the order and move the cart to history
router.get("/orderSuccess", auth, order_controller.orderSuccess);

// @route   GET api/order/userOrdersHistory
// @desc    Get all user's orders
router.get("/userOrdersHistory", auth, order_controller.userOrdersHistory);

// @route   GET api/order/ordersToShip
// @desc    Get all seller's orders to be shipped
router.get("/ordersToShip", auth, order_controller.ordersToShip);

// @route   GET api/order/shippedOrders
// @desc    Get all seller's shipped orders
router.get("/shippedOrders", auth, order_controller.shippedOrders);

// @route   PUT api/order/ordersToShip/markAsShipped
// @desc    Edit seller's order's state to be shipped
router.get("/ordersToShip/markAsShipped", auth, order_controller.markAsShipped);

// @route   GET api/order/ordersToDeliver
// @desc    Get all shipper's orders to deliver
router.get("/ordersToDeliver", auth, shipperAuth, order_controller.ordersToDeliver);

// @route   PUT api/order/ordersToDeliver/markAsDelivered
// @desc    Edit shipper's order's state to be delivered
router.get(
  "/ordersToDeliver/markAsDelivered",
  auth,
  shipperAuth,
  order_controller.markAsDelivered
);

module.exports = router;
