//import posts model here

const addPosts = (req, res) => {
    //addPosts api logic here
};

const getAllPosts = (req, res) => {
    //getAllPosts api logic here
};

const getPostsByUserId = (req, res) => {
    //getPostsByUserId api logic here
};

const getPostById = (req, res) => {
    //getPostById api logic here
};

const updatePostById = (req, res) => {
    //updatePostById api logic here
};

const deletePostById = (req, res) => {
    //deletePostById api logic here
};


const PostsController = {
    addPosts,
    getAllPosts,
    getPostsByUserId,
    getPostById,
    updatePostById,
    deletePostById
};

module.exports = PostsController;