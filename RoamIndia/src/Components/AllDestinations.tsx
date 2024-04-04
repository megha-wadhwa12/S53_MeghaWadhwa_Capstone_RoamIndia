import React from 'react';
import AllDestinationsBg from './../assets/AllDestinationsBg.png';
import Navbar from './Navbar';

const AllDestinations: React.FC = () => {
  const BgImage = `url(${AllDestinationsBg})`;

  return (
    <div>
      <Navbar />
      <div className='flex justify-center h-screen'>
        <div className={`bg-cover w-10/12 p-12 rounded-2xl`} style={{ backgroundImage: BgImage }}>
          <div className="text-black text-center p-5">
            <form className="max-w-md h-4/12 mx-auto">
              <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only">Search</label>
              <div className="relative">
                <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                  <svg className="w-4 h-4 text-gray-900" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                </div>
                <input type="search" id="default-search" className="drop-shadow-2xl block w-full p-3 ps-10 text-sm text-gray-900 rounded-lg bg-gray-50 focus:outline-none" placeholder="Search..." required />
                <button type="submit" className="text-white absolute end-0 bottom-0 bg-[#42A69A] hover:bg-[#359388] focus:ring-3 focus:outline-none focus:ring-blue-300 font-sm rounded-r-lg text-md px-8 py-2.5">Search</button>
              </div>
            </form>
            <div>
              <h1 style={{textShadow: "1px 1px 4px #000000bf"}} className='drop-shadow-sm bentham-regular text-center text-5xl text-white m-12'>Lifelong memories,
               <br /> Just a few
                <br />seconds away</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllDestinations;
