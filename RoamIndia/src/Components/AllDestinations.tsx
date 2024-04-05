import React from 'react';
import AllDestinationsBg from './../assets/AllDestinationsBg.png';
import Navbar from './Navbar';
import Lakshwadeep from './../assets/LakshwadeepDestination.png'
import Delhi from './../assets/DelhiDestination.png'
import Sikkim from './../assets/SikkimDestination.png'
import Goa from './../assets/GoaDestination.png'
import DalLakeSrinagar from './../assets/DalLakeSrinagar.png'
import ArunachalPradesh from './../assets/ArunachalPradeshDestination.png'
import Footer from './Footer';


const AllDestinations: React.FC = () => {
  const BgImage = `url(${AllDestinationsBg})`;

  return (
    <div>
      <Navbar />
      <div className='mx-6'>
        <div className='flex justify-center h-screen'>
          <div className={`bg-cover w-10/12 p-12 rounded-2xl mt-10`} style={{ backgroundImage: BgImage }}>
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
                <h1 style={{ textShadow: "1px 1px 4px #000000bf" }} className='drop-shadow-sm bentham-regular text-center text-5xl text-white m-12'>Lifelong memories,
                  <br /> Just a few
                  <br />seconds away</h1>
              </div>
            </div>
          </div>
        </div>
        <div className='py-20'>
          <form className="max-w-4xl ml-20">
            <label className='text-[#386367] text-3xl asul-regular'>Filter places by</label>
            <select id="countries" className="bg-gray-50 drop-shadow-md border-none text-gray-900 text-sm rounded-md block w-full p-3.5 mt-6">
              <option selected>Most Popular</option>
              <option>Region</option>
              <option>State</option>
              <option>City</option>
            </select>
          </form>
        </div>
        <div>
          <div className='grid grid-cols-3 w-11/12 justify-center items-center ml-16 content-center gap-20 '>
            <div>
            <div style={{ backgroundImage: `url(${Lakshwadeep})` }} className="rounded-lg bg-no-repeat bg-cover min-w-64 min-h-64"></div>
            <h1 className='text-[#640000] asul-regular text-2xl text-center mt-2'>Lakshwadeep</h1>
            </div>
            <div>
            <div style={{ backgroundImage: `url(${Delhi})` }} className="rounded-lg bg-no-repeat bg-cover min-w-64 min-h-64"></div>
            <h1 className='text-[#640000] asul-regular text-2xl text-center mt-2'>Delhi</h1>
            </div>
            <div>
            <div style={{ backgroundImage: `url(${Goa})` }} className="rounded-lg bg-no-repeat bg-cover min-w-64 min-h-64"></div>
            <h1 className='text-[#640000] asul-regular text-2xl text-center mt-2'>Goa</h1>
            </div>
            <div>
            <div style={{ backgroundImage: `url(${DalLakeSrinagar})` }} className="rounded-lg bg-no-repeat bg-cover min-w-64 min-h-64"></div>
            <h1 className='text-[#640000] asul-regular text-2xl text-center mt-2'>Dal Lake, Srinagar</h1>
            </div>
            <div>
            <div style={{ backgroundImage: `url(${Sikkim})` }} className="rounded-lg bg-no-repeat bg-cover min-w-64 min-h-64"></div>
            <h1 className='text-[#640000] asul-regular text-2xl text-center mt-2'>Sikkim</h1>
            </div>
            <div>
            <div style={{ backgroundImage: `url(${ArunachalPradesh})` }} className="rounded-lg bg-no-repeat bg-cover min-w-64 min-h-64"></div>
            <h1 className='text-[#640000] asul-regular text-2xl text-center mt-2'>Arunachal Pradesh</h1>
            </div>
          </div>
          <div className="join py-20 flex justify-center gap-2 ">
            <button className="join-item btn bg-slate-50">1</button>
            <button className="join-item btn btn-active bg-[#359388]">2</button>
            <button className="join-item btn bg-slate-50">3</button>
            <button className="join-item btn bg-slate-50">4</button>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllDestinations;
