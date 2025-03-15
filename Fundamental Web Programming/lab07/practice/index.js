const express = require('express')
const app = express()
const port = 3000

const path = require('path');

// create directory 'public'
app.use(express.static('public'));
app.use(express.static('images'));

// Without middleware
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/home.html'));
});

// app.get('/hello', function(req, res){
//     res.send("Hello World!");
// });
  
// app.post('/hello', function(req, res){
//     res.send("You just called the post method at '/hello'!\n");
// });

app.get('/about', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/about.html'));
});

app.get('/cats', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/cats.html'));
});

app.get('/dogs', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/dogs.html'));
});

app.get('/birds', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/birds.html'));
});



app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})

