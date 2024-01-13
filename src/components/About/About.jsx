import React from 'react'
import under from '../../assets/under.png'
import knife from '../../assets/knife.png'
import bg from '../../assets/about-bg.png'
import gSign from '../../assets/G.png'

const About = () => {
  return (
    <section
    style={{
        backgroundImage: `linear-gradient(208deg, rgba(0, 0, 0, 0.75) 1.5%, rgba(0, 0, 0, 0.64) 98.62%), url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }}
    >
        <div className="flex flex-col justify-center items-center gap-32 px-14 py-32 md:flex-row sx:px-4 md:justify-between md:gap-10"
        style={{
            backgroundImage: `url(${gSign})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: '20rem',
        }}
        >
            <div className="flex flex-col justify-center items-center gap-6 md:items-end">
                <div className="flex flex-col justify-center items-center gap-1 md:items-end">
                    <h1 className='text-4xl font-Cormorant text-primaryColor sx:text-2xl'>About Us</h1>
                    <div className="transform rotate-180">
                        <img src={under} alt="" />
                    </div>
                </div>
                <p className='text-secondaryColor font-Open text-center md:text-end sx:text-sm'>
                    Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi 
                    aliquam In sed odio nec aliquet.
                </p>
                <button type="submit" className='btn'>Know More</button>
            </div>

            <div className="hidden md:flex">
                <img src={knife} alt="" />
            </div>
            
            <div className="flex flex-col justify-center items-center gap-6 md:items-start">
                <div className="flex flex-col justify-center items-center gap-1 md:items-start">
                    <h1 className='text-4xl font-medium font-Cormorant text-primaryColor sx:text-2xl'>Our History</h1>
                    <div className="">
                        <img src={under} alt="" />
                    </div>
                </div>
                <p className='text-secondaryColor font-Open text-center md:text-start sx:text-sm'>
                    Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi 
                    aliquam In sed odio nec aliquet.
                </p>
                <button type="submit" className='btn'>Know More</button>
            </div>
        </div>
    </section>
  )
}

export default About
