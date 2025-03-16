const express = require("express");
const session = require("express-session");
const cookieParser = require("cookie-parser");
const PORT = 3000;
const app = express();
const sqlite3 = require('sqlite3').verbose();

app.use(express.urlencoded({ extended: true }));

// Connect to SQLite database
let db = new sqlite3.Database('customers.db', (err) => {
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
        // res.redirect("/");
        req.session.user = 'User';
        next();
    }
};

// Routes
// app.get("/", (req, res) => {
//     res.send(`Sessions and Cookies Example <a href="/login">Click here</a> to log-in.`);
// });

app.get("/", isAuthenticated, (req, res) => {
    let user = req.session.user;

    // res.send(`<h1>ye ${user}</h1>`);
    res.sendFile(__dirname + "/index.html");
    console.log('user:', user)
});


app.post('/', (req, res) => {
    let customerId = req.body.customerId;
    let firstName = req.body.firstName;
    let lastName = req.body.lastName;
    let address = req.body.address;
    let email = req.body.email;
    let phone = req.body.phone;

    // console.log('customerId:', customerId);
    // console.log('customerId:', customerId);
    // console.log('customerId:', customerId);
    // console.log('customerId:', customerId);
    // console.log('customerId:', customerId);
    // console.log('customerId:', customerId);

    const data = {
        customerId,
        firstName,
        lastName,
        address,
        email,
        phone
    }

    console.log ('data:', data);
    res.redirect('/')
});

app.get('/getdata', (req, res) =>{
    db.get(`select * from customers limit 1`, [], (err, row) => {
        if (err) return res.status(500).json({ error: err.message });
        console.log(row);
        res.json(row);
    })
});

// app.post("/login", express.urlencoded({ extended: true }), (req, res) => {
//     let username = req.body.username;
//     let password = req.body.password;
//     let sql = `SELECT * from users where username = '${username}';`;
//     db.each(sql, (err, row) => {
//         if (username === "admin" && password === "admin") {
//             // Store user data in the session
//             req.session.user = username;
//             res.cookie("sessionId", req.sessionID);
    
//             res.redirect("/profile");
//         }
//         if (username==row.username && password == row.password){
//             req.session.user = username;
//             res.cookie("sessionId", req.sessionID);
//             res.redirect("/profile");


//         }else {
//             res.send("Invalid credentials. Please try again.");
//         }
//     });
// });

// app.get("/profile", isAuthenticated, (req, res) => {
//     // Retrieve user data from the session
//     const username = req.session.user;
//     res.send(`Welcome, ${username} ! <a href="/logout">Logout</a>`);
// });

// app.get("/logout", (req, res) => {
//     // Destroy the session and redirect to the login page
//     req.session.destroy(() => {
//         res.clearCookie("sessionId");
//         res.redirect("/login");
//     });
// });



// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});