import React from 'react'
import photo1 from '../../assets/gal1.png'
import photo2 from '../../assets/gal2.png'
import photo3 from '../../assets/gal3.png'
import photo4 from '../../assets/gal4.png'
import under  from '../../assets/under.png'

const Gallery = () => {
  return (
    <section>
        <div className="flex flex-col justify-center items-center gap-20 py-4 pl-14 sx:px-4 lg:flex-row lg:gap-8">
            <div className="flex flex-col gap-6 w-full">
                <div className="flex flex-col gap-1">
                    <small className='text-white capitalize font-Cormorant text-base'>Instagram</small>
                    <div className="w-6">
                        <img src={under} alt="" />
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <h1 className='text-5xl font-Cormorant font-semibold text-primaryColor capitalize'>Photo Gallery</h1>
                    <p className='text-sm font-Open text-secondaryColor'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.
                    </p>
                </div>
                <button type="submit" className='btn'>View More</button>
            </div>
            <div className="flex gap-3 sx:flex-col sx:gap-8">
                <div className="">
                    <img src={photo1} alt="" />
                </div>
                <div className="">
                    <img src={photo2} alt="" />
                </div>
                <div className="">
                    <img src={photo3} alt="" />
                </div>
                <div className="">
                    <img src={photo4} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Gallery
