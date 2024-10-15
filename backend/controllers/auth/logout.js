const logoutCtrl = async (req, res) => {
    try {
        res.clearCookie('token', {
            httpOnly: true,
            sameSite: 'Strict',
            path: '/'
        });

        res.status(200).json({
            message: 'Sesión cerrada'
        });
    } catch (err) {
        console.log(err.message || err);

        res.status(500).json({
            error: 'Ocurrió un error, intenta más tarde'
        });
    }
}

export default logoutCtrl;