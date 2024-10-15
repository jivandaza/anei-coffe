import UserModel from './../../models/userModel.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const loginCtrl = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email) {
            return res.status(400).json({error: 'El correo electrónico es obligatorio'});
        }
        if ( password.length < 6 ) {
            return res.status(400).json({error: 'La contraseña permite mínimo 6 caracteres'});
        }

        const user = await UserModel.findOne({email});

        if (!user) {
            return res.status(400).json({error: 'El correo electrónico no existe'});
        }

        const checkPassword = await bcrypt.compare(password, user.password);

        if (checkPassword) {
            const tokenData = {
                _id: user._id,
                email: user.email,
                role: user.role
            };

            const token = await jwt.sign(
                tokenData,
                process.env.JWT_SECRET,
                { expiresIn: process.env.JWT_EXPIRES_IN }
            );

            const cookieOption = {
                httpOnly: true,
                sameSite: 'Strict',
                path: '/'
            }

            return res.cookie('token', token, cookieOption).status(201).json({
                message: 'Sesión exitosa'
            });
        } else {
            return res.status(400).json({error: 'La contraseña no coincide'});
        }
    } catch (error) {
        console.log(error.message || error);

        res.status(500).json({
            error: 'Ocurrió un error, intenta más tarde',
        });
    }
}

export default loginCtrl;