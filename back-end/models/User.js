module.exports = (sequelize,DataType) => {
    const User = sequelize.define("User", {
        // id: {
        //     type:DataType.INTEGER,
        //     primaryKey:true,
        //     autoIncrement:true
        // },
        nome: DataType.STRING,
        idade: {
            type:DataType.INTEGER,
            allowNull:true
        },
        cpf:DataType.STRING,
        rg:{
            type:DataType.STRING,
            allowNull:true
        },
        data_nasc:{
            type:DataType.STRING,
            allowNull:true
        },
        cnpj:{
            type:DataType.STRING,
            allowNull:true
        },
        fornecedor:{
            type:DataType.STRING,
            allowNull:true
        },
        email: DataType.STRING,
        senha: DataType.STRING,
        cep:{
            type:DataType.STRING,
            allowNull:true
        },
        endereco:{
            type:DataType.STRING,
            allowNull:true
        },
        numero:{
            type:DataType.INTEGER,
            allowNull:true
        },
        bairro:{
            type:DataType.STRING,
            allowNull:true
        },
        cidade:{
            type:DataType.STRING,
            allowNull:true
        },
        estado:{
            type:DataType.STRING,
            allowNull:true
        },
        telefone:{
            type:DataType.STRING,
            allowNull:true
        },
        celular:DataType.STRING
    },{
        tableName:'user',
        timestamps:false
    })
    return User;
}