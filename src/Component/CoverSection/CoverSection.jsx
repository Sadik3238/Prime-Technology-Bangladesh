import React from 'react';

const coverImgUrl = "https://i.ibb.co.com/M5Dw7cZS/erp.jpg"

const CoverSection = () => {
    return (
        <div
            className="bg-cover bg-no-repeat lg:h-screen lg:relative pt-20"
            style={{ backgroundImage: `url(${coverImgUrl})` }}>

            <div className='text-white lg:absolute lg:bottom-10 lg:left-1/2 lg:transform lg:-translate-x-1/2'>
                <h1 className='font-bold lg:text-5xl lg:text-center'>PRIME TECHNOLOGY OF BANGLADESH</h1>
                <h3 className='lg:text-2xl lg:mt-2 lg:text-center'>SMART SOFTWARE, SMART BUSINESS</h3>

            </div>
        </div>
    );
};

export default CoverSection;