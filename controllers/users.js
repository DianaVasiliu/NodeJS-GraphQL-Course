const db = require('../models/index.js')

const getAllUsers = async (req, res) => {
    try {
        const allUsers = await db.User.findAll()
        res.status(200).send(allUsers)
    } catch (error) {
        console.error('Something went wrong')
        res.send({ error: 'Something went wrong' })
    }
}

// return user
const getUserById = async (req, res) => {
    try {
        const selectedUser = await db.User.findByPk(req.params.id)

        if (selectedUser === null) {
            res.send('User not found')
        } else {
            res.send(selectedUser)
        }
    } catch (error) {
        res.send({ error: 'Something went wrong' })
    }
}

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
const updateUser = async (req, res) => {
    const body = req.body

    try {
        await db.User.update(body, {
            where: {
                id: req.params.id,
            },
        })
        const updatedUser = await db.User.findByPk(req.params.id)
        res.send(updatedUser)
    } catch (error) {
        res.send({ error: 'Something went wrong' })
    }
}

// status code, no response
const deleteUser = async (req, res) => {
    try {
        await db.User.destroy({
            where: {
                id: req.params.id,
            },
        })
        res.status(202).send('User deleted successfully')
    } catch (error) {
        res.send({ error: 'Something went wrong' })
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser,
    updateUser,
    deleteUser,
}
