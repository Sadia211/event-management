import React from 'react';
import { Outlet } from 'react-router-dom';

const Root = () => {
    return (
        <div className='max-w-6xl mx-auto font-poppins'>{/*setting the width of the outlet of the page*/}
            <Outlet></Outlet>
        </div>
    );
};

export default Root;