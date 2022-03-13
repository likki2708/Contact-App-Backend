var express = require("express");
var router = express.Router();

var { signup, signin} = require("../controllers/user");

router.post("/signup", signup);
router.post("/signin", signin);


module.exports = router;