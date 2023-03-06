

//import jsonwebtoken
const jwt = require("jsonwebtoken")
const SECRET_KEY = "BeruangKutub"

//endpoint authorization
auth = (req, res, next) => {

    //import authorization pada header
    let header = req.headers.authorization//input header didapatkan dari postman header
    //get token
    let token = header && header.split(" ")[1]

    //setting header
    let jwtHeader = {
        algorithm: "HS256"
    }

    if (token == null) {
        res.status(401).json({ message: "Unauthorized" })
    } else {//verify apakah token sesuai dengan apa yanng tadi dikirimkan
        jwt.verify(token, SECRET_KEY, jwtHeader, (error, user) => {
            if (error) {
                res
                    .status(401)
                    .json({
                        message: "Invalid token"
                    })
            } else {
                console.log(user);
                next()
            }
        })
    }
}


module.exports = auth
