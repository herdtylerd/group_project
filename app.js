const express = require("express");

//const ejsLint = require('ejs-lint'); 

let app = express();

const knex = require("knex")({
    client:"mysql",
    connection: {
    host:"restaurantdb.cluster-cjnzdf71h3hb.us-east-1.rds.amazonaws.com",
    user: "admin",
    password: "admin1234",
    database:"provoFood",
    port: 3306,
    },
    });



let path = require("path");

const port = 3001;

app.use(express.urlencoded({extended : true}));

app.use(express.static(__dirname + '/public/'));

app.set("view engine", "ejs");

app.get("/",(req,res) => {
    knex
    .select()
    .from("restaurants")
    .then((result) => {
    console.log(result);
    res.render("index", {restaurants : result});
    });
});

app.listen(port, () => console.log("Website has started!"));