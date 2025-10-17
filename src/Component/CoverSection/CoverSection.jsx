import React, { useEffect, useState } from 'react';
import coverImg from '../../assets/Image/Cover_Image.png';

const coverImgUrl = coverImg;

const CoverSection = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [showSmartText, setShowSmartText] = useState(false);

    useEffect(() => {
        let timeoutId;

        const handleScroll = () => {
            const element = document.getElementById('cover-text');
            if (element) {
                const rect = element.getBoundingClientRect();
                const isElementVisible = (rect.top <= window.innerHeight && rect.bottom >= 0);
                setIsVisible(isElementVisible);

                if (isElementVisible) {
                    timeoutId = setTimeout(() => {
                        setShowSmartText(true);
                    }, 1000); // 1-second delay
                } else {
                    setShowSmartText(false);
                    clearTimeout(timeoutId);
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check initial visibility

        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(timeoutId);
        };
    }, []);

    return (
        <div
            className="bg-cover bg-no-repeat bg-center min-h-screen lg:relative pt-20"
            style={{ backgroundImage: `url(${coverImgUrl})` }}>

            <div
                id="cover-text"
                className={`text-white lg:absolute lg:bottom-10 lg:left-10 lg:text-left transition-all 
                    duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
            >
                <h1 className='font-bold lg:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-400'>PRIME TECHNOLOGY <br />   BANGLADESH</h1>
                <h3 className={`lg:text-2xl lg:mt-2 text-[#e0ead0] transition-opacity duration-500 ${showSmartText ? 'opacity-100' : 'opacity-0'}`}>SMART SOFTWARE, SMART BUSINESS</h3>
            </div>
        </div>
    );
};

export default (CoverSection);