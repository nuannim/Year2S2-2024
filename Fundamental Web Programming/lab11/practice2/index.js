const express = require("express");
const path = require("path");
const port = 3000;
const sqlite3 = require('sqlite3').verbose();

// Creating the Express server
const app = express();

// Connect to SQLite database
let db = new sqlite3.Database('todolist.db', (err) => {    
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
//   res.send("Hello! REST API");

const query2 = `select * from todos`;

    db.all(query2, (err, rows) => {
        if (err) {
            console.log(err.message);
        }
        console.log(rows);
        // res.send(JSON.stringify(rows));        
        res.render('todos', {data: rows});
    });

});



app.post("/submit", (req, res) => {
    const id = req.body.id;
    const firstname = req.body.first;
    const lastname = req.body.last;
    const button = req.body.button;
    
    console.log('id: ', id);
    console.log('firstname: ', firstname);
    console.log('lastname: ', lastname);
    console.log('button: ', button);

    if (button === 'submit') {
        const query = `insert into todos (id, firstname, lastname) 
        values (?, ?, ?)`;

        const values = [id, firstname, lastname];

        db.run(query, values, function (err) {
            if (err) {
                return console.error(err.message);
            }
            console.log(`a row added`);
        });
        res.redirect('/');

    } else if (button === 'update') {
        const query = `update todos set firstname = ?, lastname = ? where id = ?`;

        const values = [firstname, lastname, id];

        db.run(query, values, function (err) {
            if (err) {
                return console.error(err.message);
            }
            console.log(`a row updated`);
        });
        res.redirect('/');
        
    } else {
        const query = `delete from todos where id = ?`;

        const values = [id];

        db.run(query, values, function (err) {
            if (err) {
                return console.error(err.message);
            }
            console.log(`a row updated`);
        });
        res.redirect('/');
    }
});

// app.get("/create", (req, res) => {
//     db.run(`create table todos (
//         id integer primary key autoincrement not null,
//         firstname nvarchar(20) not null,
//         lastname nvarchar(20) not null );`);
//     });

// app.post("/submit", (req, res) => {
//     const id = req.body.id;
//     const firstname = req.body.first;
//     const lastname = req.body.last;
    
//     console.log('id: ', id);
//     console.log('firstname: ', firstname);
//     console.log('lastname: ', lastname);

//     const query = `insert into todos (id, firstname, lastname) 
//         values (?, ?, ?)`;

//     const values = [id, firstname, lastname];

//     db.run(query, values, function (err) {
//         if (err) {
//             return console.error(err.message);
//         }
//         console.log(`a row added`);
//         // res.send(`Delete employee ... completed.`)
//         // res.render('todos');
//     });

//     // const query2 = `select * from todos`;

//     // db.all(query2, (err, rows) => {
//     //     if (err) {
//     //         console.log(err.message);
//     //     }
//     //     console.log(rows);
//     //     // res.send(JSON.stringify(rows));        
//     //     res.render('todos', {data: rows});
//     // });
//     res.redirect('/');

// });


app.listen(port, () => {
  console.log(`Starting node.js at port ${port}`);
});