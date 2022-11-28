const express = require('express')
const router = express.Router();
const sequelize = require('../db/sequelize');

// select all
router.get('/personnes', (req, res) => {
    sequelize.personnesList.findAll().then(resultat => {
        res.json(resultat)
    }).catch(() => {
        res.json({ message: "Erreur" })
    })
})
// select 1
router.get('/personne/:id', (req,res) => {
    sequelize.personnesList.findByPk(req.params.id).then(resultat => {
        res.json(resultat)
    }).catch(() => {
        res.json({ message: "Erreur !!" })
    })
})
//ajouter
router.post('/personnes', (req,res) => {
    sequelize.personnesList.create(req.body).then(resultat => {
        res.json({ message: "Création réalisée avec succés", resultat })
    }).catch(() => {
        res.json({ message: "Erreur !!" })
    })

})
//modifier
router.put('/personne/:id', (req,res) => {
    const personneId = req.params.id
    sequelize.Participant.update(req.body,
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
router.delete('/participants/:id', (req,res) => {
    const participantId = req.params.id
    sequelize.Participant.destroy({
        where: { id: participantId }
    }).then(() => {
        res.status(204).json({ message: "Suppression réalisée avec succés" })
    }).catch(() => {
        res.json({ message: "Erreur !!" })
    })

})

module.exports = router;