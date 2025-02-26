const express = require("express");
const path = require("path");
const port = 3000;
const sqlite3 = require('sqlite3').verbose();

// Creating the Express server
const app = express();

// Connect to SQLite database
let db = new sqlite3.Database('todos.db', (err) => {    
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


// app.get("/", (req, res) => {
//     const endpoint = 'http://10.0.15.21:8000/countries';
//     fetch(endpoint)
//         .then(response => response.json())
//         .then(airq => {
//             console.log(airq);
//             res.render('todos', {data: airq});
//         })
//         .catch(error => {
//             console.log(error);
//         });
// });

app.get("/", (req, res) => {
    db.all(`select * from todos`, (err, rows) => {
        if (err) {
            console.error("Error retrieving data:", err);
        } else {
            console.log("All todos:", rows);
            res.render('todos', {data : rows});
        }
    });
});

// app.post("/:id", (req, res) => {
//     const id = req.params.id;
//     const completed = req.body.completed === "1" ? 1 : 0; // ถ้าค่าของ completed เป็น "1" หมายความว่า checked

//     db.run(`UPDATE todos SET completed = ? WHERE id = ?`, [completed, id], function(err) {
//         if (err) {
//             console.log("Error updating data:", err);
//             return res.status(500).send("Error updating data.");
//         }
//         res.redirect("/"); // ไปยังหน้า Todo list หลังจากอัปเดตเสร็จ
//     });
// });


app.get("/createTodos", (req, res) => {
    res.render('createTodos');
});

app.post("/createTodos", (req, res) => {
    const title = req.body.title
    const description = req.body.description
    const deadline = req.body.deadline

    db.run(`insert into todos (title, description, deadline)
            values (?, ?, ?)`,
            [title, description, deadline], function(err) {
                if (err) {
                    console.log("Error inserting data:", err);
                    res.status(500).send("Error inserting data.");
                } else {
                    console.log('Todo saved successfully!');
                    res.redirect('/createTodos');
                }
            });

});

app.listen(port, () => {
});
  console.log(`Starting node.js at port ${port}`);
