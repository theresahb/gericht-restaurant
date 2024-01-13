import React, { useState } from 'react'
import { navLinks } from '../../data'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
    const [showLinks, setShowLinks] = useState(false);

    const toggleLinks = () => {
        setShowLinks(!showLinks);
    };

    const closeNavbar = () => {
        setShowLinks(false);
    };

    return (
        <nav> 
            <div className="flex justify-between items-center py-4 px-14 text-white sx:px-4">
                <h1 className='font-Cormorant uppercase text-3xl font-medium sx:text-xl'>Gerícht</h1>

                <ul className='hidden font-Open lg:flex items-center gap-8'>
                    {navLinks.map((nav) => (
                        <li key={nav.id} className="font-medium text-base text-white transition-all duration-500 hover:text-primaryColor">
                            <NavLink
                                to={nav.link}
                                activeClassName="active"
                            >
                                {nav.text}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                
                <ul className='hidden font-Open lg:flex items-center gap-8 capitalize'>
                    <li className='text-base text-white transition-all duration-500 hover:text-primaryColor'>
                        <NavLink
                            to='/login'
                                activeClassName="active"
                            >
                            Log in / registration
                        </NavLink>
                    </li>
                    <li className='text-base text-white transition-all duration-500 hover:text-primaryColor'>
                        <NavLink
                            to='/booking'
                                activeClassName="active"
                            >
                            book table
                        </NavLink>
                    </li>
                </ul>

                <button id="menu-btn" className={`${showLinks ? 'open' : 'hamburger'} block hamburger lg:hidden focus:outline-none outline-none`} 
                onClick={toggleLinks}>
                    <span className="hamburger-top"></span>
                    <span className="hamburger-middle"></span>
                    <span className="hamburger-bottom"></span>
                </button>
            </div>
            <div className="lg:hidden relative z-30">
                {showLinks && (
                    <div className="absolute flex-col items-center my-0 mx-auto self-end py-8 mt-3 space-y-5 bg-bgColor w-full ">
                        <ul className='font-Open flex flex-col justify-center items-center gap-5'>
                            {navLinks.map((nav) => (
                                <li key={nav.id} className="font-medium text-sm text-secondaryColor transition-all duration-500 hover:text-primaryColor">
                                    <NavLink
                                        to={nav.link}
                                        activeClassName="active"
                                        onClick={closeNavbar}
                                    >
                                        {nav.text}
                                    </NavLink>
                                </li>
                            ))}
                        </ul>
                        <ul className='font-Open flex flex-col items-center gap-5 text-secondaryColor transition-all duration-500 font-medium capitalize'>
                            <li className='text-sm hover:text-primaryColor'>
                                <NavLink 
                                to='/login'
                                activeClassName="active"
                                onClick={closeNavbar}
                                >
                                    Log in / registration
                                </NavLink>
                            </li>
                            <li className='text-sm hover:text-primaryColor'>
                                <NavLink 
                                to='/booking'
                                activeClassName="active"
                                onClick={closeNavbar}
                                >
                                    book table
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                )}
            </div>
        </nav>
    )
}

export default Navbar
