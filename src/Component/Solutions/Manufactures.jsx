import React from 'react';

const manufacturingImgUrl = "https://i.ibb.co.com/7JLmXfp5/manufacturing-image.jpg"

const Manufactures = () => {
    return (
        <div>
            <div className='container mx-auto mt-12'>
                <div>
                    <div className="bg-cover bg-no-repeat lg:h-screen lg:relative pt-20"
                        style={{ backgroundImage: `url(${manufacturingImgUrl})` }}>
                    </div>

                    <div>
                        <h1>Manufacturing ERP Bangladesh</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Manufactures;