const path = require("path");
const express = require("express");
var app = express();


app.use(express.static(path.join(__dirname, '../Public')))

const CreatePath = (page) => path.resolve('..', 'Public', 'Views', `${page}.html`);

app.get('/', (req,res) => {
    res.sendFile(CreatePath("index"));
});

app.listen(3000, () => {
  console.log('Application listening on port 3000!')
});