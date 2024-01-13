import React from 'react'
import card from '../../assets/yellow-bg.png'
import bg from '../../assets/about-bg.png'
import under from '../../assets/under.png'
import cocktail from '../../assets/cocktail.png'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <section
    style={{
        backgroundImage: `linear-gradient(208deg, rgba(0, 0, 0, 0.75) 1.5%, rgba(0, 0, 0, 0.64) 98.62%), url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }}
    >
        <div className="flex flex-col-reverse justify-between items-center gap-10 px-14 py-32 sx:px-4 md:flex-row">
            <div className="flex flex-col gap-10 w-full">
                <div className="">
                    <div className="flex flex-col gap-1">
                        <small className='text-white capitalize font-Cormorant text-base'>Contact</small>
                        <div className="w-6">
                            <img src={under} alt="" />
                        </div>
                    </div>
                    <h1 className='text-5xl font-Cormorant font-semibold text-primaryColor capitalize sx:text-3xl'>Find Us</h1>
                </div>

                <div className="flex flex-col gap-4">
                    <p className='font-Open text-secondaryColor sx:text-sm'>
                        Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
                    </p>
                    <div className="flex flex-col gap-2">
                        <p className='font-Cormorant font-semibold text-primaryColor text-lg sx:text-base'>Opening Hours</p>
                        <small className='text-white font-Open'>Mon - Fri: 10:00 am - 02:00 am</small>
                        <small className='text-white font-Open'>Sat - Sun: 10:00 am - 03:00 am</small>
                    </div>
                </div>

                <button type="submit" className='btn'><Link to='/contact'>Visit Us</Link></button>
            </div>

            <div className="relative w-full">
                <div className="absolute left-[50%] bottom-[55%] ">
                    <img src={card} alt="" loading='lazy' />
                </div>
                <div className="p-4 relative z-20">
                    <img src={cocktail} alt="" loading='lazy' />
                </div>
                <div className="absolute right-[50%] top-[55%] ">
                    <img src={card} alt="" loading='lazy' />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
