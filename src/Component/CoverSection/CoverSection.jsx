import React, { useEffect, useState } from 'react';

const coverImgUrl = "https://i.ibb.co.com/M5Dw7cZS/erp.jpg"

const CoverSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            const element = document.getElementById('cover-text');
            if (element) {
                const rect = element.getBoundingClientRect();
                const isElementVisible = (rect.top <= window.innerHeight && rect.bottom >= 0);
                setIsVisible(isElementVisible);
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial visibility

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            className="bg-cover bg-no-repeat lg:h-screen lg:relative pt-20"
            style={{ backgroundImage: `url(${coverImgUrl})` }}>

            <div
                id="cover-text"
                className={`text-white lg:absolute lg:bottom-10 lg:left-10 lg:text-left transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
                    }`}
            >
                <h1 className='font-bold lg:text-5xl'>PRIME TECHNOLOGY <br />   BANGLADESH</h1>
                <h3 className='lg:text-2xl lg:mt-2'>SMART SOFTWARE, SMART BUSINESS</h3>
            </div>
        </div>
    );
};

export default CoverSection;