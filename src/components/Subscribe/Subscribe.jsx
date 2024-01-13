import React from 'react'
import under from '../../assets/under.png'
import bg from '../../assets/about-bg.png'

const Subscribe = () => {
  return (
    <section className='py-32'
    style={{
        backgroundImage: `linear-gradient(208deg, rgba(0, 0, 0, 0.75) 1.5%, rgba(0, 0, 0, 0.64) 98.62%), url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }}
    >
        <div className="flex flex-col justify-center items-center py-8 my-0 mx-auto gap-8 w-full border border-[#dcca8733] bg-[#0C0C0C] sx:px-4 md:w-1/2">
            <div className="flex flex-col justify-center items-center text-center gap-4">
                <div className="flex flex-col gap-1">
                    <small className='text-white capitalize font-Cormorant text-base'>Newsletter</small>
                    <div className="flex justify-center items-center w-6 my-0 mx-auto">
                        <img src={under} alt="" />
                    </div>
                </div>
                <h1 className='text-4xl font-Cormorant font-semibold text-primaryColor capitalize sx:text-2xl'>Subscribe to Our Newsletter</h1>
                <p className='text-secondaryColor font-Open text-sm sx:text-xs'>And never miss latest Updates!</p>
            </div> 
            <div className="font-Cormorant">
                <form action="#" className='flex flex-col justify-center items-center gap-4 md:flex-row'>
                    <input type="email" name="" id="" placeholder='Email Address' 
                    className='px-4 py-2 border border-[#dcca878f] bg-transparent w-full text-white caret-white md:w-1/2 placeholder:text-white outline-none' />
                    <button type="submit" className='btn'>Visit Us</button>
                </form>
            </div> 
        </div>
    </section>
  )
}

export default Subscribe
