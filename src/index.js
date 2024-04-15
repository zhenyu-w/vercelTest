const express = require('express')
const app = express();

app.get('/', (req,res) => res.send('Hello Word'))
app.listen(3000, () => console.log("Server ready on port 3000"))

exports.app = app;