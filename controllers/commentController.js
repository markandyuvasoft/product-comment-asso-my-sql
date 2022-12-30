const db = require('../models')

// model
const Comment = db.comments

// functions

//1. Add Comment

const addComment = async (req, res) => {

    const id = req.params.id

    let data = {
        product_id: id,
        // comment: req.body.comment,
        text: req.body.text
    }

    const comment = await Comment.create(data)
    res.status(200).send(comment)

}

// 2. Get All Comments

const getAllComments = async (req, res) => {

    const comments = await Comment.findAll({})
    res.status(200).send(comments)

}

module.exports = {
    addComment,
    getAllComments
}