const staffDao = require("../models/staffModel.js");


exports.landing_page = function (req, res) {
    res.render('menuItems', {
        title: 'Menu'
    })
}

exports.get_login = function (req, res) {
    res.render('staff/login', {
        title: 'Staff Login'
    })
}