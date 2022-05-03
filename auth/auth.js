const bcrypt = require("bcrypt");
const userModel = require("../models/staffModel");
const jwt = require("jsonwebtoken");

exports.login = function (req, res, next) {
    let username = req.body.username;
    let password = req.body.password;

    userModel.lookup(username, function (err, user) {
        if (err) {
            console.log("error looking up user", err);
            return res.status(401).send();
        }
        if (!user) {
            console.log("user ", username, " not found");
            return res.redirect("/addUser");
        }
        bcrypt.compare(password, user.password, function (err, result) {
            if (result) {
                let payload = { username: username };
                //token and cookie expire in 1 hour
                let token = jwt.sign(payload, process.env.SECRET, { expiresIn: "1h" });
                res.cookie("jwt", token, { httpOnly: true, maxAge: 60 * 60 * 1000 });
                next();
            } else {
                return res.redirect("/login");
            }
        });
    });
};

exports.authenticate = function (req, res, next) {
    let token = req.cookies.jwt;
    if (!token) {
        return res.status(403).send();
    }
    let payload;
    try {
        payload = jwt.verify(token, process.env.SECRET);
        next();
    } catch (error) {
        res.status(401).send();
    }
};