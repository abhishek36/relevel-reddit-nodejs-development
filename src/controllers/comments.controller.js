//import comments model here

const addComments = (req, res) => {
    //addComments api logic here
};

const getAllCommentsByPostId = (req, res) => {
    //getAllCommentsByPostId api logic here
};

const getcommentsByUserId = (req, res) => {
    //getcommentsByUserId api logic here
};

const getCommentById = (req, res) => {
    //getCommentById api logic here
};

const updateCommentById = (req, res) => {
    //updateCommentById api logic here
};

const deleteCommentById = (req, res) => {
    //deleteCommentById api logic here
};


const CommentsController = {
    addComments,
    getAllCommentsByPostId,
    getcommentsByUserId,
    getCommentById,
    updateCommentById,
    deleteCommentById
};

module.exports = CommentsController;