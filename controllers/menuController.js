const MenuDAO = require("../models/menuModel.js");
const staffDao = require("../models/staffModel.js");

const db = new MenuDAO();
db.init();

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
                                            res.render("menu", {
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

exports.get_loggedInMenu = function (req,res){
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
                                        res.render("menu", {
                                            title: "Menu",
                                            lunch: lunch,
                                            dinner: dinner,
                                            sides: sides,
                                            desserts: desserts,
                                            drinks: drinks,
                                            user: "loggedIn"
                                        });
                                    })
                                    .catch((err) => {
                                        console.log("promise rejected", err);
                                    });
                            });
                    });
            });
    });  
}

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
    res.render('staff/newItem', {
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

    if (req.body.itemType == "Lunch") {
        itemId = 1
    }
    if (req.body.itemType == "Dinner") {
        itemId = 2
    }
    if (req.body.itemType == "Side") {
        itemId = 3
    }
    if (req.body.itemType == "Dessert") {
        itemId = 4
    }
    if (req.body.itemType == "Drink") {
        itemId = 5
    }
    db.addMenuItem(
        req.body.name,
        req.body.description,
        req.body.ingredients,
        allergies,
        vegetarian,
        vegan,
        req.body.price,
        req.body.itemType,
        itemId,
        req.body.special,
        req.body.available
    );
    res.redirect('/newItem');
};

exports.get_setMenu = function (req, res) {
    db.getMenu()
        .then((menu) => {
            res.render("staff/setMenu", {
                title: "Set Today's Menu",
                menu: menu,
            });
        })
        .catch((err) => {
            console.log("promise rejected", err);
        });
};

exports.post_setAvailable = function (req, res) {
    db.setAvailable(req.body.dish);
};

exports.post_setUnavailable = function (req, res) {
    db.setUnavailable(req.body.dish);
};

exports.get_editItem = function (req,res){
    
}

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