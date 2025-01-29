//* ไม่ได้ใช้ express
// const http = require('http') 
// const port = process.env.PORT || 3000 

// const fs = require('fs') 

// function serveStaticFile(res, path, contentType,
//     responseCode = 200) {
//     fs.readFile(__dirname + path, (err, data) => {
//         if (err) {
//             res.writeHead(500, { 'Content-Type': 'text/plain' })
//             return res.end('500 - Internal Error')
//         }
//         res.writeHead(responseCode, {
//             'Content-Type':
//                 contentType
//         })
//         res.end(data)
//     })
// } 
 
// const server = http.createServer((req,res) => {
//     const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
//     switch(path) {
//       case '':
//         serveStaticFile(res, '/public/home.html', 'text/html')
//         break
//       case '/about':
//         serveStaticFile(res, '/public/about.html', 'text/html')
//         break
//       case '/img/panda-logo.png':
//         serveStaticFile(res, '/public/img/panda-logo.png', 'image/png')
//         break
//       default:
//         serveStaticFile(res, '/public/404.html', 'text/html', 404)
//         break
//     }
//   })
 
// server.listen(port, () => console.log(`server started on 
// port ${port}; ` + 'press Ctrl-C to terminate....'))

// * ใช้ express
const express = require('express') //* import express
const app = express()
const port = 3000

app.get('/hello', function(req, res){
  res.send("Hello World!");
});

app.post('/hello', function(req, res){
  res.send("You just called the post method at '/hello'!\n");
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})

const path = require('path'); //* import path

// create directory 'public'
app.use(express.static('public'));
app.use(express.static('images'));

// Without middleware
app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '/public/home.html'));
});

app.get('/cat', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/cat.html'));
});

app.get('/dog', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/dog.html'));
});

app.get('/bird', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/bird.html'));
});

app.get('/about', function(req, res) {
  res.sendFile(path.join(__dirname, '/public/about.html'));
});
