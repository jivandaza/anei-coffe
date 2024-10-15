import React, { useState, useEffect }           from 'react';
import { useAuthService }                       from '../services/authService';
import { userApi }                              from '../common';
import moment                                   from 'moment';
import                                          'moment/locale/es';

const AllUsers = () => {

    const { handleSessionClosed } = useAuthService();

    const [isLoading, setIsLoading] = useState(false);
    const [allUsers, setAllUsers] = useState([]);

    const fetchAllUsers = async () => {
        setIsLoading(true);

        const response = await fetch(userApi.getAllUser.url, {
            method: userApi.getAllUser.method,
            credentials: 'include'
        });

        const data = await response.json();

        if (response.ok)
            setAllUsers(data.users);
        else
            handleSessionClosed(data.error);

        setIsLoading(false);
    };

    useEffect(() => {
        fetchAllUsers();
    }, []);

    return (
        <section className='flex flex-col h-full overflow-y-scroll'>
            <table className='w-full'>
                <thead>
                <tr className='bg-[#ceb011] text-white uppercase'>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Correo Electrónico</th>
                    <th>Rol</th>
                    <th>Fecha de Creación</th>
                </tr>
                </thead>
                <tbody>
                {
                    !isLoading && (
                        allUsers.map((item, index) => {
                            return (
                                <tr key={index} className='text-center border'>
                                    <td className='border'>{index+1}</td>
                                    <td className='border'>{item?.name}</td>
                                    <td className='border'>{item?.email}</td>
                                    <td className='border'>{item?.role}</td>
                                    <td className='border'>{moment(item?.createdAt).format('LL')}</td>
                                </tr>
                            )
                        })
                    )
                }
                </tbody>
            </table>
            {
                isLoading && (
                    <section className='flex justify-center items-center h-full'>
                        <span className='loader'></span>
                    </section>
                )
            }
        </section>
    );
};

export default AllUsers;