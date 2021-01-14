const express = require('express')
const port = 3000
const app = express()
const routing = require('./routing/index')
const db = require('./config/connection')

app.use(express.urlencoded({ extended: false }))
app.use(express.json())
app.use('/', routing)

app.listen(port, () => {
    console.log(`Connected to localhost:${port}`);
    db.authenticate()
    .then(()=>{
        console.log(`database...OK!`);
    })
    .catch((err)=>{
        console.log('Error: ' + err);
    })
});