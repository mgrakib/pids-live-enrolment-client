import React from 'react';
import { Outlet } from 'react-router-dom';
import { FaRegWindowClose } from "react-icons/fa";

const Home = () => {
    return (
        <div className='short-container'>
            <Outlet />
            <div className='h-full w-[50px] bg-black ml-auto'>
                <div className='text-white'>
                    <FaRegWindowClose />
                </div>
            </div>
        </div>
    );
};

export default Home;