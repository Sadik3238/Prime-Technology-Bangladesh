import React from 'react';

const Links = React.memo(({ route }) => {
    return (
        <div>
            <li className='mr-10 text-xl text-white cursor-pointer'>
                <a href={route.path}>{route.name}</a>
            </li>
        </div>
    );
});

export default Links;