import React from 'react'
import under from '../../assets/under.png'
import long from '../../assets/long.png'
import bottle from '../../assets/bottle.png'
import { cocktail, wine } from '../../data'

const Menu = () => {
  return (
    <section>
        <div className="flex flex-col justify-center items-center gap-14 md:px-14 py-32 sx:px-4">
            <div className="flex flex-col justify-center items-center text-center gap-4">
                <div className="flex flex-col gap-1">
                    <small className='text-white capitalize font-Cormorant text-base'>Menu that fits your palatte</small>
                    <div className="flex justify-center items-center w-6 my-0 mx-auto">
                        <img src={under} alt="" />
                    </div>
                </div>
                <h1 className='text-4xl font-Cormorant font-semibold text-primaryColor capitalize sx:text-2xl'>Today’s Special</h1>
            </div>

            <div className="flex flex-col justify-between items-center gap-10 md:flex-row">
                <div className="flex flex-col gap-5">
                    <h1 className='font-Cormorant text-white text-2xl text-center'>Wine & Beer</h1>
                    <div className="flex flex-col justify-between gap-3">
                        {wine.map((beer) => (
                            <div key={beer.id} className="flex flex-col gap-1">
                                <div className="flex justify-between items-center gap-5 font-Cormorant">
                                    <p className='text-primaryColor text-xl sx:text-base'>{beer.name}</p>
                                    <div className="">
                                        <img src={long} alt="" loading='lazy' />
                                    </div>
                                    <p className='text-white text-lg sx:text-base'>{beer.price}</p>
                                </div>
                                <small className='text-secondaryColor font-Open text-xs'>{beer.text}</small>
                            </div>
                        ))}
                    </div>
                </div>
                <div className="hidden w-[15rem] md:flex">
                    <img src={bottle} alt="" loading='lazy' />
                </div>
                <div className="flex flex-col gap-5">
                    <h1 className='font-Cormorant text-white text-2xl text-center'>Cocktails</h1>
                    <div className="flex flex-col justify-between gap-3">
                        {cocktail.map((beer) => (
                            <div key={beer.id} className="flex flex-col gap-1">
                                <div className="flex justify-between items-center gap-5 font-Cormorant">
                                    <p className='text-primaryColor text-xl sx:text-base'>{beer.name}</p>
                                    <div className="">
                                        <img src={long} alt="" loading='lazy' />
                                    </div>
                                    <p className='text-white text-lg sx:text-base'>{beer.price}</p>
                                </div>
                                <small className='text-secondaryColor font-Open text-xs'>{beer.text}</small>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <button type="submit" className='btn'>View More</button>
        </div>
    </section>
  )
}

export default Menu
