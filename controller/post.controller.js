const db = require('../db')

class PostController {
    async createPost(req, res) {
        const {title, content, userId} = req.body
        console.log(title, content, userId);
        const newPost= await db.query('INSERT INTO posts (title, content, user_id) values ($1, $2, $3)', [title, content, userId])
        console.log('ok');
        res.json(newPost.rows[0])
    }

    async getPostByUser(req, res) {
        const id = req.query.id
        const posts = await db.query('SELECT * FROM posts WHERE user_id = $1', [id])
        res.json(posts.rows) 
    }
    // async getOneUser(req, res) {

    //     const id = req.params.id
    //     const user = await db.query('SELECT * FROM person where id = $1', [id])
    //     res.json(user)
    // }
    // async updateUser(req, res) {
    //     const {id, name, surname} = req.body
    //     const user = await db.query('UPDATE person set name = $1, surname = $2 where id = $3 RETURNING *',[name, surname, id])
    //     res.json(user.rows[0])
    // }
    // async deleteUser(req, res) {
    //     const id = req.params.id
    //     const user = await db.query('DELETE FROM person where id = $1',[id])
    //     res.json(user.rows[0])
    // }
}

module.exports = new PostController()