module.exports = (sequelize,DataType) => {
    const Company = sequelize.define("Company", {
        user_id: DataType.INTEGER,

        atividade_principal: DataType.STRING,
        data_situacao: DataType.STRING,
        complemento:DataType.STRING,
        nome:DataType.STRING,
        uf:DataType.STRING,
        telefone:DataType.STRING,
        atividades_secundarias:DataType.STRING,
        qsa:DataType.STRING,
        situacao:DataType.STRING,
        bairro:DataType.STRING,
        logradouro:DataType.STRING,
        numero:DataType.INTEGER,
        cep:DataType.STRING,
        municipio:DataType.STRING,
        porte:DataType.STRING,
        abertura:DataType.STRING,
        natureza_juridica:DataType.STRING,
        cnpj:DataType.STRING,
        ultima_atualizacao:DataType.STRING,
        status:DataType.STRING,
        tipo:DataType.STRING,
        fantasia:DataType.STRING,
        email:DataType.STRING,
        efr:DataType.STRING,
        motivo_situacao:DataType.STRING,
        situacao_especial:DataType.STRING,
        data_situacao_especial:DataType.STRING,
        capital_social:DataType.DECIMAL(20, 2)
    },{
        tableName:'company',
        timestamps:false
    })
    return Company;
}