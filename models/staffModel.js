const data = require("nedb");
const bcrypt = require("bcrypt");
const salt = 10;
const dotenv = require('dotenv');
dotenv.config()

class StaffDAO {
    constructor(dbFilePath) {
        if (dbFilePath) {
            this.db = new data({
                filename: dbFilePath,
                autoload: true
            });
        } else {
            this.db = new data();
        }
    }
    //creates a staff member called Gordon with the password being stored in the .env file
    init() {
        this.db.insert({
            user: "Gordon",
            passwowrd: process.env.GordonPassword
        });
        console.log("Staff member Gordon added");
        return this;
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
dao.init();
module.exports = dao;