//import library
const express = require('express');
const bodyParser = require('body-parser');

//implementasi library
const app = express();
app.use(express.json())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

const multer = require("multer")
const path = require("path")
const fs = require("fs")//untuk membaca file sistem (dimana file itu)

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./image/menu")
    },
    filename: (req, file, cb) => {
        cb(null, "menu-" + Date.now() + path.extname(file.originalname))
    }
})
let upload = multer({ storage: storage })

//import model
const models = require('../models/index');
const menu = models.menu

//import sequelize op
const Sequelize = require("sequelize");
const Op = Sequelize.Op

//GET MENU , METHOD: GET, FUNCTION: findAll
//menampilkan seluruh data MENU
app.get("/", (req, res) => {
    menu.findAll()
        .then(menu => {
            res.json({
                count: menu.length,
                menu: menu
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })//jika eror masuk ke blok .catch diambil erornya apa dan ditampilkan errornya
})

//GET MENU by ID, METHOD: GET, FUNCTION: findOne
app.get("/:id_menu", (req, res) => {
    menu.findOne({ where: { id_menu: req.params.id_menu } })
        .then(result => {
            res.json({
                menu: result
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })//jika eror masuk ke blok .catch diambil erornya apa dan ditampilkan errornya

})

app.post("/", upload.single("image"), (req, res) => {
    if (!req.file) {
        res.json({
            message: "No Uploaded File"
        })
    } else {
        let data = {
            nama_menu: req.body.nama_menu,
            jenis: req.body.jenis,
            deskripsi: req.body.deskripsi,
            image: req.file.filename,
            price: req.body.price,
            stock: req.body.stock
        }
        menu.create(data)
            .then(result => {
                res.json({
                    message: "Data has been inserted"
                })
            })
            .catch(error => {
                res.json({
                    message: error.message
                })
            })
    }
})


app.put("/:id", upload.single("image"), (req, res) => {
    let param = { id_menu: req.params.id }
    let data = {
        nama_menu: req.body.nama_menu,
        jenis: req.body.jenis,
        deskripsi: req.body.deskripsi,
        price: req.body.price,
        stock: req.body.stock
    }
    if (req.file) {
        const row = menu.findOne({ where: param })
            .then(result => {
                let oldFileName = result.image

                //delete old file
                let dir = path.join(__dirname, "../image/menu", oldFileName)
                fs.unlink(dir, err => console.log(err))
            })
            .catch(error => {
                console.log(error.message);

            })
        data.image = req.file.filename
    }

    menu.update(data, { where: param })
        .then(result => {
            res.json({
                message: "Data has been Updated"
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
})


app.delete("/:id", async (req, res) => {
    try {
        let param = { id_menu: req.params.id }
        let result = await menu.findOne({ where: param })
        let oldFileName = result.image

        //delete oldfile
        let dir = path.join(__dirname, "../image/menu", oldFileName)
        fs.unlink(dir, err => console.log(err))

        //delete data
        menu.destroy({ where: param })
            .then(result => {
                res.json({
                    message: "Data has been deleted",
                })
            })
            .catch(error => {
                res.json({
                    message: error.message
                })
            })
    }
    catch (error) {
        res.json({
            message: error.message
        })
    }
})

//search for menu, method:post

app.post("/search", async (req, res) => {
    let keyword = req.body.keyword
    let result = await menu.findAll({
        where: {
            [Op.or]: [
                {
                    id_menu: {
                        [Op.like]: `%${keyword}%`
                    }
                },
                {
                    nama_menu: {
                        [Op.like]: `%${keyword}%`
                    }
                },
                {
                    jenis: {
                        [Op.like]: `%${keyword}%`
                    }
                },
                {
                    stock: {
                        [Op.like]: `%${keyword}%`
                    }
                }
            ]
        }
    })
    res.json({
        menu: result
    })
})

module.exports = app;