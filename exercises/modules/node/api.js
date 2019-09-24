let data = require("./data");

let getUserById = (userId) => {
    return data.users.find(user => user.id === userId)
}

let getPostsForUser = (userId) => {
    return data.posts.filter(function (p) {
        return p.createdBy == userId
    })
}

setTimeout(getUserById, 150)
setTimeout(getPostsForUser, 150)

module.exports = {getUserById, getPostsForUser}
