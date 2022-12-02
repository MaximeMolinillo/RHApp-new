const bcrypt = require('bcrypt');
const express = require('express')
const router = express.Router();
const sequelize = require('../db/sequelize');

// select all
router.get('/personnes', (req, res) => {

    sequelize.personnesList.findAll({
        include: sequelize.fonctionsList
    }).then(personnes => {
        console.log(personnes);
        res.json( personnes )
    }).catch(() => {
        res.json({ message: "Erreur" })
    })
})
// select 1
router.get('/personne/:id', (req, res) => {
    console.log(req.body);
    sequelize.personnesList.findByPk(req.params.id,{
        include: sequelize.fonctionsList
    }).then(resultat => {
        res.json(resultat)
    }).catch(() => {
        res.json({ message: "Erreur !!" })
    })
})
//ajouter
router.post('/personnes', (req, res) => {
    sequelize.personnesList.create(req.body).then(resultat => {
        res.json({ message: "Création réalisée avec succés", resultat })
    }).catch(() => {
        res.json({ message: "Erreur !!" })
    })

})
//modifier
router.put('/personne/:id', (req, res) => {
    const personneId = req.params.id
    sequelize.personnesList.update(req.body,
        {
            where: { id: personneId }
        }).then(() => {
            sequelize.personnesList.findByPk(personneId).then(resultat => {
                res.json({ message: "Modification réalisée avec succés", resultat })
            }).catch(() => {
                res.json({ message: "Erreur !!" })
            })
        }).catch(() => {
            res.json({ message: "Erreur !!" })
        })
})
// supprimer
router.delete('/personne/:id', (req, res) => {
    const personneId = req.params.id
    sequelize.personnesList.destroy({
        where: { id: personneId }
    }).then(() => {
        res.status(204).json({ message: "Suppression réalisée avec succés" })
    }).catch(() => {
        res.json({ message: "Erreur !!" })
    })

})

//Login
router.post('/personnes/login', async (req, res) => {
   
    const userFound = await sequelize.personnesList.findOne({ where : { identifiant: "loulou59"}})
    console.log(userFound);
    if(userFound == null){        
        return res.status(401).send('Utilisateur inconnu')
    }
    
    try {
        if( await bcrypt.compare("loulou5959", userFound.motDePasse)){
            res.json(userFound)
        } else {
            res.end('Mot de passe incorrect')
        }
    } catch {
        res.status(500).send()
    }
})
module.exports = router;