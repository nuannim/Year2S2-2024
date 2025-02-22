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
  res.send("Hello! REST API");
});

app.get('/employees', (req, res) => {
    const query = 'SELECT * FROM employees '; // ! ******
    db.all(query, (err, rows) => {
        if (err) {
            console.log(err.message);
        }
        console.log(rows);
        res.send(JSON.stringify(rows));
    });
});

app.get('/employees/:id', (req, res) => {
    // req.params.id
    const id = req.params.id
    // const query = `SELECT * from employees WHERE EmployeeID='${id}'; `; //* วิธีจารย์ แต่แชทบอกไม่ปลอดภัย
    const query = `SELECT * from employees WHERE EmployeeID=?; `; // ! ******
    db.all(query, [id], (err, rows) => {
    // db.all(query, (err, rows) => { //* วิธีจารย์ แต่แชทบอกไม่ปลอดภัย 
        if (err) {
            console.log(err.message);
        }
        console.log(rows);
        res.send(JSON.stringify(rows));
    });
});

// & post.http
app.post('/employees/:id', (req, res) => {
    // req.params.id
    const id = req.params.id
    // const query = `SELECT * from employees WHERE EmployeeID='${id}'; `; //* วิธีจารย์ แต่แชทบอกไม่ปลอดภัย
    const query = `SELECT * from employees WHERE EmployeeID=?; `; // ! ******
    db.all(query, [id], (err, rows) => {
    // db.all(query, (err, rows) => { //* วิธีจารย์ แต่แชทบอกไม่ปลอดภัย 
        if (err) {
            console.log(err.message);
        }
        console.log(rows);
        res.send(`POST METHOD :::: ` + JSON.stringify(rows));
    });
});

// app.post('/employees', (req, res) => {   
//     //! process nothing   
//     res.send(`Add new employee ... completed.`)
// });

// & put.http
app.put('/employees/:id', (req, res) => {
    // req.params.id
    // res.send(`PUT METHOD: Update employee id : ${req.params.id} completed.`)
    res.send(`PUT METHOD :::: id : ${req.params.id}`)
});

// * จารย์บอกจารย์ไม่สอนจ้า
// app.delete('/employees/:id', (req, res) => {
//     // req.params.id --> processes --> respond  res.*
//     const query = `DELETE .... WHERE EmployeeID=''; `;
//     db.run(query, function (err) {
//         if (err) {
//             return console.error(err.message);
//         }
//         console.log(`a row deleted.`);
//         res.send(`Delete employee ... completed.`)
//     });
// });


/////////////////////////////////////////////////////////////////////////////////

app.get("/show", (req, res) => {
    const endpoint = 'http://10.0.15.21:8000/employees';    
    fetch(endpoint)
        .then(response => response.json())
        .then(empl => {
            console.log(empl);
            res.render('show', { data: empl });
        })
        .catch(error => {
            console.log(error);
        });
});

app.get("/weather", (req, res) => {
    // city=ชื่อเมือง country=ตัวย่อประเทศ 
    // const endpoint = 'http://10.0.15.21:8000/weather/bangkok/th';    
    const endpoint = 'http://10.0.15.21:8000/countries';    
    fetch(endpoint)
        .then(response => response.json())
        .then(airq => {
            console.log(airq);
            res.render('weather', {data: airq});
        })
        .catch(error => {
            console.log(error);
        });
});


app.listen(port, () => {
  console.log(`Starting node.js at port ${port}`);
});
