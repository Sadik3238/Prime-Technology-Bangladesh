import React, { useRef, useEffect, useState } from 'react';
import { CircleCheckBig } from 'lucide-react';


import aboutUsCoverImg from '../../assets/Image/bg_Image.jpg';
import aboutWorkImg from '../../assets/Image/About_us.jpg'

const aboutCoverImgUrl = aboutUsCoverImg;
const aboutImg = aboutWorkImg;

const About = () => {
    const [isVisible, setIsVisible] = useState(false);
    const aboutImageRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(entry.target); // Stop observing once visible
                }
            },
            {
                root: null, // viewport
                rootMargin: '0px',
                threshold: 0.5, // Trigger when 50% of the element is visible
            }
        );

        if (aboutImageRef.current) {
            observer.observe(aboutImageRef.current);
        }

        return () => {
            if (aboutImageRef.current) {
                observer.unobserve(aboutImageRef.current);
            }
        };
    }, []);

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
                        </div>
                    </div>

                    <div className='py-16 px-5'>
                        <div ref={aboutImageRef} className={`w-[600px] h-[400px] rounded-2xl transition-all duration-1000 ease-out ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'}`}
                            style={{ backgroundImage: `url(${aboutImg})` }}>

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default About;