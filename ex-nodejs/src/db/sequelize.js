const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const personneModel = require('../models/personne.model');
const fonctionModel = require('../models/fonction.model');
const congesModel = require('../models/conges.model');


let personnes = [
    { id: 1, prenom: "louis", nom: "Defunes", sexe: "homme", date: "25/01/1972", type: "non", identifiant: "loulou59", motDePasse: "loulou5959",job:1 },
    { id: 2, prenom: "jack", nom: "roussel", sexe: "homme", date: "05/11/1995", type: "oui", identifiant: "jackiejackie", motDePasse: "jacklamenace",job:2 },
    { id: 3, prenom: "eva", nom: "naiceansse", sexe: "femme", date: "21/05/1999", type: "non", identifiant: "evanaiceansse", motDePasse: "rameneMoiAlaVi",job:1 },
];
let fonctions=[
    {id:1,nom:"dev",commentaire:"dev"},
    {id:2,nom:"roussel",commentaire:"rh"},
];

const sequelize = new Sequelize(
    'exerciceRh', //nom de la base de données
    'root', //utilisateur
    'root', //mot de passe
    {
        host: 'localhost',
        dialect: 'mysql'
    }
);

const personnesList = personneModel(sequelize, DataTypes);
const fonctionsList = fonctionModel(sequelize, DataTypes);
const Conges = congesModel(sequelize, DataTypes);

fonctionsList.hasOne(personnesList,{
    foreignKey:"job"
})

const connect = () => {
    sequelize.authenticate().then(() => {
        console.log('Connexion établie');
    }).catch((error) => {
        console.log('Connexion KO', error);
    })
}

const initDb = () => {
    sequelize.sync({ force: true }).then(() => {
        console.log('Base de données à jour');
        setTimeout(() => {
            fonctions.map(fonction =>{
                fonctionsList.create({
                    nom:fonction.nom,
                    commentaire:fonction.commentaire
                })
            },2000)
        })
        personnes.map(personne => {
            bcrypt.hash(personne.motDePasse,5).then(hash => {
                personnesList.create({
                    nom: personne.nom,
                    prenom: personne.prenom,
                    sexe: personne.sexe,
                    date: personne.date,
                    type: personne.type,
                    identifiant: personne.identifiant,
                    motDePasse: hash,
                    job:personne.job
                })
            })
        })
    })
}


module.exports = {
    connect, initDb,personnesList,fonctionsList
};