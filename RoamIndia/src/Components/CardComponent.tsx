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
            <div className="relative flex w-full max-w-[72rem] flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-2xl">
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
                    <div className='flex gap-5 mt-2'>
                      <svg width="25px" height="25px" viewBox="-4 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.28"></g><g id="SVGRepo_iconCarrier"> <title>location</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" > <g id="Icon-Set" transform="translate(-104.000000, -411.000000)" fill="#9b5050"> <path d="M116,426 C114.343,426 113,424.657 113,423 C113,421.343 114.343,420 116,420 C117.657,420 119,421.343 119,423 C119,424.657 117.657,426 116,426 L116,426 Z M116,418 C113.239,418 111,420.238 111,423 C111,425.762 113.239,428 116,428 C118.761,428 121,425.762 121,423 C121,420.238 118.761,418 116,418 L116,418 Z M116,440 C114.337,440.009 106,427.181 106,423 C106,417.478 110.477,413 116,413 C121.523,413 126,417.478 126,423 C126,427.125 117.637,440.009 116,440 L116,440 Z M116,411 C109.373,411 104,416.373 104,423 C104,428.018 114.005,443.011 116,443 C117.964,443.011 128,427.95 128,423 C128,416.373 122.627,411 116,411 L116,411 Z" id="location"> </path> </g> </g> </g></svg>
                    <h4 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                        {location}
                    </h4>
                    </div>
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
