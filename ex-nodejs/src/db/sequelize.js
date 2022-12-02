const { Sequelize, DataTypes } = require('sequelize');
const bcrypt = require('bcrypt');
const personneModel = require('../models/personne.model');
const fonctionModel = require('../models/fonction.model');
const congesModel = require('../models/conges.model');

// exemple
let personnes = [
    {  prenom: "louis", nom: "Defunes", sexe: "homme", date: "25/01/1972", type: "non", identifiant: "loulou59", motDePasse: "loulou5959", job: 1 },
    {  prenom: "jack", nom: "roussel", sexe: "homme", date: "05/11/1995", type: "oui", identifiant: "jackiejackie", motDePasse: "jacklamenace", job: 2 },
    {  prenom: "eva", nom: "naiceansse", sexe: "femme", date: "21/05/1999", type: "non", identifiant: "evanaiceansse", motDePasse: "rameneMoiAlaVi", job: 1 },
];
let fonctions = [
    {  nom: "dev", commentaire: "dev" },
    {  nom: "rh", commentaire: "rh" },
];

let conges = [
    {  debut: "15/10/2022", fin: "25/10/2022", duree: 10, etat: false, personne: 2 },
    {  debut: "02/01/2022", fin: "02/10/2022", duree: 270, etat: false, personne: 3 },
    {  debut: "02/01/2022", fin: "02/10/2022", duree: 270, etat: false, personne: 1 }
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
const congesList = congesModel(sequelize, DataTypes);

personnesList.hasMany(congesList, {
    foreignKey: "personne"
})
congesList.belongsTo(personnesList, {
    foreignKey : 'personne'
});
fonctionsList.hasMany(personnesList, {
    foreignKey: "job"
})
personnesList.belongsTo(fonctionsList, {
    foreignKey : 'job'
});



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
            fonctions.map(fonction => {
                fonctionsList.create({
                    nom: fonction.nom,
                    commentaire: fonction.commentaire
                })
            }, 3000)
        })

        setTimeout(() => {
            personnes.map(personne => {
                bcrypt.hash(personne.motDePasse, 5).then(hash => {
                    personnesList.create({
                        nom: personne.nom,
                        prenom: personne.prenom,
                        sexe: personne.sexe,
                        date: personne.date,
                        type: personne.type,
                        identifiant: personne.identifiant,
                        motDePasse: hash,
                        job: personne.job
                    })
                })
            })
        }, 3000)

        setTimeout(() => {
            conges.map(conge => {
                congesList.create({
                    debut: conge.debut,
                    fin: conge.fin,
                    duree: conge.duree,
                    etat: conge.etat,
                    personne: conge.personne
                })
            })
        }, 5000)

    })
}


module.exports = {
    connect, initDb, personnesList, fonctionsList, congesList
};