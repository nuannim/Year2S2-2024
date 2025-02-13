// index.js
const express = require('express');
const path = require('path');
const app = express();
const port = 3000;

const conn = require('./dbconn.js');

app.use(express.static('public'));

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, "/public/song.html"));
});

app.get('/api/datagetinfo', function (req, res) {
    let sql = `SELECT s.song_name, s.song_release_date, s.song_type, a.artist_name FROM songs s LEFT JOIN artists a ON s.artist = a.artist_id`;
    console.log(sql);
    conn.query(sql, function (err, result) {
        if (err) throw err;
        console.log("Success");
        res.json(result)
    });
    
})

app.listen(port, () => {
    console.log(`listening to port ${port}`);
});
