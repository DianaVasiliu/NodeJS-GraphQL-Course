const db = require('../models/index.js')

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await db.User.findAll()
        res.send(allUsers)
    } catch (error) {
        console.error('Something went wrong')
        res.send({ error: 'Something went wrong' })
    }
}

// return user
const getUserById = (req, res) => {}

const createUser = async (req, res) => {
    const { email, firstName, lastName } = req.body

    try {
        const newUser = await db.User.create({
            email,
            firstName,
            lastName,
        })
        res.status(201).send(newUser)
    } catch (error) {
        console.error('Something went wrong')
        res.send({ error: 'Something went wrong' })
    }
}

// update user
const updateUser = (req, res) => {}

// status code, no response
const deleteUser = (req, res) => {}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}
