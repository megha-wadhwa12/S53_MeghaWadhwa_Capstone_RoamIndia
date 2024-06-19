import React from 'react';

interface Card {
    attraction: string,
    location: string,
    image?: string,
    state: object,
    description: string,
    type: string,
    city: object
}



const CardComponent: React.FC<Card> = ({ attraction, location, image, state, description, type, city }: Card) => {
    return (
        <div className="flex min-h-screen items-center justify-center">
            <div className="relative flex w-full max-w-[72rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                    <img
                        src={image}
                        className="min-h-full w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <div className='flex justify-between'>
                        <h6 className="mb-4 block font-sans text-xl font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                            {attraction}
                        </h6>
                        <h6 className=' text-[#738290]'>{type}</h6>
                    </div>
                    <p className="mb-8 block font-sans text-base font-normal leading-relaxed text-gray-800 antialiased italic">
                        {description}
                    </p>
                    <h4 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {location}
                    </h4>
                    <a href="#" className="inline-block">
                        <button
                            className="flex select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            type="button"
                        >
                            Learn More
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="2"
                                stroke="currentColor"
                                aria-hidden="true"
                                className="h-4 w-4"
                            >
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                            </svg>
                        </button>
                    </a>
                </div>
            </div>
        </div>
    );
};

export default CardComponent;
