import UserModel from './../../models/userModel.js';

const getUserCtrl = async (req, res) => {
    try {
        const user = await UserModel.findById(req?.userId).select('-password');

        res.status(200).json({
            user
        });
    } catch (err) {
        console.log(err.message || err);

        res.status(500).json({
            error : 'Ocurrió un error, intenta más tarde',
        });
    }
}

export default getUserCtrl;