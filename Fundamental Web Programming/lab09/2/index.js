const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

//* เพิ่มใช้งานไฟล์
const conn = require('./dbconn.js');

//* static resourse & template engine
app.use(express.static('public'));
app.set('view engine', 'ejs');

const bodyParser = require('body-parser');

// ใช้ body-parser เพื่อให้สามารถอ่านค่าจากฟอร์มได้
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "/public/form.html"));
});


app.get('/process_signin', function (req, res) {
    let formdata = {
        username2: req.query.username,
        password2: req.query.password,
    };
    console.log(formdata);  

    let sql = `SELECT username, password, email FROM users WHERE username = '${formdata.username2}' OR email = '${formdata.username2}'`;

    conn.query(sql, [formdata.username2, formdata.password2], function (err, result) {
        if (err) throw err;

        if (result.length === 0){
            return res.send("<h1>User not found</h1><a href='/'>Go back</a>");
        }else if ((result[0].username === formdata.username2 || result[0].email === formdata.username2 )&& result[0].password !== formdata.password2){
            return res.send("<h1>Wrong password, please try again</h1><a href='/'>Go back</a>");
        }else{
            res.send("<h1>Success</h1><a href='/'>Go back</a>");
        }
    });
    
})

app.listen(port, () => {
    console.log(`listening to port ${port}`);
}); 