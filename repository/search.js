const db = require('../models')
const { Op } = require('sequelize')

const search = async (query) => {
    try {
        // Users
        const users = db.User.findAll({
            where: {
                firstName: {
                    [Op.like]: `%${query}%`,
                },
            },
        })

        // Posts
        const posts = db.Post.findAll({
            where: {
                title: {
                    [Op.like]: `%${query}%`,
                },
            },
        })

        const results = await Promise.all([users, posts])
        console.log('results', results)
        return [...results[0], ...results[1]]
    } catch (e) {
        console.error('Error: ' + e.message)
        return []
    }
}

module.exports = {
    search,
}
