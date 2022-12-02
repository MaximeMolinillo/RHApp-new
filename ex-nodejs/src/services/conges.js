const express = require('express')
const router = express.Router();
const sequelize = require('../db/sequelize');

// select all
router.get('/conges', (req, res) => {
    sequelize.congesList.findAll({
        include: sequelize.personnesList
    }).then(conges => {
        console.log(conges);
        res.json( conges )
    }).catch(() => {
        res.json({ message: "Erreur" })
    })
})

// select 1
router.get('/conges/:id', (req,res) => {
    sequelize.congesList.findByPk(req.params.id,{
        include: sequelize.personnesList
    }).then(async resultat => {
        res.json(resultat)
    }).catch(() => {
        res.json({ message: "Erreur !!" })
    })
})

router.post('/conges', (req,res) => {
    sequelize.congesList.create(req.body).then(resultat => {
        res.json({ message: "Création réalisée avec succés", resultat })
    }).catch(() => {
        res.json({ message: "Erreur !!" })
    })

})
//modifier
router.put('/conges/:id', (req,res) => {
    const congesId = req.params.id
    sequelize.congesList.update(req.body,
        {
            where: { id: congesId }
        }).then(() => {
            sequelize.congesList.findByPk(congesId).then(resultat => {
                res.json({ message: "Modification réalisée avec succés", resultat })
            }).catch(() => {
                res.json({ message: "Erreur !!" })
            })
        }).catch(() => {
            res.json({ message: "Erreur !!" })
        })
})
// supprimer
router.delete('/conges/:id', (req,res) => {
    const congesId = req.params.id
    sequelize.pcongesList.destroy({
        where: { id: congesId }
    }).then(() => {
        res.status(204).json({ message: "Suppression réalisée avec succés" })
    }).catch(() => {
        res.json({ message: "Erreur !!" })
    })

})

module.exports = router;