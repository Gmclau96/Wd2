const MenuDAO = require("../models/menuModel.js");
const staffDao = require("../models/staffModel.js");

const db = new MenuDAO();
db.init()

exports.landing_page = function (req, res) {
    db.getLunch()
        .then((lunch) => {
            db.getDinner()
                .then((dinner) => {
                    db.getSides()
                        .then((sides) => {
                            db.getDesserts()
                                .then((desserts) => {
                                    db.getDrinks()
                                        .then((drinks) => {
                                            res.render("menuItems", {
                                                title: "Menu",
                                                lunch: lunch,
                                                dinner: dinner,
                                                sides: sides,
                                                desserts: desserts,
                                                drinks: drinks
                                            });
                                        })
                                        .catch((err) => {
                                            console.log("promise rejected", err);
                                        });
                                });
                        });
                });
        });
};

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