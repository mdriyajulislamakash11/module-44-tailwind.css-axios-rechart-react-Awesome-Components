import React from 'react';

const Link = ({route}) => {


    return (
        <div>
            <li className='mx-6 my-3 md:my-6 hover:bg-slate-200 px-6'>
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

export default Link;