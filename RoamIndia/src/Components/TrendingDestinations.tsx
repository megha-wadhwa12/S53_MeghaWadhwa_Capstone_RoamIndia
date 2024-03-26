import React from 'react'
import { InfiniteMovingCards } from './infinite-moving-cards'
import Agra from './../assets/Agra.png'
import Assam from './../assets/Assam.png'
import ArunachalPradesh from './../assets/ArunachalPradesh.png'
import Delhi from './../assets/Delhi.png'
import TamilNadu from './../assets/TamilNadu.png'
import Goa from './../assets/Goa.png'

const TrendingDestinations: React.FC = () => {
    const testimonials = [
        {
            image: Agra,
            name: "Agra",
        },
        {
            image: ArunachalPradesh,
            name: "Arunachal Pradesh",
        },
        {
            image: Assam,
            name: "Assam",
        },
        {
            image: TamilNadu,
            name: "Tamil Nadu",
        },
        {
            image: Delhi,
            name: "Delhi",
        },
        {
            image: Goa,
            name: "Goa",
        },
    ];
    return (
        <div className='bg-white pt-20 px-20'>
            <div className='flex justify-between'>
                <h1 className='text-[#24758F] text-3xl asul-regular'>Trending Destinations</h1>
                <button className='btn text-white'>View All Destinations</button>
            </div>
            <div className="h-[25rem] rounded-md flex flex-col antialiased bg-white items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="normal"
                />
            </div>
        </div>
    )
}

export default TrendingDestinations