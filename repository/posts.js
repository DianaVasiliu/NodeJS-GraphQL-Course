const db = require('../models/index.js')

const getAllPosts = async () => {
    try {
        const allPosts = await db.Post.findAll()
        return allPosts
    } catch (error) {
        console.error('Something went wrong')
        return null
    }
}

const getPostById = async (id) => {
    const postId = parseInt(id)

    try {
        const post = await db.Post.findByPk(postId)
        return post
    } catch (error) {
        return null
    }
}

const createPost = async (req, res) => {
    const { title, body } = req.body
    const userId = req.params.id

    try {
        const user = await db.User.findByPk(userId)

        if (!user) {
            throw new Error('User not found')
        }

        const newPost = {
            title,
            body,
        }

        const createdPost = await user.createPost(newPost)
        console.log('createdPost', createdPost)

        res.status(201).send(newPost)
    } catch (error) {
        console.error('Something went wrong. ', error)
        res.send({ error: 'Something went wrong' })
    }
}

const addTagToPost = async (req, res) => {
    const postId = req.params.postId
    const tagId = req.params.tagId

    try {
        const post = await db.Post.findByPk(postId)
        const tag = await db.Tag.findByPk(tagId)

        if (!post) {
            throw new Error('Post not found')
        }
        if (!tag) {
            throw new Error('Tag not found')
        }

        await post.setTags(tag)

        const updatedPost = await db.Post.findByPk(postId)
        const updatedPostsTags = await updatedPost.getTags()

        const response = {
            ...updatedPost.toJSON(),
            tags: updatedPostsTags,
        }

        res.status(201).send(response)
    } catch (error) {
        console.error('Something went wrong. ', error)
        res.send({ error: 'Something went wrong' })
    }
}

const updatePost = async (req, res) => {
    const body = req.body

    try {
        await db.Post.update(body, {
            where: {
                id: req.params.id,
            },
        })
        const updatedPost = await db.Post.findByPk(req.params.id)
        res.send(updatedPost)
    } catch (error) {
        res.send({ error: 'Something went wrong' })
    }
}

const deletePost = async (req, res) => {
    try {
        await db.Post.destroy({
            where: {
                id: req.params.id,
            },
        })
        res.status(202).send('Post deleted successfully')
    } catch (error) {
        res.send({ error: 'Something went wrong' })
    }
}

module.exports = {
    addTagToPost,
    getAllPosts,
    getPostById,
    createPost,
    updatePost,
    deletePost,
}
