const usuarios = require("../database/users.json")
const fs = require("fs");
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config/database');

module.exports = {
	index: async (req, res)=>{
		const db = new Sequelize(config);
		const usuarios = await db.query('select * from user',{type:Sequelize.QueryTypes.SELECT});
		if( usuarios.count > 0 ){
			res.send(usuarios);
		}else{
			res.send("nao há users cadastrados");
		}
		
	},
	search: async (req, res) => {
		let busca = req.params.id
		
		const db = new Sequelize(config);
		const result = await db.query('select * from user where id ='+busca,{type:Sequelize.QueryTypes.SELECT});
		if (result > 0) {
			res.send(result)
		} else {
			res.send('User not found');
		}
	},
    new:  (req, res) => {
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
				res.status(201);
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
	},
	delete: async (req, res) => {
		
		let id = req.params.id;
	
		const db = new Sequelize(config);
		const result = await db.query('select * from user where id = '+id,{type:Sequelize.QueryTypes.SELECT});
		
		if( result != null ) {
			const result = await db.query('delete from user where id = '+id,{type:Sequelize.QueryTypes.DELETE});
			console.log("usuario excluido");
		}else{
			console.log('usuario nao encontrado');
		}

		res.redirect("/");
	},update: (req, res) => {
		let id = req.params.id;

		let newUser = req.body;

		let user = usuarios.find(usuario => usuario.id == id);
		user = newUser;
		
		fs.writeFileSync(path.join('database', 'users.json'), JSON.stringify(usuarios))

		res.redirect("/");
	}
}

