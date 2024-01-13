import React from 'react'
import under from '../../assets/under.png'
import bg from '../../assets/yellow-bg.png'
import hero from '../../assets/hero.png'
import scroll from '../../assets/scroll.png'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section>
        <div className="flex flex-col justify-end items-end gap-6 px-14 pt-8 pb-32 sx:px-4 md:flex-row md:pt-20">
            <div className="flex flex-col-reverse justify-between items-center gap-10 w-full md:flex-row">
                <div className="hidden lg:flex gap-6 text-white font-Open text-xs transform -rotate-90">
                    <p>#Bar</p>
                    <p>#Gericht</p>
                </div>

                <div className="flex flex-col gap-6 w-full">
                    <div className="flex flex-col gap-1">
                        <small className='text-white capitalize font-Cormorant text-base'>Chase the new Flavour</small>
                        <div className="w-6">
                            <img src={under} alt="" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-6">
                        <h1 className='text-6xl font-Cormorant font-semibold text-primaryColor capitalize sx:text-3xl'>The key to Fine dining</h1>
                        <p className='text-base font-Open text-secondaryColor sx:text-sm'>
                            Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. 
                            Et, penatibus aliquam amet tellus 
                        </p>
                    </div>
                    <button type="submit" className='btn'><Link to='/pages'>Explore Menu</Link></button>
                </div>

                <div className="relative w-full">
                    <div className="absolute left-[50%] bottom-[55%] ">
                        <img src={bg} alt="" loading='lazy' />
                    </div>
                    <div className="p-4 relative z-20">
                        <img src={hero} alt="" loading='lazy' />
                    </div>
                    <div className="absolute right-[50%] top-[55%] ">
                        <img src={bg} alt="" loading='lazy' />
                    </div>
                </div>
            </div>
            <div className="">
                <div className="flex flex-col justify-center items-center gap-3">
                    <img src={scroll} alt="" />
                    <p className='font-Cormorant uppercase text-primaryColor'>Scroll</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
