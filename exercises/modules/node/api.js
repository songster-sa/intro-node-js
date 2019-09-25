const data = require("./data");

var getUserById = (userId, cb) => {
    setTimeout(() => {
        const user = data.users.find(user => user.id === userId)
        cb(user)
    }, 150)
}

var getPostsForUser = (userId, cb) => {
    setTimeout(() => {
        const posts = data.posts.filter(post => post.createdBy === userId)
        cb(posts)
    }, 150)
}

module.exports = {getUserById, getPostsForUser}
