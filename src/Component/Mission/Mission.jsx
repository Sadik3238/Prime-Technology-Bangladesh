import React from 'react';
import missionCoverImg from '../../assets/Image/bg_Image.jpg';
import missionContentImg from "../../assets/Image/mission_img.png"

const missionImg = missionCoverImg;
const missionContent = missionContentImg;

const Mission = () => {
    return (
        <div className="bg-cover bg-no-repeat bg-center min-h-screen lg:relative" id='mission-section'
            style={{ backgroundImage: `url(${missionImg})` }}>

            <div className='container mx-auto'>
                <div className='py-16'>
                    <div className='flex justify-between'>
                        <div>
                            {/* contentImage */}
                            <div className='w-[700px] h-[550px] bg-center bg-cover rounded-2xl'
                                style={{ backgroundImage: `url(${missionContent})` }}>

                            </div>
                        </div>

                        <div className='px-12 py-8'>
                            <h3 className='text-gray-950 text-xl font-normal'>
                                At Prime Technology Bangladesh, our mission is to make business simple and smart. We help companies in Bangladesh work better and grow faster. Our software and IT tools save time, reduce stress, and make everyday work easier.
                                We think every business should have the right tools to manage work without trouble. That’s why we make modern ERP software, cloud tools, and digital systems to help you work faster and smarter every day.
                                Our goal is to help Bangladeshi businesses use technology that really works. Our tools manage everything in one place - like accounting, sales, HR, payroll, and production. This helps teams stay focused, organized, and work better together.
                                Our goal is a smart Bangladesh where every company uses modern software to grow and do better.

                            </h3>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Mission;