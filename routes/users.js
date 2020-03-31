var express = require('express');
var router = express.Router();

const userController = require("../controllers/userController");

/* GET users listing. */
router.get('/', userController.index);

router.post("/cadastrarUsuario",userController.cadastrarUsuario)
module.exports = router;
