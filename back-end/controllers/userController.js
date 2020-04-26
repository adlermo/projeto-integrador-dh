const usuarios = require("../database/users.json")
const fs = require("fs");
const path = require('path');
const Sequelize = require('sequelize');
const config = require('../config/database');

module.exports = {
	index: async (req, res)=>{
		const db = new Sequelize(config);
		console.log(db);
		const usuarios = await db.query('select * from user',{type:Sequelize.QueryTypes.SELECT});
		if(usuarios){
			res.send(usuarios);
		}else{
			//sres.send("nao há users cadastrados");
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
    new:  async (req, res) => {
		let user = req.body;
		console.log(user);
		if(user){
			let db = new Sequelize(config);
			const result = await db.query('select * from user where cpf = \"'+user.cpf+"\"",{type:Sequelize.QueryTypes.SELECT});
			if(result.count > 0){
				console.log("usuario já cadastrado!")
				res.send("usuário já cadastrado!");
			}else{
				res.status(201);
				const insert = await db.query('INSERT INTO user(nome,idade,cpf,rg,data_nasc,cnpj,fornecedor,email,senha,cep,endereco,numero,bairro,cidade,estado,telefone,celular) VALUES (\"'+user.nome+'\",'+user.idade+',\"'+user.cpf+'\",\"'+user.rg+'\",'+user.data_nasc+',\"'+user.cnpj+'\",'+user.fornecedor+',\"'+user.email+'\",\"'+user.senha+'\",\"'+user.cep+'\",\"'+user.endereco+'\",'+user.numero+',\"'+user.bairro+'\",\"'+user.cidade+'\",\"'+user.estado+'\",\"'+user.telefone+'\",\"'+user.celular+'\");',{type:Sequelize.QueryTypes.INSERT});
				console.log(insert);
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

