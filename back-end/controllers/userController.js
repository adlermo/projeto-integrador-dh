const { User } = require("../models");

module.exports = {
	index: async (req, res)=>{
		let users = await User.findAll();
		if(users !==  null){
			res.send(users);
		}else{
			res.send("Nao há usuários cadastrados");
		}
	},
	search: async (req, res) => {
		let id = req.params.id
		
		let user = await User.findByPk(id);
		if(user !==  null){
			res.send(user);
		}else{
			res.send("user nao encontrado");
		}
	},
    new:  async (req, res) => {
		let u = req.body;
		let cpf = u.cpf;
		let result = await User.findOne({
			where: {
				cpf: cpf
			}
		})
		if( result == null ){
			let user = await User.create({
				nome: u.nome,
				idade: u.idade,
				cpf:u.cpf,
				rg:u.rg,
				data_nasc:u.data_nasc,
				cnpj:u.cnpj,
				fornecedor:u.fornecedor,
				email: u.email,
				senha: u.senha,
				cep:u.cep,
				endereco:u.endereco,
				numero:u.numero,
				bairro:u.bairro,
				cidade:u.cidade,
				estado:u.estado,
				telefone:u.telefone,
				celular:u.celular
			});
			await user.save();
			res.send(user);
		}else{
			res.status(409);
			res.send("usuario já cadastrado");
		}
	},
	delete: async (req, res) => {
		
		let id = req.params.id;
	
		User.destroy({
			where: {
				id: id
			}
		})

		let user = await User.findByPk(id);
		
		if(user !==  null){
			console.log(user);
		}else{
		 	console.log("user deletado");
		}
		res.redirect("/");
	}//,update: (req, res) => {
	// 	let id = req.params.id;

	// 	const user = await User.create({ name: "Jane" });
	// 	jane.name = "Ada";
	// 	await jane.save();
	// 	res.redirect("/");
	// }
}

