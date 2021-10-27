import jwt from 'jsonwebtoken'
import MY_SECRET_KEY from '../config/jwt.js'

const authorizationMiddleware = (req, res, next) => {
    const authorization = req.headers.authorization
    if (authorization) {
        try {
            const decoded = jwt.verify(
                authorization.replace('Bearer ', ''),
                MY_SECRET_KEY
            )
            next()
        } catch (e) {
            res.send({
                error: 'Invalid Token',
            })
        }
    } else {
        res.send({
            error: 'Invalid Token',
        })
    }
}

export default authorizationMiddleware
