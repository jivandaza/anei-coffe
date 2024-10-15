import React, {useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Context from "../context";
import {useSelector} from "react-redux";
import ROLE from "../constants/role";

const PageNotFound = () => {

    const { setShowUserGeneralComponent } = useContext(Context);
    const user = useSelector(state => state?.user?.user);

    useEffect(() => {
        setShowUserGeneralComponent(false);
    }, []);

    return (
        <div className="h-screen bg-white flex flex-col items-center justify-center">
            <h1 className="text-3xl font-bold">404 - Pagina no encontrada</h1>
            <p className="mt-4">Lo sentimos, la página que estás buscando no existe.</p>
            <Link
                to={!user ? '/' : user?.role === ROLE.GENERAL ? '/' : user?.role === ROLE.ADMIN ? '/admin/products' : '/'}
                onClick={() => setShowUserGeneralComponent(true)}
                className="bg-[#593d2b] mt-6 text-white rounded-full px-3 py-1 hover:scale-110 transition-all"
            >
                Volver
            </Link>
        </div>
    );
};

export default PageNotFound;