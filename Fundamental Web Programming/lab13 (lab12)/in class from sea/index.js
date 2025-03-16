// const express = require('express');
// const cookieParser = require("cookie-parser");
// const sessions = require('express-session');
// const http = require('http');
// const PORT = 3000;
// const app = express();

// // creating 24 hours from milliseconds
// const oneDay = 1000 * 60 * 60 * 24;

// //session middleware
// app.use(sessions({
// secret: "thisismysecretkey",
// saveUninitialized:true,
// cookie: { maxAge: oneDay },
// resave: false
// }));

// app.use(cookieParser());

// app.get('/', function(req, res){
//     if(req.session.page_views){
//        req.session.page_views++;
//        res.send("You visited this page " + req.session.page_views + " times");
//     } else {
//        req.session.page_views = 1;
//        res.send("Welcome to this page for the first time!");
//     }
//  });
 
// app.get('/set',function(req, res){
// req.session.user = { name:'Johhn Doe' };
// res.send('Session set ' + req.sessionID);
// });

// app.get('/get',function(req, res){
// res.send(req.session.user);
// });

// app.listen(PORT, () => {
//     console.log(`Server is running on http://localhost:${PORT}`);
// });

const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const PORT = 3000;
const app = express();
const sqlite3 = require('sqlite3').verbose();

// Connect to SQLite database
let db = new sqlite3.Database('users.db', (err) => {    
    if (err) {
        return console.error(err.message);
    }
    console.log('Connected to the SQlite database.');
});


// Middleware setup
app.use(
    session({
        secret: "your-secret-key",
        resave: false,
        saveUninitialized: false,
    })
);

app.use(cookieParser());

// Middleware to check if the user is authenticated
const isAuthenticated = (req, res, next) => {
    if (req.session.user) {
        next();
    } else {
        res.redirect("/login");
    }
};

// Routes
app.get("/", (req, res) => {
    res.send(`Sessions and Cookies Example <a href="/login">Click here</a> to log-in.`);
});

app.get("/login", (req, res) => {
    res.sendFile(__dirname + "/login.html");
});

app.post("/login", express.urlencoded({ extended: true }), (req, res) => {
    let username = req.body.username;
    let password = req.body.password;

    console.log('username:', username);
    console.log('password', password);

    if (username === "admin" && password === "admin") {
        console.log('if condition: admin');
        // Store user data in the session
        req.session.user = username;
        res.cookie("sessionId", req.sessionID);

        res.redirect("/profile");
    } else {
        console.log('else condition: not admin');

        let sql = `SELECT * from users where username = '${username}';`;
        // db.each(sql, (err, row) => { // * แบบนี้จำไม่มีอะไรส่งกลับมา ใช้เช็คว่ามีบัญชีอยู่แล้วไม่ได้

        //     console.log('row:', row);
        //     if (username==row.username && password == row.password) {
        //         req.session.user = username;
        //         res.cookie("sessionId", req.sessionID);
        //         res.redirect("/profile");

        //     } else {
        //         res.send("Invalid credentials. Please try again.");
        //     }
        // });
        db.all(sql, (err, rows) => {
            if (err) {
                console.log(err.message);
            }

            console.log('rows:', rows);
            if (rows.length > 0) {
                if (username == rows[0].username && password == rows[0].password) {
                    req.session.user = username;
                    res.cookie("sessionId", req.sessionID);
                    res.redirect("/profile");
                } else {
                    res.send("Invalid credentials. Please try again.");
                }
            } else {
                res.send("account not found. Please try again.");
            }
        })
    }
});

app.get("/profile", isAuthenticated, (req, res) => {
    // Retrieve user data from the session
    const username = req.session.user;
    res.send(`Welcome, ${username} ! <a href="/logout">Logout</a>`);
});

app.get("/logout", (req, res) => {
    // Destroy the session and redirect to the login page
    req.session.destroy(() => {
        res.clearCookie("sessionId");
        res.redirect("/login");
    });
});



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});