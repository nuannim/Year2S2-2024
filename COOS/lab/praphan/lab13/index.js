const express = require("express");
const app = express( );
const port = 3000;

app.set("view engine", "ejs");

app.get("/", (req, res) => {
    res.send("66070286 Panatsaya Boonprakob");
});

// index page
app.get("/dynamic", (req, res) => {
    res.render("dynamic");
});

// dynamic page
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}` );
});