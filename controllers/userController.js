const usuarios = require("../database/users.json")

module.exports = {
	index: (req, res)=>{
        //res.render("index",{usuarios});
        return res.send(usuarios);
	},
	show: (req, res) => {

		let user = usuarios.find(
			user => usuarios.id == req.params.id
		);

		let pos = usuarios.indexOf(user);

		let idPrev = null;
		let idNext = null;

		if(pos > 0){
			idPrev = usuarios[pos -1].id;
		}

		if(pos < usuarios.length - 1){
			idNext = usuarios[pos + 1].id;
		}

		if(user){
			res.render("usuario",{user, idNext, idPrev});
		} else {
			res.render("erros/usuarioNaoEncontrado",{id:req.params.id});
		}
    },
    cadastrarUsuario:  (req, res) => {
        console.log(req.body);
        res.send("recieved your request!");
     }
}
