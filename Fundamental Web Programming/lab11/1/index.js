const express = require("express");
const path = require("path");
const port = 3000;
const sqlite3 = require('sqlite3').verbose();

// Creating the Express server
const app = express();

// Connect to SQLite database
let db = new sqlite3.Database('employees.db', (err) => {    
  if (err) {
      return console.error(err.message);
  }
  console.log('Connected to the SQlite database.');
});


// static resourse & templating engine
app.use(express.static('public'));
// Set EJS as templating engine
app.set('view engine', 'ejs');

app.use(express.json())
app.use(express.urlencoded({ extended: true }))


app.get("/", (req, res) => {
    const endpoint = 'http://10.0.15.21:8000/countries';    
    fetch(endpoint)
        .then(response => response.json())
        .then(airq => {
            console.log(airq);
            res.render('countries', {data: airq});
        })
        .catch(error => {
            console.log(error);
        });
});


app.listen(port, () => {
});
  console.log(`Starting node.js at port ${port}`);
