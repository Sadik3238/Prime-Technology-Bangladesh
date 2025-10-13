import React from 'react';
import { Factory, HeartPulse, GraduationCap, Briefcase, Shirt, Code } from 'lucide-react';

const Solution = () => {
    return (
        <div id="solutions-section" className='container mx-auto mt-8'>
            <div>
                <h3 className='flex justify-center text-xl'>BACKGROUND OF OUR SOLUTIONS</h3>
                <h1 className='flex justify-center text-5xl'> SECTORS WE HAVE SUPPORTS</h1>
            </div>

            <div className='grid grid-cols-4  gap-16 mt-12'>



                {/* Manufacturing Industry */}

                <div className="bg-[#21263B] w-64 rounded-lg shadow-lg p-4 grid grid-cols-4 items-center relative">
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                        <div className="rounded-full bg-[#f2f2f2] border-4 border-white w-24 h-24 flex items-center justify-center shadow hover:bg-gray-300">
                            {/* Replace the SVG below with the actual icon as per your requirements */}
                            <Factory size={40} color="#21263B" />
                        </div>
                    </div>
                    <div className="mt-16 text-center">
                        <h2 className="text-white font-semibold text-lg">MANUFACTURING INDUSTRY</h2>
                    </div>
                </div>


                {/* Health care */}
                <div className="bg-[#21263B] w-64 rounded-lg shadow-lg p-4 flex flex-col items-center relative">
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                        <div className="rounded-full bg-[#f2f2f2] border-4 border-white w-24 h-24 flex items-center justify-center shadow hover:bg-gray-300">
                            {/* Replace the SVG below with the actual icon as per your requirements */}
                            <HeartPulse size={40} color="#21263B" />
                        </div>
                    </div>
                    <div className="mt-16 text-center">
                        <h2 className="text-white font-semibold text-lg">HEALTHCARE</h2>
                    </div>
                </div>


                {/* Education */}
                <div className="bg-[#21263B] w-64 rounded-lg shadow-lg p-4 flex flex-col items-center relative">
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                        <div className="rounded-full bg-[#f2f2f2] border-4 border-white w-24 h-24 flex items-center justify-center shadow hover:bg-gray-300">
                            {/* Replace the SVG below with the actual icon as per your requirements */}
                            <GraduationCap size={40} color="#21263B" />
                        </div>
                    </div>
                    <div className="mt-16 text-center">
                        <h2 className="text-white font-semibold text-lg">EDUCATION</h2>
                    </div>
                </div>


                {/* Corporate Solutions */}

                <div className="bg-[#21263B] w-64 rounded-lg shadow-lg p-4 flex flex-col items-center relative">
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                        <div className="rounded-full bg-[#f2f2f2] border-4 border-white w-24 h-24 flex items-center justify-center shadow hover:bg-gray-300">
                            {/* Replace the SVG below with the actual icon as per your requirements */}
                            <Briefcase size={40} color="#21263B" />
                        </div>
                    </div>
                    <div className="mt-16 text-center">
                        <h2 className="text-white font-semibold text-lg">CORPORATE SOLUTIONS</h2>
                    </div>
                </div>


                {/* Butex */}
                <div className="bg-[#21263B] w-64 rounded-lg shadow-lg p-4 flex flex-col items-center relative">
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                        <div className="rounded-full bg-[#f2f2f2] border-4 border-white w-24 h-24 flex items-center justify-center shadow hover:bg-gray-300">
                            {/* Replace the SVG below with the actual icon as per your requirements */}
                            <Shirt size={40} color="#21263B" />
                        </div>
                    </div>
                    <div className="mt-16 text-center">
                        <h2 className="text-white font-semibold text-lg">BOTEX</h2>
                    </div>
                </div>

                {/* Food and baverase */}
                <div className="bg-[#21263B] w-64 rounded-lg shadow-lg p-4 flex flex-col items-center relative">
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                        <div className="rounded-full bg-[#f2f2f2] border-4 border-white w-24 h-24 flex items-center justify-center shadow hover:bg-gray-300">
                            {/* Replace the SVG below with the actual icon as per your requirements */}
                            <Factory size={40} color="#21263B" />
                        </div>
                    </div>
                    <div className="mt-16 text-center">
                        <h2 className="text-white font-semibold text-lg">FOOD AND BEVERAGE</h2>
                    </div>
                </div>


                {/* Garments */}
                <div className="bg-[#21263B] w-64 rounded-lg shadow-lg p-4 flex flex-col items-center relative">
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                        <div className="rounded-full bg-[#f2f2f2] border-4 border-white w-24 h-24 flex items-center justify-center shadow hover:bg-gray-300">
                            {/* Replace the SVG below with the actual icon as per your requirements */}
                            <Shirt size={40} color="#21263B" />
                        </div>
                    </div>
                    <div className="mt-16 text-center">
                        <h2 className="text-white font-semibold text-lg">GARMENTS</h2>
                    </div>
                </div>


                {/* Tex-tile industry */}
                <div className="bg-[#21263B] w-64 rounded-lg shadow-lg p-4 flex flex-col items-center relative">
                    <div className="absolute -top-8 left-1/2 transform -translate-x-1/2">
                        <div className="rounded-full bg-[#f2f2f2] border-4 border-white w-24 h-24 flex items-center justify-center shadow hover:bg-gray-300">
                            {/* Replace the SVG below with the actual icon as per your requirements */}
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

};

export default Solution;