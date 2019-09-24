let api = require("./api")

let showPostsForCurrentUser = (userId) => {
    return api.getPostsForUser(userId)
}

let showUserProfile = (userId) => {
    return api.getUserById(userId)
}

module.exports = {showPostsForCurrentUser, showUserProfile}