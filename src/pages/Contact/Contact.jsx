import React from 'react'

const Contact = () => {
  return (
    <main>
        <div className="flex flex-col justify-center items-center text-center gap-10 px-14 py-32 sx:px-4">
            <h1 className='text-5xl font-Cormorant font-semibold text-primaryColor capitalize sx:text-3xl'>Find Us</h1>
            <div className="flex flex-col gap-4">
                <p className='font-Open text-secondaryColor'>
                    Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG
                </p>
                <div className="flex flex-col gap-2">
                    <p className='font-Cormorant font-semibold text-primaryColor text-lg'>Opening Hours</p>
                    <small className='text-white text-sm font-Open'>Mon - Fri: 10:00 am - 02:00 am</small>
                    <small className='text-white text-sm font-Open'>Sat - Sun: 10:00 am - 03:00 am</small>
                </div>
            </div>
        </div>
    </main>
  )
}

export default Contact
