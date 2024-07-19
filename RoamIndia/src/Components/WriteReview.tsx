import React, { useContext, useEffect, useState } from 'react';
import Navbar from './Navbar';
import Form from './Form';
import { AppContext } from '../Context/ParentContext';

const WriteReview: React.FC = () => {
    const appContext = useContext(AppContext);
    const [filteredPlace, setFilteredPlace] = useState<any>(null);

    useEffect(() => {
        if (appContext) {
            const { attractionData } = appContext;
            const Attraction_Name = localStorage.getItem('selectedPlace');

            if (Attraction_Name && attractionData) {
                const place = attractionData.find(e => e.Attraction_Name === Attraction_Name);
                setFilteredPlace(place || null);
            }
        }
    }, [appContext]);

    if (!appContext || !filteredPlace) {
        return (
            <div>
                <Navbar />
                <div className="flex w-full flex-auto mt-10">
                    <div className='flex flex-col w-[38vw] p-12 gap-7'>
                        <h1 className='text-4xl asul-regular text-center teal-light blue'>Loading...</h1>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div>
            <Navbar />
            <div className="flex w-full flex-auto mt-10">
                <div className='flex flex-col w-[38vw] p-12 gap-7'>
                    <h1 className='text-4xl asul-regular text-center teal-light blue'>Tell us, how was your visit?</h1>
                    <article className="w-11/12 h-[35vh] m-auto glass h-auto relative isolate flex flex-col justify-end overflow-hidden rounded-2xl px-8 pb-8 pt-40 max-w-sm mx-auto mt-24">
                        <img src={filteredPlace.Image} alt={filteredPlace.Attraction_Name} className="absolute inset-0 h-full w-full object-cover" />
                        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40"></div>
                        <h3 className="z-10 mt-3 text-3xl font-bold text-white">{filteredPlace.Attraction_Name}</h3>
                        <div className="z-10 gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">{filteredPlace.Attraction_Type}</div>
                    </article>
                </div>
                <div className="inline-block h-full my-20 w-[0.05vw] self-stretch bg-gray-200"></div>
                <div className='w-6/12 flex flex-col gap-12'><Form /></div>
            </div>
        </div>
    );
}

export default WriteReview;
