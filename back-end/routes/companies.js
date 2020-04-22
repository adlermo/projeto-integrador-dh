var express = require('express');
var router = express.Router();

const companyController = require("../controllers/companyController");


router.get('/', companyController.index);
router.get("/cnpj/:cnpj",companyController.search);

module.exports = router;