const { promise } = require("bcrypt/promises");
const nedb = require("nedb");
class MenuDAO {
    constructor() {
        this.db = new nedb({ filename: "./databases/menu.db", autoload: true });
        console.log('Connected to Menu database ');

    }
    //sets all dishes to unavailable on app launch (start of day)

    init() {
        this.db.update({ available: 'true' }, { $set: { available: false } }, { multi: true }, function (err, num) {
            console.log(num, " dishes set to unavailable");
        });
        return this;
    }
    // getMenu() {
    //     return new Promise((resolve, reject) => {
    //         this.db.find({}).sort({ itemType: -1 }).exec(function (err, entries) {
    //             if (err) {
    //                 reject(err);
    //             } else {
    //                 resolve(entries);
    //                 console.log('function all() returns: ', entries);
    //             }
    //         })
    //     })
    // }
    getLunch() {
        return new Promise((resolve, reject) => {
            this.db.find({ $and: [{ itemType: 'Lunch' }, { available: 'true' }] }, function (err, lunch) {
                if (err) {
                    reject(err);
                } else {
                    resolve(lunch);
                }
            });
        });
    }
    getDinner() {
        return new Promise((resolve, reject) => {
            this.db.find({ $and: [{ itemType: 'Dinner' }, { available: 'true' }] }, function (err, dinner) {
                if (err) {
                    reject(err);
                } else {
                    resolve(dinner);
                }
            })
        })
    }
    getSides() {
        return new Promise((resolve, reject) => {
            this.db.find({ $and: [{ itemType: 'Side' }, { available: 'true' }] }, function (err, sides) {
                if (err) {
                    reject(err);
                } else {
                    resolve(sides);
                }
            });
        });
    }
    getDesserts() {
        return new Promise((resolve, reject) => {
            this.db.find({ $and: [{ itemType: 'Dessert' }, { available: 'true' }] }, function (err, Dessert) {
                if (err) {
                    reject(err);
                } else {
                    resolve(Dessert);
                }
            });
        });
    }
    getDrinks() {
        return new Promise((resolve, reject) => {
            this.db.find({ $and: [{ itemType: 'Drink' }, { available: 'true' }] }, function (err, Drink) {
                if (err) {
                    reject(err);
                } else {
                    resolve(Drink);
                }
            });
        });
    }
    addMenuItem(name, description, ingredients, allergies, vegetarian, vegan, itemType, price, special, available) {
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
            itemType: itemType,
            special: special,
            available: available
        }
        console.log("Menu item created", item);
        this.db.insert(item, function (err, doc) {
            if (err) {
                console.log("Could not add ", name);
            } else {
                console.log("Menu item added into the database ", doc)
            }
        })
    }
}

const dao = new MenuDAO();
dao.init();
module.exports = MenuDAO;