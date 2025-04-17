import React from 'react';

const Link = ({route}) => {


    return (
        <div>
            <li className='mr-6 my-3 md:my-6'>
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
};

export default Link;