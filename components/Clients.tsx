import React from 'react'
import { InfiniteMovingCards } from './ui/infinite-moving-cards'
import { testimonials } from '@/data'

const Clients = () => {
    return (
        <div className="py-20" id='testimonials'>
            <h1 className="heading">
                Kind Words From {" "}
                <span className="text-purple">Satisfied clients</span>
            </h1>
            <div className="h-[30vh] md:h-[20rem] rounded-md flex flex-col antialiased  items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    direction="right"
                    speed="slow"
                    items={testimonials}
                />
            </div>
        </div>
    )
}

export default Clients
