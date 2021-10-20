import jwt from 'jsonwebtoken'
import findUser from '../helpers/findUser.js'
import MY_SECRET_KEY from '../config/jwt.js'

const handleLogin = (req, res) => {
    const body = req.body
    const username = body.username
    const password = body.password

    if (findUser(username, password)) {
        const token = jwt.sign({}, MY_SECRET_KEY)
        res.send({
            token,
        })
    } else {
        res.status(401).send({
            token: null,
        })
    }
}

export default handleLogin
