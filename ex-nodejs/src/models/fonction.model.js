module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Fonctions',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nom: {
            type: DataTypes.STRING,
            allowNull: false
        },
        commentaire: {
            type: DataTypes.STRING,
            allowNull: false
        },
    })
}