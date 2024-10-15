import UserModel from './../../models/userModel.js';

const getAllUsers = async (req, res) => {
    try {
        const users = await UserModel.find({ role: 'GENERAL' }).select('-password');

        res.status(200).json({
            users
        });
    } catch (err) {
        console.log(err.message || err);

        res.status(500).json({
            error: 'Ocurrió un error, intenta más tarde'
        });
    }
}

export default getAllUsers;