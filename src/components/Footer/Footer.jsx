import React from 'react'
// import Subscribe from '../Subscribe/Subscribe'
import under from '../../assets/under.png'
import facebook from '../../assets/facebook.png'
import twitter from '../../assets/twitter.png'
import instagram from '../../assets/instagram.png'
import bg from '../../assets/about-bg.png'

const Footer = () => {
  return (
    <footer
    style={{
        backgroundImage: `linear-gradient(208deg, rgba(0, 0, 0, 0.75) 1.5%, rgba(0, 0, 0, 0.64) 98.62%), url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }}
    >
        <div className="flex flex-col gap-32 px-14 py-14 sx:px-4">
            
            <div className="flex flex-col justify-between items-center gap-20 pt-16 lg:flex-row lg:gap-0">
                <div className="flex flex-col gap-4 text-center order-1 lg:order-none">
                    <h2 className='text-white text-2xl font-Cormorant sx:text-xl'>Contact Us</h2>
                    <div className="flex flex-col gap-2 text-secondaryColor font-Open">
                        <small>9 W 53rd St, New York, NY 10019, USA</small>
                        <div className="flex flex-col gap-1">
                            <small>+1 212-344-1230</small>
                            <small>+1 212-344-1230</small>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-4 text-center">
                    <h1 className='text-5xl text-primaryColor font-medium font-Cormorant uppercase sx:text-3xl'>Gerícht</h1>
                    <div className="flex flex-col gap-3">
                        <small className='text-white text-sm font-Open'>"The best way to find yourself is to lose yourself in the service of others.”</small>
                        <div className="flex justify-center items-center w-6 my-0 mx-auto">
                            <img src={under} alt="" />
                        </div>
                        <div className="flex justify-center items-center gap-4">
                            <div className="flex justify-center items-center w-5">
                                <img src={facebook} alt="" />
                            </div>
                            <div className="flex justify-center items-center w-5">
                                <img src={twitter} alt="" />
                            </div>
                            <div className="flex justify-center items-center w-5">
                                <img src={instagram} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4 text-center">
                    <h2 className='text-white text-2xl font-Cormorant sx:text-xl'>Working Hours</h2>
                    <div className="flex flex-col gap-1 font-Open text-lg text-secondaryColor">
                        <div className="">
                            <small>Monday-Friday:</small>
                            <small>08:00 am -12:00 am</small>
                        </div>
                        <div className="">
                            <small>Saturday-Sunday:</small>
                            <small>07:00am -11:00 pm</small>
                        </div>
                    </div>
                </div>
            </div>
            <div className="">
                <p className='text-sm text-secondaryColor text-center font-Cormorant'>2021 Gerícht. All Rights reserved.</p>
            </div>
        </div>
    </footer>
  )
}

export default Footer
