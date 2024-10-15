import React, { useContext }                from 'react';
import { Navigate, Outlet }                 from 'react-router-dom';
import { useSelector }                      from 'react-redux';
import ROLE                                 from '../constants/role';
import Context                              from '../context';

const PrivateRouteUser = () => {
    const { isLoading } = useContext(Context);
    const user = useSelector(state => state?.user?.user);

    if (!isLoading) {
        if (!user)
            return <Navigate to='/' />;

        if (user?.role === ROLE.ADMIN )
            return <Navigate to='admin/products' />;
    }

    return <Outlet />;
}

export default PrivateRouteUser;