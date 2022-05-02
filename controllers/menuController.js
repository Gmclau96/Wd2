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

exports.post_login = function (req, res) {
    res.render('staff/newItem', {
        title: 'New Item'
    });
};

exports.get_newItem = function (req, res) {
    res.redirect('staff/newItem', {
        title: 'New Item'
    });
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
};

exports.get_addUser = function (req, res) {
    res.render('staff/addUser', {
        title: 'Add User'
    });
};

exports.post_addUser = function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    staffDao.lookup(username, function (error, match) {
        if (match) {
            res.status(401).send("User already exists");
            return;
        }
        staffDao.create(username, password);
        console.log("New user created ", username, " with the password ", password);
        res.redirect("/login");
    });
};

exports.logout = function (req, res) {
    res.cookie("jwt", "", { maxAge: 1 });
    res.redirect("/");
};