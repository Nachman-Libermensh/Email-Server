async function auth(req, res, next) {
    try{
        let token = req.headers.autherization?.split('Bearer ')[1]
        let user = { _id: "i823idqiasd932", email: "aviad@gmail.com" }//jwt.verify(token,secret)
        req.body.user = user
        next()
    }
    catch{
        res.sendStatus(401)
    }
}



module.exports= {auth}