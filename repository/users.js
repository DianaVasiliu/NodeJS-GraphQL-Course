const db = require('../models/index.js')

const getAllUsers = async () => {
    try {
        const allUsers = await db.User.findAll()
        return allUsers
    } catch (error) {
        console.error('Something went wrong')
        return null
    }
}

// return user
const getUserById = async (id) => {
    return await db.User.findByPk(id)
}

const createUser = async (args) => {
    const { email, password, firstName, lastName } = args
    try {
        const newUser = await db.User.create({
            email,
            password,
            firstName,
            lastName,
        })

        return newUser
    } catch (error) {
        console.error('Error creating user: ', error)
        return null
    }
}

// update user
const updateUser = async (args, context) => {
    const { user } = context

    if (!user) {
        return null
    }

    const { id } = user
    const { email, firstName, lastName } = args

    try {
        await db.User.update(
            {
                email,
                firstName,
                lastName,
            },
            {
                where: {
                    id,
                },
            }
        )

        return await db.User.findByPk(id)
    } catch (e) {
        console.error('Error updating user: ', e)
        return null
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
