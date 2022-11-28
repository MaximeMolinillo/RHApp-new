const express = require('express')
const router = express.Router();
const sequelize = require('../db/sequelize');

// select all
router.get('/fonctions', (req, res) => {
    sequelize.fonctionsList.findAll().then(resultat => {
        res.json(resultat)
    }).catch(() => {
        res.json({ message: "Erreur" })
    })
})
// select 1
router.get('/fonction/:id', (req,res) => {
    sequelize.fonctionsList.findByPk(req.params.id).then(resultat => {
        res.json(resultat)
    }).catch(() => {
        res.json({ message: "Erreur !!" })
    })
})
//ajouter
router.post('/fonctions', (req,res) => {
    sequelize.fonctionsList.create(req.body).then(resultat => {
        res.json({ message: "Création réalisée avec succés", resultat })
    }).catch(() => {
        res.json({ message: "Erreur !!" })
    })

})
//modifier
router.put('/fonction/:id', (req,res) => {
    const fonctionId = req.params.id
    sequelize.Participant.update(req.body,
        {
            where: { id: fonctionId }
        }).then(() => {
            sequelize.fonctionsList.findByPk(fonctionId).then(resultat => {
                res.json({ message: "Modification réalisée avec succés", resultat })
            }).catch(() => {
                res.json({ message: "Erreur !!" })
            })
        }).catch(() => {
            res.json({ message: "Erreur !!" })
        })
})
// supprimer
router.delete('/fonction/:id', (req,res) => {
    const fonctionId = req.params.id
    sequelize.fonctionsList.destroy({
        where: { id: fonctionId }
    }).then(() => {
        res.status(204).json({ message: "Suppression réalisée avec succés" })
    }).catch(() => {
        res.json({ message: "Erreur !!" })
    })

})

module.exports = router;