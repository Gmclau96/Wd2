const express = require('express');
const router = express.Router();
const controller = require('../controllers/menuController.js');

router.get("/", controller.landing_page);
router.get("/login", controller.get_login)
router.get("/newItem", controller.get_newItem)
router.get("/addUser", controller.get_addUser)
router.use(function(req, res) {
    res.status(404);
    res.type('text/plain');
    res.send('404 Not found.');
});
router.use(function(err, req, res, next) {
    res.status(500);
    res.type('text/plain');
    res.send('500 Internal Server Error.');
});

module.exports = router;