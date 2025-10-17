import React, { useEffect, useState, useRef } from 'react';
// import industryImg from '../../assets/Image/industry.png';


// const industryImgUrl = industryImg;


const servicesItems = [
    {
        id: 1,
        title: "Prime ERP",
        description: "Streamlined business process",
        images: "./src/assets/image/Prime Erp.png"
    },

    {
        id: 2,
        title: "CRM & Accounting Software",
        description: "Manage Customers, finance and operations",
        images: "./src/assets/image/CRM & Accounting.png"
    },
    {
        id: 3,
        title: "POS & Inventory Management Systems",
        description: "Optimized retail and trading workflows",
        images: "./src/assets/image/Pos & Inventory Management .png"
    },

    {
        id: 4,
        title: "HR & Payroll Software",
        description: "Simplify employee management",
        images: "./src/assets/image/HR & Pay Roll Software.png"
    },
    {
        id: 5,
        title: "Saas and Cloud Solutions",
        description: "Scalable and secure digital tools",
        images: "./src/assets/image/Sass & Cloud Solutions.png"
    },
    {
        id: 6,
        title: "Custom ERP Development",
        description: "Tailored solutions for unique business needs",
        images: "./src/assets/image/Custom & Development.png"
    },
    {
        id: 7,
        title: "Web Development & Design",
        description: "We build and design smart websites",
        images: "./src/assets/image/Web Development & Design.png"
    },
    {
        id: 8,
        title: "Digital Marketing",
        description: "We help promote your business online",
        images: "./src/assets/image/Digital Marketing.png"
    },


]


const Services = () => {
    const [isVisible, setIsVisible] = useState(false);
    const servicesRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(servicesRef.current);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1,
            }
        );

        if (servicesRef.current) {
            observer.observe(servicesRef.current);
        }

        return () => {
            if (servicesRef.current) {
                observer.unobserve(servicesRef.current);
            }
        };
    }, []);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.unobserve(servicesRef.current);
                }
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1,
            }
        );

        if (servicesRef.current) {
            observer.observe(servicesRef.current);
        }

        const handleNavLinkClick = () => {
            setIsVisible(false); // Reset animation state
            setTimeout(() => setIsVisible(true), 100); // Trigger animation after a short delay
        };

        window.addEventListener('servicesNavLinkClick', handleNavLinkClick);


        return () => {
            if (servicesRef.current) {
                observer.unobserve(servicesRef.current);
            }
            window.removeEventListener('servicesNavLinkClick', handleNavLinkClick);
        };
    }, []);

    return (
        <div className='bg-white bg-no-repeat bg-center min-h-screen lg:relative pt-20 text-white py-20 overflow-x-hidden' id='services-section' ref={servicesRef}>
            <div className='container mx-auto px-8  lg:px-24'>
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-8'>
                    {servicesItems.map((service, index) => (
                        <div key={service.id}
                            className={`bg-blue-950 px-6 pb-6 rounded-lg hover:shadow-lg transform
                            transition-all duration-500 ease-out ${isVisible ? 'animate-slideInFromRight' : 'opacity-0'}`}
                            style={{ animationDelay: `${index * 200}ms` }}
                        >
                            <div>
                                {service.images && <img src={service.images} alt={service.title} className='w-full h-48 object-cover rounded-full mt-1
                                transition-all duration-100 ease-in-out hover:z-10 hover:shadow-xl hover:scale-105 hover:-translate-y-4 cursor-pointer' />}
                            </div>


                            <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text
                                bg-gradient-to-r from-green-400 to-blue-500 text-center'>
                                {service.title}
                            </h3>
                            <p className='mt-2 text-gray-300'>{service.description}</p>

                        </div>
                    ))}
                </div>
            </div>
        </div>



    );
};

export default Services;