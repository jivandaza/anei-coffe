import jwt from 'jsonwebtoken';

const authToken = async (req, res, next) => {
    try {
        const token = req.cookies?.token;

        if (!token) {
            return res.clearCookie('token').status(401).json({ error: 'Sesión finalizada' });
        }

        jwt.verify(token, process.env.JWT_SECRET, function (err, decoded){
            if (err){
                return res.clearCookie('token').status(403).json({ error: 'Sesión expirada' });
            }

            req.userId = decoded?._id;
            req.role = decoded?.role;

            next();
        });
    } catch (error) {
        console.log(error.message || error);

        res.status(500).json({
            error : 'Ocurrió un error, intenta más tarde'
        });
    }
}

export default authToken;