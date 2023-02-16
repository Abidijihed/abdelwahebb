const { connection } = require("../DataBaseMySQL/config");
const crypto = require("crypto");
const middleware = require("../middelwer/auth");
const utils = require("../middelwer/util");
const session = require("./session");
const geoip=require('geoip-lite')

module.exports = {
  CreateStudent: (req, res) => {
    console.log(req.body);

    var lastAtPos = req.body.email.lastIndexOf("@");
    var lastDotPos = req.body.email.lastIndexOf(".");
    var passwordHashed = crypto
      .createHash("sha256")
      .update(req.body.password, "utf8")
      .digest("hex");
    var query = `SELECT * from user where email="${req.body.email}"`;
    connection.query(query, (err, results) => {
      if (err) {
        res.status(500).send(err);
      } else if (results.length > 0 && results[0].email === req.body.email) {
        res.status(200).send("user exist");
      } else if (!results.length && results === undefined) {
        res.status(202).send("chek somthing went wrong!");
      } else if (
        !(
          lastAtPos < lastDotPos &&
          lastAtPos > 0 &&
          req.body.email.indexOf("@@") === -1 &&
          lastDotPos > 2 &&
          req.body.email.length - lastDotPos > 2
        )
      ) {
        res.status(405).send("email is not the corect format");
      } else {
        var query = `INSERT INTO user(username,email,phone_number,password,photo,role) VALUES("${req.body.username}","${req.body.email}","${req.body.phone_number}","${passwordHashed}","${req.body.photo}","User")`;
        connection.query(query, (err, results) => {
          if (err) {
            res.status(500).send(err);
          } else {
            res.status(200).send("user has been created");
          }
        });
      }
    });
  },
  VerifyUser: (req, res) => {
    var passwordHashed = crypto
      .createHash("sha256")
      .update(req.body.password, "utf8")
      .digest("hex");
    const query = `select * from user where email="${req.body.email}"`;
    connection.query(query, (error, results) => {
      if (error) {
        res.status(500).send(error);
      } else if (results.length > 0 && results[0].password === passwordHashed) {
        var session = utils.RandomString(32);
        middleware.CreateSession(req, res, results[0].id, role, session);
      } else if (
        results.length === 0 ||
        results[0].password !== passwordHashed
      ) {
        res.status(200).send("somthing went wrong");
      } else {
        res.status(404).send("not found");
      }
    });
  },
  logout: (req, res) => {
    session
      .delete(req.cookies.noja)
      .then((result) => {
        res.status(200).send("user loget out");
      })
      .catch((err) => {
        res.status(500).send("server err");
      });
  },
};