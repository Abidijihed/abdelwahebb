const router = require("express").Router();
const mailmodel = require("../controller/mail");
router.post("/api/sendmail", mailmodel.nodmail);
module.exports = { mailrouter: router };
