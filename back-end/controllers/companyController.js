const empresas = require("../database/company.json")
const fs = require("fs");
const fetch = require("node-fetch");
const path = require('path');


module.exports = {
	index: (req, res)=>{
		res.send(empresas);
	},search: (req, res) => {
        let busca = req.params.cnpj;
        let url = 'https://www.receitaws.com.br/v1/cnpj/';
        let urlFetch = url+busca;
		fetch(urlFetch)
    .then(res => res.json())
    .then(json => res.send(json));
	}
}

