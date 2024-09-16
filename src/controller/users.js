const UsersModel = require("../models/users")

const getAllUsers = async (req, res) => {
    try {
        const [ data ] = await UsersModel.getAllUsers();
    
        res.json({
            message: "Get all users success",
            data: data
        })
        
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            serverMessage: error
        })
    }
};

const createUser = async (req, res) => {
    const {body} = req;

    if (!body.name || !body.email || !body.address) {
        return res.status(400).json({
            message: "Bad request"
        })
    }
    
    try {
        await UsersModel.createNewUser(body);
        res.status(201).json({
            message: "create user success",
            data: body
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            serverMessage: error
        })
    }
};

const updateUser = async (req, res) => {
    const {idUser} = req.params;
    const {body} = req;
    try {
        await UsersModel.updateUser(body, idUser);
        res.json({
            message: "update user success",
            data: {
                id: idUser,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            serverMessage: error
        })
    }
}

const deleteUser = async (req, res) => {
    const { idUser } = req.params;
    try {
        await UsersModel.deleteUser(idUser)
        res.status(200).json({
            message: "delete user success"
        })
    } catch (error) {
        res.status(500).json({
            message: "Server error",
            serverMessage: error
        })
    }
}

module.exports = {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser
}