const express = require('express');
const app = express();
const port = 3000;
app.get('/', (req, res) => res.send('Server is up.'));
app.listen(port, () => console.log(`Made By CodeX Development | dsc.gg/codexdev \n Bot running on http://localhost:${port}`));
