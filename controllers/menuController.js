const MenuDAO = require("../models/menuModel.js");
const staffDao = require("../models/staffModel.js");

const db = new MenuDAO();

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

exports.post_newItem = function (req, res) {
    let allergies = req.body.allergies;
    if (allergies == "") {
        allergies = null
    }
    let vegetarian = req.body.vegetarian;
    if (vegetarian == "True") {
        vegetarian = "Vegetarian friendly"
    } else {
        vegetarian = null
    }
    let vegan = req.body.vegan;
    if (vegan == "True") {
        vegan = "Vegan friendly"
    } else {
        vegan = null
    }
    db.addMenuItem(
        req.body.name,
        req.body.description,
        req.body.ingredients,
        allergies,
        vegetarian,
        vegan,
        req.body.itemType,
        req.body.price,
        req.body.special
    );
    db.getSides();
};

exports.get_addUser = function (req, res) {
    res.render('staff/addUser', {
        title: 'Add User'
    })
}