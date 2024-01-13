import React from 'react'
import logo from '../../assets/delight-logo.png'
import laurel from '../../assets/laurel.png'
import under from '../../assets/under.png'
import bg from '../../assets/about-bg.png'
import gSign from '../../assets/G2.png'
import { awards } from '../../data'

const Awards = () => {
    return (
        <section
        style={{
            backgroundImage: `linear-gradient(208deg, rgba(0, 0, 0, 0.75) 1.5%, rgba(0, 0, 0, 0.64) 98.62%), url(${bg})`,
            backgroundRepeat: 'no-repeat',
            backgroundPosition: 'center',
            backgroundSize: 'cover',
        }}
        >
            <div className="flex items-start px-14 py-20 gap-10 sx:flex-col sx:gap-8 sx:px-4 lg:gap-0">
                <div className="w-20 sx:w-10">
                    <img src={logo} alt="" />
                </div>
                <div className="flex flex-col justify-between items-center gap-20 lg:flex-row">
                    <div className="flex flex-col gap-8 sx:gap-20">
                        <div className="flex flex-col gap-1 sx:justify-center sx:items-center">
                            <div className="flex flex-col gap-1 sx:justify-center sx:items-center">
                                <small className='text-white capitalize font-Cormorant text-base'>Awards & recognition</small>
                                <div className="w-6">
                                    <img src={under} alt="" />
                                </div>
                            </div>
                            <h1 className='text-4xl font-Cormorant font-semibold text-primaryColor capitalize sx:text-3xl'>Our Laurels</h1>
                        </div>
                        <div className="grid grid-cols-2 gap-10 sx:grid-cols-1">
                            {awards.map((award) => (
                                <div key={award.id} className="flex items-center gap-2 sx:flex-col sx:items-center">
                                    <div className="w-11">
                                        <img src={award.image} alt="" />
                                    </div>
                                    <div className="flex flex-col sx:text-center">
                                        <p className='text-lg font-Cormorant text-primaryColor font-medium'>{award.name}</p>
                                        <small className='text-xs font-Open text-secondaryColor'>{award.text}</small>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="relative">
                        <div className="">
                            <img src={laurel} alt="" />
                        </div>
                        <div className="absolute bottom-1 -left-16 w-[20rem]">
                            <img src={gSign} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Awards
