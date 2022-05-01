const data = require("nedb");
const bcrypt = require("bcrypt");
const salt = 10;
const dotenv = require('dotenv');
dotenv.config()

class StaffDAO {
    constructor() {
        this.db = new data({ filename: "./databases/staff.db", autoload: true });
        console.log('Connected to Staff database ');
    }
    create(username, password) {
        const that = this;
        bcrypt.hash(password, salt).then(function (hash) {
            var entry = {
                user: username,
                password: hash,
            };
            that.db.insert(entry, function (err) {
                if (err) {
                    console.log("Error inserting ", username);
                }
            });
        });
    }
    lookup(user, callback) {
        this.db.find({ 'user': user }, function (err, entries) {
            if (err) {
                callback
                return callback(null, null);
            } else {
                if (entries.length == 0) {
                    return callback(null, null);
                }
                return callback(null.entries[0]);
            }
        });
    }
}
const dao = new StaffDAO();
module.exports = dao;

