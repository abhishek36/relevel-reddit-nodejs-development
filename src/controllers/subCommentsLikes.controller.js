//import SubComments model here

const addSubComments = (req, res) => {
    //addSubComments api logic here
};

const getAllSubCommentsByPostId = (req, res) => {
    //getAllSubCommentsByPostId api logic here
};

const getSubCommentsByUserId = (req, res) => {
    //getSubCommentsByUserId api logic here
};

const getSubCommentById = (req, res) => {
    //getSubCommentById api logic here
};

const updateSubCommentById = (req, res) => {
    //updateSubCommentById api logic here
};

const deleteSubCommentById = (req, res) => {
    //deleteSubCommentById api logic here
};


const SubCommentsController = {
    addSubComments,
    getAllSubCommentsByPostId,
    getSubCommentsByUserId,
    getSubCommentById,
    updateSubCommentById,
    deleteSubCommentById
};

module.exports = SubCommentsController;