import React from 'react';

const Links = React.memo(({ route }) => {
    const handleClick = (e) => {
        if (route.path.startsWith('#')) {
            e.preventDefault();
            const targetId = route.path.substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });
                if (targetId === 'services-section') {
                    window.dispatchEvent(new CustomEvent('servicesNavLinkClick'));
                } else if (targetId === 'solutions-section') {
                    window.dispatchEvent(new CustomEvent('solutionsNavLinkClick'));
                }
            }
        }
    };

    return (
        <div>
            <li className='mr-10 text-xl text-black cursor-pointer'>
                <a href={route.path} onClick={handleClick}>{route.name}</a>
            </li>
        </div>
    );
});

export default Links;