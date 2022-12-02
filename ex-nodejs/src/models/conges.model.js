module.exports = (sequelize, DataTypes) => {
    return sequelize.define('Conges',{
        id:{
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        debut: {
            type: DataTypes.STRING,
            allowNull: false
        },
        fin: {
            type: DataTypes.STRING,
            allowNull: false
        },
        duree: {
            type: DataTypes.INTEGER,
            allowNull: false
        },
        etat: {
            type: DataTypes.STRING,
            allowNull: false
        }
        
    })
}