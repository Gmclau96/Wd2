const express = require('express');
const router = express.Router();
const controller = require('../controllers/menuController.js');
const { login } = require("../auth/auth");
const { authenticate } = require("../auth/auth");

//landing page routes
router.get("/", controller.landing_page);

//login routes
router.get("/login", controller.get_login);
router.post("/login", login, controller.post_login);

//new item routes
router.get("/newItem", authenticate, controller.get_newItem);
router.post("/newItem", authenticate, controller.post_newItem);

//set menu routes
router.get("/setMenu", authenticate, controller.get_setMenu);
router.post("/available", authenticate, controller.post_setAvailable);
router.post("/unavailable", authenticate, controller.post_setUnavailable);

//update item routes
router.get("/edit/:_id", authenticate, controller.get_editItem);
router.post("/updateItem", authenticate, controller.post_editItem);
router.post("/deleteItem", authenticate, controller.post_deleteItem);

//add user routes
router.get("/addUser", authenticate, controller.get_addUser);
router.post("/addUser", authenticate, controller.post_addUser);

//loggedin & out routes
router.get("/loggedIn", authenticate, controller.get_loggedInMenu);
router.get("/logout", controller.logout);

//404 & 500 routes
router.use(function (req, res) {
    res.status(404);
    res.type('text/plain');
    res.send('404 Not found.');
});
router.use(function (err, req, res, next) {
    res.status(500);
    res.type('text/plain');
    res.send('500 Internal Server Error.');
});

module.exports = router;