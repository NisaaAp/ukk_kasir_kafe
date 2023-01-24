//import library
const express = require('express');
const bodyParser = require('body-parser');
const md5 = require('md5');

//implementasi library
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//import multer
const multer = require("multer")
const path = require("path")
const fs = require("fs")

//membuat konfigurasi diskStorage multer
//config storage image
const storage = multer.diskStorage({
    destination:(req,file,cb) => {
        cb(null,"./image/user")
    },
    filename: (req,file,cb) => {
        cb(null, "img-" + Date.now() + path.extname(file.originalname))
    }
})
let upload = multer({storage: storage})

//import sequelize op
const Sequelize = require("sequelize")
const Op = Sequelize.Op

//import model
const model = require('../models/index');
const user = model.user


 
//endpoint menampilkan semua data user, method: GET, function: findAll()
app.get("/", (req,res) => {
    user.findAll()
        .then(result => {
            res.json({
                user : result
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
})

//GET user by ID, METHOD: GET, FUNCTION: findOne
app.get("/id_user/:id_user",async (req, res) => {
    let param = {
        id_user: req.params.id_user
    }
    user.findOne({where: param})
    .then(result => {
        res.json({
            user: result
        })
    })
    .catch(error => {
        res.json({
            message: error.message
        })
    })   
        //jika eror masuk ke blok .catch diambil erornya apa dan ditampilkan errornya

})

//post user 
app.post("/", upload.single("image"), (req,res) => {
    if (!req.file) {
        res.json({
            message: "No uploaded file"
        })
    } else {
        let data = {
            name: req.body.name,
            image: req.file.filename,
            phone: req.body.phone,
            address: req.body.address,
            role: req.body.role,
            username: req.body.username,
            password: md5(req.body.password)
        }
        user.create(data)
        .then(result => {
            res.json({
                message: "data has been inserted"
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
    }
})

//endpoint mengupdate data user, METHOD: PUT, function:update
app.put("/:id_user", upload.single("image"), (req, res) => {
    let param = {
        id_user: req.params.id_user
    }
    let data = {
        name: req.body.name,
        phone: req.body.phone,
        address: req.body.address,
        role: req.body.role,
        username: req.body.username
        // password: md5(req.body.password)
    }
    if (req.file) {
        // get data by id
        const row = user.findOne({where: param})
        .then(result => {
            let oldFileName = result.image
           
            // delete old file
            let dir = path.join(__dirname,"../image/user",oldFileName)
            fs.unlink(dir, err => console.log(err))
        })
        .catch(error => {
            console.log(error.message);
        })
 
        // set new filename
        data.image = req.file.filename
    }
    if(req.body.password){
        data.password = md5(req.body.password)
    }
    user.update(data, { where: param })
        .then(result => {
            res.json({
                message: "data has been updated"
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
})

//update password user, method: put, function: update
app.put("/pass/:id_user", (req, res) => {
    let param = {
        id_user: req.params.id_user
    }
    let data = {
        password: md5(req.body.password)
    }
    user.update(data, { where: param })
        .then(result => {
            res.json({
                message: "data has been updated"
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
})

app.delete("/:id_user", async (req, res) =>{
    try {
        let param = { id_user: req.params.id_user}
        let result = await user.findOne({where: param})
        let oldFileName = result.image
           
        // delete old file
        let dir = path.join(__dirname,"../image/user",oldFileName)
        fs.unlink(dir, err => console.log(err))
 
        // delete data
        user.destroy({where: param})
        .then(result => {
           
            res.json({
                message: "data has been deleted",
            })
        })
        .catch(error => {
            res.json({
                message: error.message
            })
        })
 
    } catch (error) {
        res.json({
            message: error.message
        })
    }
})

   //search user by name, address, : method : post
   app.post("/search", async (req,res)=>{
    let keyword = req.body.keyword
    let result = await user.findAll({
        
            where: {
                [Op.or]: [
                    {
                        id_user: {
                            [Op.like]: `%${keyword}%`
                        }
                    },
                    {
                        name: {
                            [Op.like]: `%${keyword}%`
                        }
                    },
                    {
                        role: {
                            [Op.like]: `%${keyword}%`
                        }
                    }
                ]
            }  
    })
    res.json({
        user: result
    })

})

module.exports = app;