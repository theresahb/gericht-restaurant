import React from 'react'
import bg from '../../assets/about-bg.png'
import card from '../../assets/yellow-bg.png'
import under from '../../assets/under.png'
import chef from '../../assets/chef.png'
import quote from '../../assets/quote.png'
import signature from '../../assets/signature.png'

const Word = () => {
  return (
    <section
    style={{
        backgroundImage: `linear-gradient(208deg, rgba(0, 0, 0, 0.75) 1.5%, rgba(0, 0, 0, 0.64) 98.62%), url(${bg})`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
    }}
    >
        <div className="flex flex-col justify-center items-center gap-10 w-full px-14 py-32 sx:px-4 md:flex-row md:justify-between">
            <div className="relative w-full">
                <div className="absolute left-[50%] bottom-[60%] ">
                    <img src={card} alt="" loading='lazy' />
                </div>
                <div className="p-4 relative z-20">
                    <img src={chef} alt="" loading='lazy' />
                </div>
                <div className="absolute right-[50%] top-[60%] ">
                    <img src={card} alt="" loading='lazy' />
                </div>
            </div>

            <div className="flex flex-col gap-14 w-full">
                <div className="flex flex-col gap-3">
                    <div className="flex flex-col gap-1">
                        <small className='text-white capitalize font-Cormorant text-base'>Chef’s Word</small>
                        <div className="w-6">
                            <img src={under} alt="" />
                        </div>
                    </div>
                    <h1 className='text-5xl font-Cormorant font-semibold text-primaryColor capitalize sx:text-3xl'>What we believe in</h1>
                </div>

                <div className="flex gap-2">
                    <div className="">
                        <img src={quote} alt="" />
                    </div>
                    <p className='text-secondaryColor font-Open italic'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit auctor sit iaculis in arcu. Vulputate nulla 
                        lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue 
                        iaculis integer curabitur semper sit nunc. 
                    </p>
                </div>

                <div className="flex flex-col gap-1">
                    <p className='text-2xl font-Cormorant text-primaryColor sx:text-xl'>Kevin Luo</p>
                    <small className='text-sm font-Open text-secondaryColor'>Chef & Founder</small>
                </div>

                <div className="w-32">
                    <img src={signature} alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Word
