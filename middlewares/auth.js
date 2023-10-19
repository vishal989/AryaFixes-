import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config()

export const authentication = (req, res, next) => {
    let { token } = req.headers
    if (token) {
        jwt.verify(token, process.env.SECRET, (err, data) => {
            if (err) {
                res.json("Give the correct token please")
            }
            req.headers["username"] = data.username
            next()
        })
    }
} 