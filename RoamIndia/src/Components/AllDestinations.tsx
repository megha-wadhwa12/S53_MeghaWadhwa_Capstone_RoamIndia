import React, { useContext, useLayoutEffect, } from 'react';
import AllDestinationsBg from './../assets/AllDestinationsBg.png';
import Navbar from './Navbar';
import Footer from './Footer';
import { AppContext, AttractionData, CityData, StateData } from '../Context/ParentContext';
import { useNavigate } from 'react-router-dom';

const AllDestinations: React.FC = () => {
  const BgImage = `url(${AllDestinationsBg})`;
  const appContext = useContext(AppContext);
  const { selected, setSelected } = appContext ?? { selected: "state" };
  const {renderData, setRenderData} = appContext ?? { setRenderData: ()=>{}} ?? {renderData : []};
  const { cityData } = appContext ?? { cityData: [] as StateData[] };
  const { attractionData } = appContext ?? { attractionData: [] as StateData[] };
  const { data } = appContext ?? { data: [] as StateData[] }; 
  const { setValue } = appContext ?? { setValue: () => { } };
  const navigate  = useNavigate(); 

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (setSelected) {
      setSelected(e.target.value);
      console.log("Selected", selected)
    } else {
      console.error('setSelected is not defined in the context.');
    }
  }

  const handleClick = (e: StateData | CityData | AttractionData) => {
    if('Attraction_Name' in e){
      navigate(`/${e.State.State_Name}/${e.City.City_Name}/${e.Attraction_Name}`)
      setValue(e.Attraction_Name)
    } else if ('City_Name' in e) {
      navigate(`/${e.State.State_Name}/${e.City_Name}`);
      setValue(e.City_Name)
    } else if ('State_Name' in e) {
      navigate(`/${e.State_Name}`);
      setValue(e.State_Name)
    }
  }

  useLayoutEffect(() => {
    if (selected === "city") {
      setRenderData(cityData);
      console.log('cityData', cityData)
    } else if (selected === "attractions") {
      setRenderData(attractionData);
      console.log('attractionData', attractionData)
    } else {
      setRenderData(data);
      console.log('data', data)
    }
  }, [selected, cityData, attractionData, data, setRenderData]);


  return (
    <div>
      <Navbar />
      <div className='mx-6'>
        <div className='flex justify-center h-screen'>
          <div className={`bg-cover w-10/12 p-12 rounded-2xl mt-10`} style={{ backgroundImage: BgImage }}>
            <div className="p-5">
              <form className="max-w-md h-4/12 mx-auto">
                <div className="relative">
                  <input type="search" id="default-search" className="drop-shadow-2xl block w-full p-3 ps-10 text-sm text-gray-900 rounded-lg bg-gray-200 focus:outline-none" placeholder="Search..." required />
                  <button type="submit" className="text-white absolute end-0 bottom-0 bg-[#42A69A] hover:bg-[#359388] rounded-r-lg text-md px-8 py-2.5">Search</button>
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
          <form className="ml-20">
            <label className='teal-light blue text-3xl asul-regular'>Filter places by</label>
            <select onChange={handleChange} id="countries" className=" bg-gray-50 drop-shadow-md border-none text-gray-900 text-md rounded-md block w-[50vw] p-3.5 mt-6">
              <option value={"state"}>State</option>
              <option value={"city"}>City</option>
              <option value={"attractions"}>All Attractions</option>
            </select>
          </form>
        </div>
        <div>
          <div className='grid grid-cols-3 w-12/12 justify-center items-center mx-16 content-center gap-16 '>
            {renderData?.map((e) => {
              return (
                <div key={e._id} onClick={() => handleClick(e)}>
                  <div style={{ backgroundImage: `url(${e.Image})` }} className="rounded-lg bg-no-repeat bg-cover min-w-64 min-h-64"></div>
                  <h1 className='red-light white italic asul-regular text-xl text-center mt-2'>{'State_Name' in e ? e.State_Name : 'City_Name' in e ? e.City_Name : 'Attraction_Name' in e ? e.Attraction_Name : ''}</h1>
                </div>
              )
            })}
          </div>
          <nav className="flex items-center justify-center -space-x-px h-12 text-md m-20">
            <ul className="flex items-center -space-x-px h-12 text-md">
              <li>
                <a href="#" className="flex items-center justify-center p-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-e-0 border-gray-300 rounded-l-lg hover:bg-gray-100 hover:text-gray-700">
                  <span className="sr-only">Previous</span>
                  <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4" />
                  </svg>
                </a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center p-3 h-8 px-5 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">1</a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center px-5 p-3 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 e">2</a>
              </li>
              <li>
                <a href="#" aria-current="page" className="z-10 flex items-center justify-center p-3 h-8 leading-tight seagreen-light border border-[#359388] bg-[#3593881A] hover:bg-[#35938866]  hover:text-[#359388FF] px-5">3</a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center p-3 px-5 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700 ">4</a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center p-3 px-5 h-8 leading-tight text-gray-500 bg-white border border-gray-300 hover:bg-gray-100 hover:text-gray-700">5</a>
              </li>
              <li>
                <a href="#" className="flex items-center justify-center p-3 px-5 h-8 leading-tight text-gray-500 bg-white border border-gray-300 rounded-r-lg hover:bg-gray-100 hover:text-gray-700">
                  <span className="sr-only">Next</span>
                  <svg className="w-3 h-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 9 5 5l-4-4" />
                  </svg>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AllDestinations;
