const nedb = require("nedb");
class Menu {
    constructor(dbFilePath) {
        if (dbFilePath) {
            this.db = new nedb({
                filename: dbFilePath,
                autoload: true
            });
            console.log("Databse conntencted to ", dbFilePath);
        } else {
            this.db = new nedb();
        }
    }
    //this function populates with dishes that will always be available
    init() {
    }
    getMenu() {
        return new promise((resolve, reject) => {
            this.db.find({}, function (err, entries) {
                if (err) {
                    reject(err);
                } else {
                    resolve(entries);
                    console.log('Menu: ', entries);
                }
            })
        })
    }
    addMenuItem(name, description, ingredients, price, itemType, special) {
        var item = {
            name: name,
            description: description,
            ingredients: [ingredients],
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
module.exports = Menu;