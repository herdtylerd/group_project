const express = require("express");

//const ejsLint = require('ejs-lint');

let app = express();

let path = require("path");

const port = 3001;

app.use(express.urlencoded({extended : true}));

app.use(express.static(__dirname + '/public/'));

app.set("view engine", "ejs");

app.get("/", (req, res) => {


    res.render("index");
});

app.listen(port, () => console.log("Website has started!"));