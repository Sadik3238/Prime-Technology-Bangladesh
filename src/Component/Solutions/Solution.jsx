
import React, { useState } from 'react';
import { Factory, HeartPulse, GraduationCap, Briefcase, Shirt, CircleCheckBig } from 'lucide-react';

// --- Solution Component ---

function Solution({ onSectorClick }) {
    return (
        <div id="solutions-section" className='container mx-auto mt-8'>
            <div>
                <h3 className='flex justify-center text-xl pb-2'>BACKGROUND OF OUR SOLUTIONS</h3>
                <h1 className='flex justify-center text-5xl'> SECTORS WE HAVE SUPPORTS</h1>
            </div>

            <div className='grid grid-cols-4 gap-16 mt-12 px-4'>

                {/* Manufacturing Industry - Clickable Card to switch views */}
                <div
                    className="bg-[#21263B] w-64 h-40 rounded-lg shadow-lg p-4 flex flex-col items-center relative transition-all duration-200 ease-in-out hover:z-10 hover:shadow-xl hover:scale-105 hover:-translate-y-4 cursor-pointer"
                    onClick={() => onSectorClick('Manufactures')}
                >
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                        <div className="rounded-full bg-[#f2f2f2] border-4 border-white w-24 h-24 flex items-center justify-center shadow hover:bg-gray-300">
                            <Factory size={40} color="#21263B" />
                        </div>
                    </div>
                    <div className="mt-16 text-center">
                        <h2 className="text-white font-semibold text-lg">Manufacturing Industry</h2>
                    </div>
                </div>

                {/* Health care */}
                <div className="bg-[#21263B] w-64 h-40 rounded-lg shadow-lg p-4 flex flex-col items-center relative transition-all duration-200 ease-in-out hover:z-10 hover:shadow-xl hover:scale-105 hover:-translate-y-4 cursor-pointer"
                    onClick={() => onSectorClick('Healthcare')}>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                        <div className="rounded-full bg-[#f2f2f2] border-4 border-white w-24 h-24 flex items-center justify-center shadow hover:bg-gray-300">
                            <HeartPulse size={40} color="#21263B" />
                        </div>
                    </div>
                    <div className="mt-16 text-center">
                        <h2 className="text-white font-semibold text-lg">HEALTHCARE</h2>
                    </div>

                </div>

                {/* Education */}
                <div className="bg-[#21263B] w-64 h-40 rounded-lg shadow-lg p-4 flex flex-col items-center relative transition-all duration-200 ease-in-out hover:z-10 hover:shadow-xl hover:scale-105 hover:-translate-y-4 cursor-pointer"
                    onClick={() => onSectorClick('Educations')}>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                        <div className="rounded-full bg-[#f2f2f2] border-4 border-white w-24 h-24 flex items-center justify-center shadow hover:bg-gray-300">
                            <GraduationCap size={40} color="#21263B" />
                        </div>
                    </div>
                    <div className="mt-16 text-center">
                        <h2 className="text-white font-semibold text-lg">EDUCATION</h2>
                    </div>
                </div>

                {/* Corporate Solutions */}
                <div className="bg-[#21263B] w-64 h-40 rounded-lg shadow-lg p-4 flex flex-col items-center relative transition-all duration-200 ease-in-out hover:z-10 hover:shadow-xl hover:scale-105 hover:-translate-y-4 cursor-pointer"
                    onClick={() => onSectorClick('CorporateSolutions')}>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                        <div className="rounded-full bg-[#f2f2f2] border-4 border-white w-24 h-24 flex items-center justify-center shadow hover:bg-gray-300">
                            <Briefcase size={40} color="#21263B" />
                        </div>
                    </div>
                    <div className="mt-16 text-center">
                        <h2 className="text-white font-semibold text-lg">CORPORATE SOLUTIONS</h2>
                    </div>
                </div>

                {/* BUTEX */}
                <div className="bg-[#21263B] w-64 h-40 rounded-lg shadow-lg p-4 flex flex-col items-center relative transition-all duration-200 ease-in-out hover:z-10 hover:shadow-xl hover:scale-105 hover:-translate-y-4 cursor-pointer"
                    onClick={() => onSectorClick('Butex')}>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                        <div className="rounded-full bg-[#f2f2f2] border-4 border-white w-24 h-24 flex items-center justify-center shadow hover:bg-gray-300">
                            <Shirt size={40} color="#21263B" />
                        </div>
                    </div>
                    <div className="mt-16 text-center">
                        <h2 className="text-white font-semibold text-lg">BUTEX</h2>
                    </div>
                </div>

                {/* Food and Beverage */}
                <div className="bg-[#21263B] w-64 h-40 rounded-lg shadow-lg p-4 flex flex-col items-center relative transition-all duration-200 ease-in-out hover:z-10 hover:shadow-xl hover:scale-105 hover:-translate-y-4 cursor-pointer"
                    onClick={() => onSectorClick("FoodAndBeverage")}>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                        <div className="rounded-full bg-[#f2f2f2] border-4 border-white w-24 h-24 flex items-center justify-center shadow hover:bg-gray-300">
                            <Factory size={40} color="#21263B" />
                        </div>
                    </div>
                    <div className="mt-16 text-center">
                        <h2 className="text-white font-semibold text-lg">FOOD AND BEVERAGE</h2>
                    </div>
                </div>

                {/* Garments */}
                <div className="bg-[#21263B] w-64 h-40 rounded-lg shadow-lg p-4 flex flex-col items-center relative transition-all duration-200 ease-in-out hover:z-10 hover:shadow-xl hover:scale-105 hover:-translate-y-4 cursor-pointer"
                    onClick={() => onSectorClick('Garments')}>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                        <div className="rounded-full bg-[#f2f2f2] border-4 border-white w-24 h-24 flex items-center justify-center shadow hover:bg-gray-300">
                            <Shirt size={40} color="#21263B" />
                        </div>
                    </div>
                    <div className="mt-16 text-center">
                        <h2 className="text-white font-semibold text-lg">GARMENTS</h2>
                    </div>
                </div>

                {/* Textile Industry */}
                <div className="bg-[#21263B] w-64 h-40 rounded-lg shadow-lg p-4 flex flex-col items-center relative transition-all duration-200 ease-in-out hover:z-10 hover:shadow-xl hover:scale-105 hover:-translate-y-4 cursor-pointer"
                    onClick={() => onSectorClick('TextileIndustry')}>
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                        <div className="rounded-full bg-[#f2f2f2] border-4 border-white w-24 h-24 flex items-center justify-center shadow hover:bg-gray-300">
                            <Factory size={40} color="#21263B" />
                        </div>
                    </div>
                    <div className="mt-16 text-center">
                        <h2 className="text-white font-semibold text-lg">TEXTILE INDUSTRY</h2>
                    </div>
                </div>

            </div>
        </div>
    );
}

