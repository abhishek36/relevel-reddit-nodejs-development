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

const updatePost = (req, res) => {
    //updatePost api logic here
};

const deletePost = (req, res) => {
    //deletePost api logic here
};


const PostsController = {
    addPosts,
    getAllPosts,
    getPostsByUserId,
    getPostById,
    updatePost,
    deletePost
};

module.exports = PostsController;