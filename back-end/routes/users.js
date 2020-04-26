var express = require('express');
var router = express.Router();

const userController = require("../controllers/userController");

 
router.get('/', userController.index);
router.post("/cadastrarUsuario",userController.new);
router.delete('/delete/:id',userController.delete);
//router.get('/:id/profile',userController.profile);
//router.put('/:id/update',userController.update);
router.get('/busca/:id',userController.search);


module.exports = router;