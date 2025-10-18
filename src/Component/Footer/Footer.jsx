import React from 'react';
import { Phone, Mail, MapPin, Facebook, Youtube, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
    return (

        <div className='mx-auto bg-gray-800 mt-12 h-[400px]' id='contact-section'>
            <div className='container'>
                {/* main  */}
                <div className='flex justify-evenly'>
                    {/* contact footer */}
                    <div className='mt-4'>
                        <div className='text-gray-200'>
                            <h1 className='text-3xl font-bold'>Contact</h1>
                            <p className='mt-2 text-2xl'>Prime Technology Bangladesh –
                                <br /> <span className='text-xl'>Smart Software, Smart Business</span>
                                <span className='text-lg font-normal'> <br />
                                    Contact us for assistance, inquiries,
                                    <br />or a demo of our IT services in Bangladesh,
                                    <br />including cloud ERP and other digital solutions.</span> </p>
                        </div>

                        {/* contact information  */}
                        <div className='mt-4 space-y-0.5'>
                            {/* Map icon */}
                            <div className='flex space-x-2 items-center'>
                                <MapPin color='#FFFFFF' size={20} />
                                <p className='text-white'>House# 7, Lane# 23, Avenue 5, Dhaka 1216</p>
                            </div>

                            {/* Mail icon */}
                            <div className='flex space-x-2 items-center'>
                                <Mail color='#FFFFFF' size={20} />
                                <p className='text-white'>info@primetechbd.xyz</p>
                            </div>

                            {/* Phone Number */}
                            <div className='flex space-x-2 items-center'>
                                <Phone color='#FFFFFF' size={20} />
                                <p className='text-white'>+880 1751121112</p>
                            </div>

                        </div>


                        {/* contact icons */}
                        <div className='flex space-x-2 mt-4'>
                            {/* facebook */}
                            <div className='rounded-full bg-green-900 w-8 h-8 flex items-center justify-center
                             hover:bg-green-700 transition-all duration-300 ease-in-out
                             hover:scale-105 hover:-translate-y-2'>
                                <a href=""><Facebook size={20} color='#ffffff' /></a>
                            </div>

                            {/* twitter */}
                            <div className='rounded-full bg-green-900 w-8 h-8 flex items-center justify-center
                             hover:bg-green-700 transition-all duration-300 ease-in-out
                              hover:scale-105 hover:-translate-y-2'>
                                <a href=""><Twitter size={20} color='#ffffff' /></a>
                            </div>

                            {/* LinkInd */}
                            <div className='rounded-full bg-green-900 w-8 h-8 flex items-center justify-center
                             hover:bg-green-700 transition-all duration-300 ease-in-out
                              hover:scale-105 hover:-translate-y-2'>
                                <a href=""><Linkedin size={20} color='#ffffff' /></a>
                            </div>

                            {/* youtube */}
                            <div className='rounded-full bg-green-900 w-8 h-8 flex items-center justify-center
                             hover:bg-green-700 transition-all duration-300 ease-in-out
                              hover:scale-105 hover:-translate-y-2'>
                                <a href=""><Youtube size={20} color='#ffffff' /></a>
                            </div>

                        </div>
                    </div>


                    {/* Solutions information */}
                    <div className='text-gray-200 mt-4'>
                        <h1 className='text-3xl font-bold'>Solutions</h1>
                        <ul className='mt-2 text-gray-200 text-normal'>
                            <li className='hover:text-green-500'>Manufacturing Industries</li>
                            <li className='hover:text-green-500'>Healthcare</li>
                            <li className='hover:text-green-500'>Educations</li>
                            <li className='hover:text-green-500'>Corporate Solutions</li>
                            <li className='hover:text-green-500'>Butex</li>
                            <li className='hover:text-green-500'>Food & Beverage</li>
                            <li className='hover:text-green-500'>Garments</li>
                            <li className='hover:text-green-500'>Textile Industry</li>
                        </ul>
                    </div>

                    {/* Industries information */}
                    <div className='text-gray-200 mt-4'>
                        <h1 className='text-3xl font-bold'>Industries</h1>
                        <ul className='mt-2 text-gray-200 text-normal'>
                            <li className='hover:text-green-500'>Prime ERP</li>
                            <li className='hover:text-green-500'>CRM & Accounting Software</li>
                            <li className='hover:text-green-500'>POS & Inventory Management Systems</li>
                            <li className='hover:text-green-500'>HR & Payroll Software</li>
                            <li className='hover:text-green-500'>Saas and Cloud Solutions</li>
                            <li className='hover:text-green-500'>Custom ERP Development</li>
                            <li className='hover:text-green-500'>Web Development & Design</li>
                            <li className='hover:text-green-500'>Digital Marketing</li>
                        </ul>
                    </div>

                    {/* About us */}
                    <div className='text-gray-200 mt-4'>
                        <h1 className='text-3xl font-bold'>About Us</h1>
                        <ul className='mt-2 text-gray-200 text-normal'>
                            <li className='hover:text-green-500'>Complete IT Solutions</li>
                            <li className='hover:text-green-500'>Industry Expertise</li>
                            <li className='hover:text-green-500'>Digital Transformation Partner</li>
                            <li className='hover:text-green-500'>Reliable Support</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Footer;

