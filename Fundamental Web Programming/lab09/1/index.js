const express = require('express');
const path = require('path');
const app = express();
const port = 3000;


const conn = require('./dbconn.js');



app.get('/create', function (req, res) {
    let sql =` create table users (
        username varchar(20),
        password varchar(20),
        email varchar(50),
        firstname varchar(20),
        lastname varchar(20),
        age INT,
        address varchar(50),
        phone varchar(11)
    );`;    
    conn.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Created successfully.");
    }); 
})


app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get('/show', function (req, res) {

    const sql = 'select * from users';
    conn.query(sql, function (err, result, fields) {
        if (err) throw err;
        res.render('show', { data: result })
        res.end()
    })
});

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, "/public/form.html"));
});

app.get('/process_get', function (req, res) {
    let formdata = {
        username: req.query.username,
        password: req.query.password,
        email: req.query.email,
        firstname: req.query.firstname,
        lastname: req.query.lastname,
        age: req.query.age,
        address: req.query.address,
        phone: req.query.phone


    };
    console.log(formdata);  

    let sql = `INSERT INTO users (username, password, email, firstname, lastname, age, address, phone) 
    values ('${formdata.username}','${formdata.password}','${formdata.email}','${formdata.firstname}','${formdata.lastname}','${formdata.age}','${formdata.address}','${formdata.phone}'); `;
    console.log(sql);
    conn.query(sql, function (err, result) {
        if (err) throw err;
        console.log("a record inserted");
    });
})




app.listen(port, () => {
    console.log(`listening to port ${port}`);
}); 