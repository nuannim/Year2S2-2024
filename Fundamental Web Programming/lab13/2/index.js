const express = require('express');
const cookieParser = require('cookie-parser');
const sqlite3 = require('sqlite3').verbose();
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

let db = new sqlite3.Database('customers.db', (err) => {
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the SQLite database.');
});

app.get('/', (req, res) => {
    const sql = `SELECT * FROM customers LIMIT 1;`;
    db.get(sql, [], (err, row) => {
        if (err) {
            console.log(err.message);
        }
        res.send(`
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport" content="width=device-width, initial-scale=1.0">
                <title>Lab 13-2</title>
            </head>
            <body>
                <form action="/saveData" method="post">
                    <h1>Employee Information</h1>
                    <label for="employeeID">Employee ID:</label>
                    <input type="text" id="employeeID" name="employeeID" value="${row.CustomerId || ''}" required>
                    <br>
                    <label for="firstname">Firstname:</label>
                    <input type="text" id="firstname" name="firstname" value="${row.FirstName || ''}" required>
                    <br>
                    <label for="lastname">Lastname:</label>
                    <input type="text" id="lastname" name="lastname" value="${row.LastName || ''}" required>
                    <br>
                    <label for="address">Address:</label>
                    <textarea name="address" id="address" required>${row.Address || ''}</textarea>
                    <br>
                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email" value="${row.Email || ''}" required>
                    <br>
                    <label for="phone">Phone:</label>
                    <input type="text" id="phone" name="phone" value="${row.Phone || ''}" required>
                    <br>
                    <button type="submit">Save Data</button>
                    <button type="button"><a href="/showData">Show Data</a></button>
                    <button type="button"><a href="/clearData">Clear Data</a></button>
                </form>
            </body>
            </html>
        `);
    });
});

app.post("/saveData", (req, res) => {
    let employee = {
        employeeID: req.body.employeeID,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
        address: req.body.address,
        email: req.body.email,
        phone: req.body.phone
    };

    res.cookie("employeeData", JSON.stringify(employee), { maxAge: 24 * 60 * 60 * 1000 });

    res.redirect("/clearForm");
});

app.get("/clearForm", (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Form Cleared</title>
            <script>
                window.onload = function() {
                    document.getElementById("employeeID").value = "";
                    document.getElementById("firstname").value = "";
                    document.getElementById("lastname").value = "";
                    document.getElementById("address").value = "";
                    document.getElementById("email").value = "";
                    document.getElementById("phone").value = "";
                };
            </script>
        </head>
            <body>
                <form action="/saveData" method="post">
                    <h1>Employee Information</h1>
                    <label for="employeeID">Employee ID:</label>
                    <input type="text" id="employeeID" name="employeeID" required>
                    <br>
                    <label for="firstname">Firstname:</label>
                    <input type="text" id="firstname" name="firstname" required>
                    <br>
                    <label for="lastname">Lastname:</label>
                    <input type="text" id="lastname" name="lastname" required>
                    <br>
                    <label for="address">Address:</label>
                    <textarea name="address" id="address" required></textarea>
                    <br>
                    <label for="email">Email:</label>
                    <input type="text" id="email" name="email" required>
                    <br>
                    <label for="phone">Phone:</label>
                    <input type="text" id="phone" name="phone" required>
                    <br>
                    <button type="submit">Save Data</button>
                    <button type="button"><a href="/showData">Show Data</a></button>
                    <button type="button"><a href="/clearData">Clear Data</a></button>
                </form>
            </body>
        </html>
    `);
});

app.get("/showData", (req, res) => {
    const employee = req.cookies.employeeData ? JSON.parse(req.cookies.employeeData) : null;

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
            </form>
        `);
    } else {
        res.send("No data found in Cookie.");
    }
});


app.get("/clearData", (req, res) => {
    res.clearCookie("employeeData");
    res.redirect("/clearForm");
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});
