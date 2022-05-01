const { promise } = require("bcrypt/promises");
const nedb = require("nedb");
class MenuDAO {
    constructor() {
            this.db = new nedb({ filename: "./databases/menu.db", autoload: true });
            console.log('Connected to Menu database ');
        
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
            this.db.find({ itemType: 'Lunch' }).exec(function (err, lunch) {
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
            this.db.find({ itemType: 'Dinner' }).exec(function (err, dinner) {
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
            this.db.find({ itemType: 'Side' }).exec(function (err, sides) {
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
            this.db.find({ itemType: 'Dessert' }).exec(function (err, Dessert) {
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
            this.db.find({ itemType: 'Drink' }).exec(function (err, Drink) {
                if (err) {
                    reject(err);
                } else {
                    resolve(Drink);
                }
            });
        });
    }
    addMenuItem(name, description, ingredients, allergies, vegetarian, vegan, itemType, price, special) {
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
            special: special
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
module.exports = MenuDAO;