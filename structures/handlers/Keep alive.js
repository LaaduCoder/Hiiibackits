const express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('CodeX Development'))

app.listen(port, () =>
console.log(`Made By CodeX Development | dsc.gg/codexdev \n Your app is listening a http://localhost:${port}`)
);