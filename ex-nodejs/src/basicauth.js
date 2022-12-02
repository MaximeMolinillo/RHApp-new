const auth = require('basic-auth');
const sequelize = require('./db/sequelize');
const bcrypt = require('bcrypt')

const basicAuth = async (req, res, next) => {
    const user = auth(req);
    if (user == null) {
        return res.status(401).send('authentifiaction requise');
    }

    const userFound = await sequelize.personnesList.findOne({ where: { identifiant: "loulou59" } })
    if (userFound == null) {
        return res.status(401).send('Utilisateur inconnu')
    }

    try {
        if (await bcrypt.compare("loulou5959", userFound.motDePasse)) {
            console.log('authentification OK')
            next()
        } else {
            res.end('Accés refusé')
        }
    } catch {
        res.status(500).send()
    }
}

module.exports = basicAuth;