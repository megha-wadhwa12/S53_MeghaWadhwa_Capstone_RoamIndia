import React, { useContext} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { AppContext } from '../Context/ParentContext';
const Attraction: React.FC = () => {
  const appContext = useContext(AppContext);
  const { attractionData } = appContext ?? { attractionData: [] as [] };
  const { value } = appContext || {value : "Cellular Jail"};

  const filteredAttraction = value ? attractionData?.filter((e) => {
    return e.Attraction_Name === value
  }) : attractionData;
  return (
    <div>
      <Navbar />
      {filteredAttraction?.map((e) => {
        return (
          <>
            <div key={e._id}>
              <img src={e.Image} alt="" className='w-[100vw] h-[55vh] mt-5 absolute filter brightness-50' />
              <img src={e.Image} alt="" className='relative h-[55vh] w-[100vw] top-5 filter opacity-100 blur-md drop-shadow-lg brightness-100' />
            </div>  
            <div className='flex justify-center w-full h-full absolute mt-[-30vh]'>
              <div className='w-10/12 h-full rounded-lg glass bg-white mb-16 drop-shadow-2xl shadow-slate-300 shadow-md'>
                <div className='flex'>
                  <img src={e.Image} alt={e.Attraction_Name} className='w-6/12 h-full rounded-l-lg' />
                  <div className='m-10 flex flex-col gap-6'>
                    <p className='w-full text-3xl font-navbar tracking-[-0.15rem] red-light'>{e.Attraction_Name}</p>
                    <p className='text-black'>{e.Attraction_Description}</p>
                    <div className='flex gap-5 mt-2'>
                      <svg width="35px" height="35px" viewBox="-4 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000" transform="matrix(1, 0, 0, 1, 0, 0)rotate(0)"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="1.28"></g><g id="SVGRepo_iconCarrier"> <title>location</title> <desc>Created with Sketch Beta.</desc> <defs> </defs> <g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" > <g id="Icon-Set" transform="translate(-104.000000, -411.000000)" fill="#9b5050"> <path d="M116,426 C114.343,426 113,424.657 113,423 C113,421.343 114.343,420 116,420 C117.657,420 119,421.343 119,423 C119,424.657 117.657,426 116,426 L116,426 Z M116,418 C113.239,418 111,420.238 111,423 C111,425.762 113.239,428 116,428 C118.761,428 121,425.762 121,423 C121,420.238 118.761,418 116,418 L116,418 Z M116,440 C114.337,440.009 106,427.181 106,423 C106,417.478 110.477,413 116,413 C121.523,413 126,417.478 126,423 C126,427.125 117.637,440.009 116,440 L116,440 Z M116,411 C109.373,411 104,416.373 104,423 C104,428.018 114.005,443.011 116,443 C117.964,443.011 128,427.95 128,423 C128,416.373 122.627,411 116,411 L116,411 Z" id="location"> </path> </g> </g> </g></svg>
                      <p className='text-[#24758F]'>{e.Location}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className='mt-[50vh] ml-12'>
              <div role="tablist" className="tabs tabs-bordered w-full">
                <input type="radio" name="my_tabs_1" role="tab" className="tab font-navbar text-[#AA5151] h-[10vh] text-3xl" aria-label="Overview" checked />
                <div role="tabpanel" className="tab-content p-10">
                  <div>
                    <h1 className='text-center text-4xl font-navbar green-light green tracking-tight'>The Basics</h1>
                    <p className='w-9/12 text-center mx-auto my-10'>{e.Attraction_Description}
                    </p>
                  </div>
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 mt-36 w-full">
                    <div className='w-10/12'>
                      <h1 className="mb-4 text-2xl font-semibold text-gray-900 dark:text-white md:text-3xl lg:text-2xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Things To Know Before You Go</span></h1>
                      {e.Things_To_Know.map((list) => {
                        return (
                          <ul className="max-w-md space-y-1 list-disc list-inside dark:text-black-400">
                            <li>
                              {list}
                            </li>
                          </ul>
                        )
                      })}

                    </div>
                    <div className='w-8/12'>
                      <h1 className="mb-4 text-xl font-semibold md:text-2xl lg:text-2xl"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">How To Get There</span></h1>
                      <p className="mb-3dark:text-black-400">{e.How_To_Get_There}</p>
                    </div>
                  </div>
                </div>
                <input type="radio" name="my_tabs_1" role="tab" className="tab space-x-4 font-navbar text-3xl blue-light h-[10vh]" aria-label="Photos" />
                <div role="tabpanel" className="tab-content p-10">Tab content 2</div>
              </div>
            </div>
          </>
        )
      })

      }
      <Footer />
    </div>
  );
}

export default Attraction;
