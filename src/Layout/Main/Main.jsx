import React from 'react';
import { Outlet } from 'react-router-dom';

const Main = () => {
    return (
        <div className='w-full h-[100vh] flex items-center justify-center'>
            <Outlet />
        </div>
    );
};

export default Main;