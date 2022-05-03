const express = require('express');
const router = express.Router();
const controller = require('../controllers/menuController.js');
const { login } = require("../auth/auth");
const { authenticate } = require("../auth/auth");


router.get("/", controller.landing_page);
router.get("/login", controller.get_login);
router.post("/login", login, controller.post_login);
router.get("/newItem", authenticate, controller.get_newItem);
router.post("/newItem", authenticate, controller.post_newItem);
router.get("/setMenu", authenticate, controller.get_setMenu);
router.post("/setMenu", authenticate, controller.post_setMenu);
router.get("/addUser", authenticate, controller.get_addUser);
router.post("/addUser", authenticate, controller.post_addUser);
router.get("/loggedIn", authenticate, controller.get_loggedInMenu);
router.get("/logout", controller.logout);
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