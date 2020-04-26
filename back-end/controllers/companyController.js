const { Company } = require("../models");
const fetch = require("node-fetch");

module.exports = {
	index: async (req, res)=>{
		let companies = await Company.findAll();
		if(companies !==  null){
			res.send(companies);
		}else{
			res.send("Nao há empresas cadastradas");
		}
	},search: (req, res) => {
        let busca = req.params.cnpj;
        let url = 'https://www.receitaws.com.br/v1/cnpj/';
        let urlFetch = url+busca;
		fetch(urlFetch)
    .then(res => res.json())
    .then(json => res.send(json));
	}
}

