import UserModel from './../../models/userModel.js';
import bcrypt from 'bcryptjs';

const registerCtrl = async (req, res) => {
    try {
        const { name, email, password, phone } = req.body;

        if (!name) {
            return res.status(400).json({error: 'El nombre es obligatorio'});
        }
        if (!email) {
            return res.status(400).json({error: 'El correo electrónico es obligatorio'});
        }
        if (!phone) {
            return res.status(400).json({error: 'El número de celular es obligatorio'});
        }
        if ( password.length < 6 ) {
            return res.status(400).json({error: 'La contraseña permite mínimo 6 caracteres'});
        }

        const user = await UserModel.findOne({email});

        if ( user ) {
            return res.status(400).json({error: 'El correo electrónico ya existe'});
        }

        const salt = bcrypt.genSaltSync(10);
        const hashPassword = bcrypt.hashSync(password, salt);

        if ( !hashPassword ) {
            return res.status(400).json({error: 'Algo salió mal, inténtalo más tarde'});
        }

        const payload = {
            ...req.body,
            password: hashPassword
        }

        const data = new UserModel(payload);
        await data.save();

        return res.status(201).json({
            message: 'Registrado exitosamente'
        });
    } catch (error) {
        console.log(error.message || error);

        res.status(500).json({
            error: 'Ocurrió un error, intenta más tarde',
        });
    }
};

export default registerCtrl;