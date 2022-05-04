const { promise } = require("bcrypt/promises");
const nedb = require("nedb");
class MenuDAO {
    constructor() {
        this.db = new nedb({ filename: "./databases/menu.db", autoload: true });
        console.log('Connected to Menu database ');

    }
    //removes items that are not chef specials and turns all dish availabillity off
    init() {
        this.db.update({ available: 'True' }, { $set: { available: 'False' } }, { multi: true }, function (err, num) {
            console.log(num, " dishes set to unavailable");
        });
        this.db.remove({ special: 'False' }, { multi: true }, function (err, num) {
            console.log(num, " non-specials removed");
        });
        return this;
    }
    getMenu() {
        return new Promise((resolve, reject) => {
            this.db.find({}).sort({ dish: 1, name: 1 }).exec(function (err, menu) {
                if (err) {
                    reject(err);
                } else {
                    resolve(menu);
                    // console.log('returning all menu items: ', menu);
                }
            });
        });

    };
    getLunch() {
        return new Promise((resolve, reject) => {
            this.db.find({ $and: [{ "dish.itemType": "Lunch" }, { available: 'True' }] }, function (err, lunch) {
                if (err) {
                    reject(err);
                } else {
                    resolve(lunch);
                }
            });
        });
        ;
    }
    getDinner() {
        return new Promise((resolve, reject) => {
            this.db.find({ $and: [{ "dish.itemType": "Dinner" }, { available: 'True' }] }, function (err, dinner) {
                if (err) {
                    reject(err);
                } else {
                    resolve(dinner);
                }
            });
        });
    };
    getSides() {
        return new Promise((resolve, reject) => {
            this.db.find({ $and: [{ "dish.itemType": "Side" }, { available: 'True' }] }, function (err, sides) {
                if (err) {
                    reject(err);
                } else {
                    resolve(sides);
                }
            });
        });
    };
    getDesserts() {
        return new Promise((resolve, reject) => {
            this.db.find({ $and: [{ "dish.itemType": "Dessert" }, { available: 'True' }] }, function (err, Dessert) {
                if (err) {
                    reject(err);
                } else {
                    resolve(Dessert);
                }
            });
        });
    };
    getDrinks() {
        return new Promise((resolve, reject) => {
            this.db.find({ $and: [{ "dish.itemType": "Drink" }, { available: 'True' }] }, function (err, Drink) {
                if (err) {
                    reject(err);
                } else {
                    resolve(Drink);
                }
            });
        });
    };
    addMenuItem(name, description, ingredients, allergies, vegetarian, vegan, price, itemType, itemId, special, available) {
        var item = {
            name: name,
            description: description,
            ingredients: [ingredients],
            allergyInfo: [{
                allergies: [allergies],
                vegetarian: vegetarian,
                vegan: vegan
            }],
            price: price,
            dish: [{
                itemType: itemType,
                itemId: itemId
            }],
            special: special,
            available: available
        }
        console.log("Menu item created", name);
        this.db.insert(item, function (err, doc) {
            if (err) {
                console.log("Could not add ", name);
            } else {
                console.log(name, " added!")
            }
        });
    };

    updateItem(name, description, ingredients, allergies, vegetarian, vegan, price, itemType, itemId, special, available, _id) {
        this.db.update({ _id: _id }, {
            $set: {
                name: name,
                description: description,
                ingredients: [ingredients],
                allergyInfo: [{
                    allergies: [allergies],
                    vegetarian: vegetarian,
                    vegan: vegan
                }],
                price: price,
                dish: [{
                    itemType: itemType,
                    itemId: itemId
                }],
                special: special,
                available: available,
                _id: _id
            }
        }, { upsert: true }, function (err, doc) {
            if (err) {
                console.log("Could not add ", name);
            } else {
                console.log(name, " Edited!")
            }
        });
    }


    deleteItem(_id, name) {
        this.db.remove({ _id: _id }, {}, function (err, numRemoved) {
            console.log(name, " removed")
          });
    }

    getItembyId(id) {
        return new Promise((resolve, reject) => {
            this.db.find({ _id: id }).exec(function (err, item) {
                if (err) {
                    reject(err);
                } else {
                    resolve(item);
                    console.log('Editing: ', item);
                }
            });
        });
    };

    setAvailable(dish) {
        this.db.update({ name: dish }, { $set: { available: 'True' } }, function (err, num) {
            console.log(dish, " made available");
        });
    };

    setUnavailable(dish) {
        this.db.update({ name: dish }, { $set: { available: 'False' } }, function (err, num) {
            console.log(dish, " made unavailable");
        });
    };
};

module.exports = MenuDAO;