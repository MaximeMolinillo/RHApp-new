module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Personnes',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false
        },
        prenom: {
            type: DataTypes.STRING,
            allowNull: false
        },
        sexe:{
            type: DataTypes.STRING,
            allowNull:false
        },
        date:{
            type: DataTypes.STRING,
            allowNull:false
        },
        type:{
            type: DataTypes.STRING,
            allowNull:false
        },
        identifiant:{
            type: DataTypes.STRING,
            allowNull:false
        },
        motDePasse:{
            type: DataTypes.STRING,
            // allowNull:false
        }

    })
}