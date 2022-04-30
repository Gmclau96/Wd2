const staffDao = require("../models/staffModel.js");
const menuDao = require("../models/menuModel.js")


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

exports.get_newItem = function (req, res) {
    res.render('staff/newItem', {
        title: 'New Item'
    })
}

exports.get_addUser = function (req, res) {
    res.render('staff/addUser', {
        title: 'Add User'
    })
}