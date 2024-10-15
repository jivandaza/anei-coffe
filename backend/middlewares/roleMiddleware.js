// Función para autorizar roles de usuario en solicitudes
const authorizeRole = (role) => {
    return async (req, res, next) => {
        try {
            if (req.role === role) {
                next();
            } else {
                res.status(403).json({ error: 'Acceso denegado' });
            }
        } catch (error) {
            console.log(error.message || error);

            res.status(500).json({error: 'Ocurrió un error, intenta más tarde'});
        }
    };
};

export default authorizeRole;