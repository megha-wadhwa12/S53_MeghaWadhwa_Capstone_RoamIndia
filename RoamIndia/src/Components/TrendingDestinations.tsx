import React, { useContext } from 'react'
import { InfiniteMovingCards } from './infinite-moving-cards'
import Agra from './../assets/Agra.png'
import Assam from './../assets/Assam.png'
import ArunachalPradesh from './../assets/ArunachalPradesh.png'
import Delhi from './../assets/Delhi.png'
import TamilNadu from './../assets/TamilNadu.png'
import Goa from './../assets/Goa.png'
import { Link, useNavigate } from 'react-router-dom'
import { AppContext } from '../Context/ParentContext'

const TrendingDestinations: React.FC = () => {
    const navigate = useNavigate();
    const appContext = useContext(AppContext);
    // const { value } = appContext || { value: "" };
    const { setValue } = appContext || { setValue: () => { } };

    const testimonials = [
        {
            Image: Agra,
            State_Name: "Uttar Pradesh",
        },
        {
            Image: ArunachalPradesh,
            State_Name: "Arunachal Pradesh",
        },
        {
            Image: Assam,   
            State_Name: "Assam",
        },
        {
            Image: TamilNadu,
            State_Name: "Tamil Nadu",
        },
        {
            Image: Delhi,
            State_Name: "Delhi",
        },
        {
            Image: Goa,
            State_Name: "Goa",
        },
    ];


    const handleCardClick = (State_Name: string) => {
        console.log('Clicked card id:', State_Name);
        navigate(`/${State_Name}`);
        setValue(State_Name)
        // onClick={() => {
        //     setValue(item.State_Name)
        //     navigate(`/${item.State_Name}`);
        //     console.log(item.State_Name)
        // }}
    };
    return (
        <div className=' pt-20 px-6 lg:px-20 md:px-16'>
            <div className='flex justify-between'>
                <h1 className='text-[#0C3A25] green text-xl md:text-4xl asul-regular'>Trending Destinations</h1>
                <Link to="/alldestinations"><button className='btn text-sm text-white black-btn rounded-md'>View All Destinations</button></Link>
            </div>
            <div className="h-[26rem] rounded-md flex flex-col antialiased items-center justify-center relative overflow-hidden">
                <InfiniteMovingCards
                    items={testimonials}
                    direction="left"
                    speed="normal"
                    handleCardClick={handleCardClick}
                />
            </div>
        </div>
    )
}

export default TrendingDestinations