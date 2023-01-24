
//import
const express = require('express');
const cors = require('cors');

//implementasi
const app = express();
app.use(cors());

app.use(express.static(__dirname)) //image

//endpoint nanti ditambahkan di sini

const user = require("./routes/user") //import
app.use("/cafe/user", user)

const menu = require("./routes/menu") //import
app.use("/cafe/menu", menu)


const meja = require("./routes/meja") //import
app.use("/cafe/meja", meja)

const transaksi = require("./routes/transaksi")
app.use("/cafe/trans", transaksi)

//run server
app.listen(8008, () => {
    console.log('server run on port 8008')
})