// ----------------------------------------------------------------------

// --- Manufactures Component ---
const Manufactures = () => {
    return (
        <div>
            <div className='container mx-auto mt-16'>
                <div className='flex justify-between px-16'>
                    <div>
                        <div>
                            {/* NOTE: Ensure the image path is correct relative to where this component is run */}
                            <img src="./src/assets/image/manufacturing.png" alt="Manufacturing" className='max-w-11/12' />
                        </div>
                    </div>

                    <div>
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

// -------- Healthcare Component --------
const Healthcare = () => {
    return (
        <div>
            <div className='container mx-auto mt-16'>
                <div className='flex justify-between px-16'>
                    <div>
                        <div>
                            {/* NOTE: Ensure the image path is correct relative to where this component is run */}
                            <img src="./src/assets/image/health.png" alt="Healthcare" className='max-w-11/12' />
                        </div>
                    </div>

                    <div>
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

// --------- Education Component -------
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
}

// --------- Corporate solutions --------
const CorporateSolutions = () => {
    return (
        <div>
            <div className='container mx-auto mt-16'>
                <div className='flex justify-between px-16'>
                    <div>
                        <div>
                            {/* NOTE: Ensure the image path is correct relative to where this component is run */}
                            <img src="./src/assets/image/corporate.png" alt="Corporate Solutions" className='max-w-11/12' />
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

}

// --------- Butex ----------
const Butex = () => {
    return (
        <div>
            <div className='container mx-auto mt-16'>
                <div className='flex justify-between px-16'>
                    <div>
                        <div>
                            {/* NOTE: Ensure the image path is correct relative to where this component is run */}
                            <img src="./src/assets/image/Butex.png" alt="Butex" className='max-w-11/12' />
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
}

// ------ Food & Beverage --------
const FoodAndBeverage = () => {
    return (
        <div>
            <div className='container mx-auto mt-16'>
                <div className='flex justify-between px-16'>
                    <div>
                        <div>
                            {/* NOTE: Ensure the image path is correct relative to where this component is run */}
                            <img src="./src/assets/image/Food & Beverage.png" alt="Food & Beverage" className='max-w-11/12' />
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
}


// ------- Garments Components --------
const Garments = () => {
    return (
        <div>
            <div className='container mx-auto mt-16'>
                <div className='flex justify-between px-16'>
                    <div>
                        <div>
                            {/* NOTE: Ensure the image path is correct relative to where this component is run */}
                            <img src="./src/assets/image/garments.png" alt="Garments" className='max-w-11/12' />
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
}

// ------- Textile Industry -------
const TextileIndustry = () => {
    return (
        <div>
            <div className='container mx-auto mt-16'>
                <div className='flex justify-between px-16'>
                    <div>
                        <div>
                            {/* NOTE: Ensure the image path is correct relative to where this component is run */}
                            <img src="./src/assets/image/textile.jpg" alt="Textile Industry" className='max-w-11/12' />
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
}






// ----------------------------------------------------------------------

// --- Main App Component for State Management ---

function SolutionSection() {
    const [activeSection, setActiveSection] = useState('Solution');

    const handleSectorClick = (sectorKey) => {
        setActiveSection(sectorKey);
    };

    const renderActiveSection = () => {
        switch (activeSection) {
            case 'Solution':
                return <Solution onSectorClick={handleSectorClick} />;
            case 'Manufactures':
                return <Manufactures />;
            case 'Healthcare':
                return <Healthcare />;
            case 'Educations':
                return <Educations />;
            case 'CorporateSolutions':
                return <CorporateSolutions />
            case 'Butex':
                return <Butex />
            case 'FoodAndBeverage':
                return <FoodAndBeverage />
            case 'Garments':
                return <Garments />
            case 'TextileIndustry':
                return <TextileIndustry />

            // Add other cases for new sectors here
            default:
                return <Solution onSectorClick={handleSectorClick} />;
        }
    };

    return (
        <div className="SolutionSection">
            {renderActiveSection()}

            {activeSection !== 'Solution' && (
                <div className="container mx-auto mt-4 px-16">
                    <button
                        onClick={() => setActiveSection('Solution')}
                        className="text-blue-500 hover:text-blue-700 font-semibold mt-2">
                        &larr; Back to Sectors
                    </button>
                </div>
            )}
        </div>
    );
}

export default SolutionSection;

