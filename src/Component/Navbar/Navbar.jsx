import React from 'react'
import Links from './Links'


const navigationData = [
    {
        name: "HOME",
        path: "/",
        id: 1

    },

    {
        name: "MISSION",
        path: "/mission",
        id: 2
    },
    {
        name: "SERVICES",
        path: "#services",
        id: 3
    },
    {
        name: "SOLUTIONS",
        path: "/solutions",
        id: 4
    },
    {
        name: "ABOUT US",
        path: "/about",
        id: 5
    },
    {
        name: "CONTACT US",
        path: "/contact us",
        id: 6
    },

]

const Navbar = () => {
    return (

        <nav className='flex mx-auto items-center absolute z-50 w-full justify-between container mt-4 ml-16'>
            <h1 className='text-3xl font-bold text-white'>PRIME TECH</h1>
            <ul className='flex'>
                {
                    navigationData.map(route => <Links key={route.id} route={route} />)
                }
            </ul>

        </nav>
    )
}

export default Navbar