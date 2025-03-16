const express = require('express');
const path = require("path");
const cookieParser = require('cookie-parser');
const sessions = require('express-session');
const app = express();
const port = 3000;

const sqlite3 = require('sqlite3').verbose();

app.use(sessions({
    secret: "secretkey",
    saveUninitialized: true,
    resave: false
}));


let db = new sqlite3.Database('customers.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the SQlite database.');
});

app.get('/', (req, res) => {
    // res.sendFile(__dirname + "/form.html");
    const sql = `SELECT * FROM customers limit 1;`;
    db.each(sql, (err, row) => {
        if (err) {
            console.log(err.message);
        }
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Lab 13/2</title>
            </head>
            <body>
                <form action="/saveData" method="post">
                    <h1>Employee Information</h1>
                    <label for="employeeID">Employee ID:</label>
                    <input type="text" id="employeeID" name="employeeID" value="${row.CustomerId}" required>
                    <br>
                    <label for="firstname">Firstname:</label>
                    <input type="text" id="firstname" name="firstname" value="${row.FirstName}" required>
                    <br>
                    <label for="lastname">Lastname:</label>
                    <input type="text" id="lastname" name="lastname" value="${row.LastName}" required>
                    <br>
                    <label for="address">Address:</label>
                    <textarea name="address" id="address" required>${row.Address}</textarea>
                    <br>
                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email" value="${row.Email}" required>
                    <br>
                    <label for="phone">Phone:</label>
                    <input type="text" id="phone" name="phone" value="${row.Phone}" required>
                    <br>
                    <button type="submit">Save Data</button>
                    <button type="button"><a href="/showData">Show Data</a></button>
                    <button type="button"><a href="/clearData">Clear Data</a></button>
                </form>
            </body>
            </html>
            `)
        });
    });

app.post("/saveData", express.urlencoded({ extended: true }), (req, res) => {
    let employee = {
        employeeID: req.body.employeeID,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        address: req.body.address,
        email: req.body.email,
        phone: req.body.phone
    };

    req.session.employee = employee;
    res.send(`
            <form action="/saveData" method="post">
                <h2>Employee Information</h2>
                <label for="employeeID">Employee ID:</label>
                <input type="text" id="employeeID" name="employeeID" value="" required>
                <br>
                <label for="firstname">Firstname:</label>
                <input type="text" id="firstname" name="firstname" value="" required>
                <br>
                <label for="lastname">Lastname:</label>
                <input type="text" id="lastname" name="lastname" value="" required>
                <br>
                <label for="address">Address:</label>
                <textarea name="address" id="address" required></textarea>
                <br>
                <label for="email">Email:</label>
                <input type="text" id="email" name="email" value="" required>
                <br>
                <label for="phone">Phone:</label>
                <input type="text" id="phone" name="phone" value="" required>
                <br>
                <button type="submit">Save Data</button>
                <button type="button"><a href="/showData">Show Data</a></button>
                <button type="button"><a href="/clearData">Clear Data</a></button>
            </form>`
            );
});

app.get("/showData", (req, res) => {
    const employee = req.session.employee;
    if (employee) {
        res.send(`
                <form action="/saveData" method="post">
                    <h2>Employee Information</h2>
                    <label for="employeeID">Employee ID:</label>
                    <input type="text" id="employeeID" name="employeeID" value="${employee.employeeID}" required>
                    <br>
                    <label for="firstname">Firstname:</label>
                    <input type="text" id="firstname" name="firstname" value="${employee.firstname}" required>
                    <br>
                    <label for="lastname">Lastname:</label>
                    <input type="text" id="lastname" name="lastname" value="${employee.lastname}" required>
                    <br>
                    <label for="address">Address:</label>
                    <textarea name="address" id="address" required>${employee.address}</textarea>
                    <br>
                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email" value="${employee.email}" required>
                    <br>
                    <label for="phone">Phone:</label>
                    <input type="text" id="phone" name="phone" value="${employee.phone}" required>
                    <br>
                    <button type="submit">Save Data</button>
                    <button type="button"><a href="/showData">Show Data</a></button>
                    <button type="button"><a href="/clearData">Clear Data</a></button>
                </form>`
            )
    } else {
        res.send("Don't have any data");
    }
});

app.get("/clearData", (req, res) => {
    req.session.destroy(() => {
        res.send(`<form action="/saveData" method="post">
                    <h2>Employee Information</h2>
                    <label for="employeeID">Employee ID:</label>
                    <input type="text" id="employeeID" name="employeeID" value="" required>
                    <br>
                    <label for="firstname">Firstname:</label>
                    <input type="text" id="firstname" name="firstname" value="" required>
                    <br>
                    <label for="lastname">Lastname:</label>
                    <input type="text" id="lastname" name="lastname" value="" required>
                    <br>
                    <label for="address">Address:</label>
                    <textarea name="address" id="address" required></textarea>
                    <br>
                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email" value="" required>
                    <br>
                    <label for="phone">Phone:</label>
                    <input type="text" id="phone" name="phone" value="" required>
                    <br>
                    <button type="submit">Save Data</button>
                    <button type="button"><a href="/showData">Show Data</a></button>
                    <button type="button"><a href="/clearData">Clear Data</a></button>
                </form>`);
    });
});


app.listen(port, () => {
    console.log(`Starting node.js at port ${port}`);
});