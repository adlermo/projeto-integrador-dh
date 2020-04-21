const usuarios = require("../database/users.json")
const fs = require("fs");
const path = require('path');


module.exports = {
	index: (req, res)=>{
		//res.render("clientes",{clientes: usuarios});
		res.send(usuarios);
	},
	search: (req, res) => {
		let busca = req.params.id
		let result = usuarios.find(
			user => user.id == busca
		);
		if (result) {
			res.send(result)
		} else {
			res.send('User not found');
		}
	},
    cadastrarUsuario:  (req, res) => {
		//console.log(req.body);
		let user = req.body;
		if(user){
			let result = usuarios.find(
				u => u.id == req.body.id
			);
			console.log(result);
			if(result){
				console.log("usuario já cadastrado!")
				res.send("usuário já cadastrado!");
			}else{
				res.statusCode(201);
				usuarios.push(user);
				fs.writeFileSync(path.join('database', 'users.json'),JSON.stringify(usuarios));
				res.send(user);
			}
		}else{
			console.log("Não foi possível cadastrar o usuário")
			res.send("Não foi possível cadastrar o usuário");
		}
	},
	edit: (req, res) => {
		let usuario = usuarios.find(
			(usuario) => {
				return usuario.id == req.params.id;
			}
		)
		return res.render("/", { usuario });
	}
}

