const express = require('express');
const sequelize = require('./src/db/sequelize');

const personnesApi=require('./src/services/personne')
const fonctionsApi=require('./src/services/fonction')

const cors = require('cors')
const app = express();
const port = 3000;

app.use(cors())
sequelize.connect();
sequelize.initDb();

app.use(express.json())
app.get('/', (req,res) => {
    res.send('Bonjour M2i')
})

app.get('/test/:id', (req,res) => {
    res.send(`Paramétre : ${req.params.id}`)
})

app.use('/api',personnesApi)
app.use('/api',fonctionsApi)




app.listen(port, () => console.log(`Projet démarré sur : http://localhost:${port}`))