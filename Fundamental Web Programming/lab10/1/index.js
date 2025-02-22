const express = require("express");
const path = require("path");
const port = 3000;
const sqlite3 = require('sqlite3').verbose();

// Creating the Express server
const app = express();

// Connect to SQLite database
let db = new sqlite3.Database('userdata.db', (err) => {    
  if (err) {
      return console.error(err.message);
  }
  console.log('Connected to the SQlite database.');
});


// static resourse & templating engine
app.use(express.static('public'));
// Set EJS as templating engine
app.set('view engine', 'ejs');


// routing path
app.get('/create', function (req, res) {
    // create table 
    const sql  = ` CREATE TABLE employees (
        EmployeeId INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
        LastName NVARCHAR(20)  NOT NULL,
        FirstName NVARCHAR(20)  NOT NULL,
        Title NVARCHAR(30),
        Phone NVARCHAR(24),
        Email NVARCHAR(60) ); `; 
    
    db.run(sql, (err) => { 
        if (err) { 
            return console.error('Error creating table:', err.message); 
        } 
        console.log('Table created successful'); 
    });
    
    // insert data into table 
    let sql2 = `INSERT INTO .... `;
    // insert one row into the langs table
    db.run(sql2, function(err) {
     if (err) {
       return console.log(err.message);
     }
     // get the last insert id
     console.log(`A row has been inserted`);
   });
})

app.get('/', function (req, res) {
    const query = 'SELECT * FROM users ';
    db.all(query, (err, rows) => {
      if (err) {
        console.log(err.message);
      }
      console.log(rows);
      res.render('show', { data : rows });
    });
  });


app.get('/delete', function (req, res) {
    // Deleting Data
    let sql = ``;
    // delete a row based on id
    db.run(sql, function(err) {
    if (err) {
        return console.error(err.message);
    }
    console.log(`Row(s) deleted.`);
    });
  });

app.get('/datashow/:id', function (req, res) {
    // let formdata = {
    //     id: req.query.id,
    //     fname: req.query.first_name
    // };
    // let formdata = req.query.id

    // console.log("formdata: "+formdata.id);  

    const id = req.params.id;
    let sql = `select * from users where id = ?`;
    // console.log(sql);
    // const query = 'SELECT * FROM users ';
    db.get(sql, [id], (err, rows) => {
      if (err) {
        console.log("err:"+err.message);
      }
      console.log(rows);
      res.render('datashow', { data : rows });
    });
});


// Starting the server
app.listen(port, () => {
   console.log("Server started.");
 });