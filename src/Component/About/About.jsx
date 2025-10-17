import React from 'react';
import { CircleCheckBig } from 'lucide-react';


import aboutUsCoverImg from '../../assets/Image/bg_Image.jpg';
import aboutWorkImg from '../../assets/Image/About_us.jpg'

const aboutCoverImgUrl = aboutUsCoverImg;
const aboutImg = aboutWorkImg;

const About = () => {

    return (

        <div className="bg-cover bg-no-repeat bg-center min-h-screen lg:relative" id='about-section'
            style={{ backgroundImage: `url(${aboutCoverImgUrl})` }}>
            <div className='py-4'>
                <div>
                    <h1 className='text-center mt-16 text-4xl font-bold'>Simplifying Business Processes with Innovative Digital Tools</h1>
                </div>
                <div className='flex justify-between'>
                    {/* content about  */}
                    <div className='py-18 px-16'>
                        <h3 className='text-gray-700 text-xl font-normal'>We are a software company in Dhaka.
                            We make innovative technology solutions in Bangladesh for businesses.
                            Our goal is to help companies work faster and grow stronger.
                            We develop ERP software, digital tools, and business automation systems that simplify work processes.
                            We support both small and big companies. We also provide cloud ERP, custom ERP software, and complete IT services in Bangladesh.
                            Our tools help businesses save time, stay organized, and grow.
                        </h3>


                        <div>
                            <h1 className='mt-6 text-3xl'>Why Choose Prime Technology</h1>

                            {/* content */}
                            <div className='flex'>
                                <div>
                                    <div className='flex space-x-2 mt-2'>
                                        <CircleCheckBig />
                                        <p>Complete IT Solutions</p>
                                    </div>

                                    <div className='flex space-x-2 mt-2'>
                                        <CircleCheckBig />
                                        <p>Industry Expertise</p>
                                    </div>

                                    <div className='flex space-x-2 mt-2'>
                                        <CircleCheckBig />
                                        <p>Digital Transformation Partner</p>
                                    </div>

                                    <div className='flex space-x-2 mt-2'>
                                        <CircleCheckBig />
                                        <p>Reliable Support</p>
                                    </div>
                                </div>

                                {/* button */}
                                <div className='space-x-6 mt-30'>
                                    <button className="bg-gradient-to-r from-green-400 to-blue-400 text-black text-bold
                                                transform transition-transform duration-300 hover:scale-105 px-4 py-2
                                                rounded-full cursor-pointer">EXPLORE INDUSTRIES</button>

                                    <button className="bg-gradient-to-r from-green-400 to-blue-400 text-black text-bold
                                                transform transition-transform duration-300 hover:scale-105 px-4 py-2
                                                rounded-full cursor-pointer">EXPLORE SOLUTIONS</button>
                                </div>

                            </div>

                        </div>
                    </div>

                    <div className='py-16 px-5'>
                        <div className="w-[600px] h-[400px] rounded-2xl"
                            style={{ backgroundImage: `url(${aboutImg})` }}>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;