const express = require("express");
const path = require("path");
const port = 3000;
const sqlite3 = require('sqlite3').verbose();

// Creating the Express server
const app = express();

// Connect to SQLite database
let db = new sqlite3.Database('your-db-filename.db', (err) => {    
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
//   res.send("Hello! REST API");
  const endpoint = 'http://localhost:3000/data';    
  fetch(endpoint)
      .then(response => response.json())
      .then(empl => {
          console.log(empl);
          res.render('show', { data: empl });
        // res.send(empl);
      })
      .catch(error => {
          console.log(error);
      });
});

app.get('/data', (req, res) => {
    const data = [
        {
          "id": 1,
          "title": "คุกกี้เสี่ยงทาย (Koisuru Fortune Cookie)",
          "artist": "BNK48",
          "release_year": 2017,
          "album": "Koisuru Fortune Cookie",
          "duration": "4:45",
          "genre": "J-Pop",
          "youtube_url": "https://www.youtube.com/watch?v=mfqK8LkqAtg"
        },
        {
          "id": 2,
          "title": "RIVER",
          "artist": "BNK48",
          "release_year": 2018,
          "album": "RIVER",
          "duration": "4:35",
          "genre": "J-Pop",
          "youtube_url": "https://www.youtube.com/watch?v=o1mwD2oEkVg"
        },
        {
          "id": 3,
          "title": "เชียงใหม่ 106 (Chiang Mai 106)",
          "artist": "CGM48",
          "release_year": 2020,
          "album": "Chiang Mai 106",
          "duration": "4:50",
          "genre": "J-Pop",
          "youtube_url": "https://www.youtube.com/watch?v=JS_9ovlxzTo"
        },
        {
          "id": 4,
          "title": "มะลิ (Mali)",
          "artist": "CGM48",
          "release_year": 2022,
          "album": "Mali",
          "duration": "4:30",
          "genre": "J-Pop",
          "youtube_url": "https://www.youtube.com/watch?v=m5ZTIZM4uH8"
        },
        {
          "id": 5,
          "title": "Heavy Rotation",
          "artist": "BNK48",
          "release_year": 2019,
          "album": "Heavy Rotation",
          "duration": "4:40",
          "genre": "J-Pop",
          "youtube_url": "https://www.youtube.com/watch?v=1AUpLpB0c_M"
        }
      ];
    //   res.send(data);
    res.json(data)
      
})

app.listen(port, () => {
  console.log(`Starting node.js at port ${port}`);
});