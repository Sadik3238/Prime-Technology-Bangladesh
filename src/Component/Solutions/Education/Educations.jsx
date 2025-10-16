import React from 'react';
import { CircleCheckBig } from 'lucide-react';

const Educations = () => {
    return (
        <div>
            <div className='container mx-auto mt-16'>
                <div className='flex justify-between px-16'>
                    <div>
                        <div>
                            {/* NOTE: Ensure the image path is correct relative to where this component is run */}
                            <img src="./src/assets/image/education.png" alt="Education" className='max-w-11/12' />
                        </div>
                    </div>

                    <div className=''>
                        <h1 className='text-4xl font-bold text-black '>Manufacturing ERP Bangladesh</h1>
                        <p className='mt-4 text-xl text-gray-400'>Manufacturing ERP in Bangladesh is a web-based solution
                            that optimizes and manages a company's core manufacturing processes. It integrates production
                            planning, inventory control, and supply chain management into a single system.
                            The software helps businesses streamline operations, reduce costs, and improve overall efficiency.
                            It is designed to meet the specific needs of the local manufacturing industry.
                        </p>

                        <div className='mt-8'>
                            <div className='flex justify-between'>

                                <div className='space-y-8'>
                                    <div className='flex space-x-2'>
                                        <CircleCheckBig />
                                        <p> Automate production and supply chain </p>
                                    </div>

                                    <div className='flex space-x-2'>
                                        <CircleCheckBig />
                                        <p> Automate production and supply chain </p>
                                    </div>

                                    <div className='flex space-x-2'>
                                        <CircleCheckBig />
                                        <p> Automate production and supply chain </p>
                                    </div>
                                </div>


                                <div className='space-y-8'>
                                    <div className='flex space-x-2'>
                                        <CircleCheckBig />
                                        <p> Automate production and supply chain </p>
                                    </div>

                                    <div className='flex space-x-2'>
                                        <CircleCheckBig />
                                        <p> Automate production and supply chain </p>
                                    </div>

                                    <div className='flex space-x-2'>
                                        <CircleCheckBig />
                                        <p> Automate production and supply chain </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Educations;