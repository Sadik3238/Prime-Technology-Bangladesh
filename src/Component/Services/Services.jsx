import React from 'react';


const servicesItems = [
    {
        id: 1,
        title: "Prime ERP",
        description: "Streamlined business process",
        images: "https://i.ibb.co.com/tpqYXn1n/Prime-Technology-Bangladesh.jpg"
    },

    {
        id: 2,
        title: "CRM & Accounting Software",
        description: "Manage Customers, finance and operations",
        images: "https://i.ibb.co.com/MkyyC17y/Prime-Technology-Bangladesh.jpg"
    },
    {
        id: "3",
        title: "POS & Inventory Management Systems",
        description: "Optimized retail and trading workflows",
        images: "https://i.ibb.co.com/RGLkj6mL/Prime-Technology-Bangladesh.jpg"
    },

    {
        id: 4,
        title: "HR & Payroll Software",
        description: "Simplify employee management",
        images: "https://i.ibb.co.com/X0qfttK/Prime-Technology-Bangladesh.jpg"
    },
    {
        id: 5,
        title: "Saas and Cloud Solutions",
        description: "Scalable and secure digital tools",
        images: "https://i.ibb.co.com/M3HrSHN/Prime-Technology-Bangladesh.jpg"
    },
    {
        id: 6,
        title: "Custom ERP Development",
        description: "Tailored solutions for unique business needs",
        images: "https://i.ibb.co.com/xS8D5Q4H/Prime-Technology-Bangladesh.jpg"
    },
    {
        id: 7,
        title: "Web Development & Design",
        description: "We build and design smart websites",
        images: "https://i.ibb.co.com/Y7Sp7br7/Prime-Technology-Bangladesh.jpg"
    },
    {
        id: 8,
        title: "Digital Marketing",
        description: "We help promote your business online",
        images: "https://i.ibb.co.com/1GpbqyVM/Prime-Technology-Bangladesh.jpg"
    },


]


const Services = () => {
    return (
        <div className='bg-black text-white py-20' id='services'>
            <div className='container mx-auto px-8  lg:px-24'>
                <div className='grid grid-cols-1  lg:grid-cols-2 gap-8'>
                    {servicesItems.map((service) => (
                        <div key={service.id}
                            className='bg-gray-800 px-6 pb-6 rounded-lg hover:shadow-lg transform 
                            transition-transform duration-300 hover:scale-105'>
                            <div>
                                {service.images && <img src={service.images} alt={service.title} className='w-full h-48 object-cover rounded-t-lg' />}
                            </div>


                            <h3 className='mt-2 text-2xl font-bold text-transparent bg-clip-text
                                bg-gradient-to-r from-green-400 to-blue-500'>
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