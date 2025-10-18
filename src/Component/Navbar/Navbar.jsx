import React, { memo } from 'react'
import Links from './Links'


const navigationData = [
    {
        name: "HOME",
        path: "/",
        id: 1

    },

    {
        name: "ABOUT US",
        path: "#about-section",
        id: 2
    },

    {
        name: "MISSION",
        path: "#mission-section",
        id: 3
    },
    {
        name: "INDUSTRIES",
        path: "#services-section",
        id: 4
    },
    {
        name: "SOLUTIONS",
        path: "#solutions-section",
        id: 5
    },

    {
        name: "CONTACT US",
        path: "#contact-section",
        id: 6
    },

]

const Navbar = memo(() => {
    return (

        <nav className='flex items-center fixed z-100 w-full justify-between py-4 top-0 left-0 bg-[#e0e5d8] px-4 lg:px-8'>
            <h1 className='text-3xl font-bold text-black hover:text-gray-600'>PRIME TECH</h1>
            <ul className='flex'>
                {
                    navigationData.map(route => <Links key={route.id} route={route} />)
                }
            </ul>

        </nav>
    )
})

export default Navbar