const express = require("express");
const path = require("path");
const port = 3000;
const sqlite3 = require('sqlite3').verbose();

// Creating the Express server
const app = express();

// Connect to SQLite database
let db = new sqlite3.Database('questions.db', (err) => {    
  if (err) {
      return console.error(err.message);
  }
  console.log('Connected to the SQlite database.');
});

app.use(express.urlencoded({ extended: true }));

// static resourse & templating engine
app.use(express.static('public'));
// Set EJS as templating engine
app.set('view engine', 'ejs');


// routing path
app.get('/', function (req, res) {
    const query = `select * from questions`;
    db.all(query, (err, rows) => { // * ไปเป็น array
      if (err) {
        console.log(err.message);
      }
      console.log(rows);
      res.render('data', { data : rows });
      // res.send(rows);
    });
})

app.post('/check', function (req, res) {
  const answer = req.body;
  console.log('answer: ', answer);

  let score = 0;

  const query = `select * from questions`;
  db.all(query, (err, rows) => { // * ไปเป็น array
    if (err) {
      console.log(err.message);
    }
    console.log(rows);
    rows.forEach(element => {
      if (element.Correct === answer[element.QID]) {
        score++
        console.log('score now:', score);
      }
    });
    // res.send(`<h1>your score is ${score}</h1>`);
    res.render('score', {data: score});
  });
});

// Starting the server
app.listen(port, () => {
   console.log("Server started.");
 });