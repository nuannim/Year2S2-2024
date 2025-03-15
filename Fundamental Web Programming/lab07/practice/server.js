//^ ข้อ 4 ใช้ยาก ไม่เอาหรอก

const http = require('http') 
const port = process.env.PORT || 3000 
 
// const server = http.createServer((req, res) => { 
//   res.writeHead(200, { 'Content-Type': 'text/plain' }) 
//   res.end('Hello world!') 
// }) 

const server = http.createServer((req,res) => {
    const path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase()
    switch(path) {
      case '':
        serveStaticFile(res, '/public/home.html', 'text/html')
        break
      case '/about':
        serveStaticFile(res, '/public/about.html', 'text/html')
        break
      case '/img/panda-logo.png':
        serveStaticFile(res, '/public/img/panda-logo.png', 'image/png')
        break
      default:
        serveStaticFile(res, '/public/404.html', 'text/html', 404)
        break
    }
  })
 
server.listen(port, () => console.log(`server started on 
port ${port}; ` + 'press Ctrl-C to terminate....'))

const fs = require('fs') 

function serveStaticFile(res, path, contentType,
    responseCode = 200) {
    fs.readFile(__dirname + path, (err, data) => {
        if (err) {
            res.writeHead(500, { 'Content-Type': 'text/plain' })
            return res.end('500 - Internal Error')
        }
        res.writeHead(responseCode, {
            'Content-Type':
                contentType
        })
        res.end(data)
    })
} 

