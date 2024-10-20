import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { companies, testimonials } from '@/data'

const Clients = () => {
    return (
        <div className="py-20" id='testimonials'>
            <h1 className="heading">
                Kind Words From {" "}
                <span className="text-purple">Satisfied clients</span>
            </h1>
            <div className="h-[50vh] md:h-[30rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    direction="right"
                    speed="slow"
                    items={testimonials}
                />
                <div className='flex flex-wrap items-center justify-center max-lg:mt-10 gap-4 md:gap-16'>
                    {companies.map(({id,name,nameImg,img})=>(
                        <div key={id} className='flex md:max-w-60 max-w-32 gap-2'>
                            <img 
                            src={img}
                            alt={name}
                            className='md:w-24 w-5'
                            />
                            <img 
                            src={nameImg}
                            alt={name}
                            className='md:w-24 w-20'

                            />

                        </div>
                    ))}
                </div>

            </div>
        </div>
    )
}

export default Clients
