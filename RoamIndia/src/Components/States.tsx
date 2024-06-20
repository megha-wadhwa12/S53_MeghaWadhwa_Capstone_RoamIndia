import React, { useContext } from 'react';
import Navbar from './Navbar';
import { AppContext } from '../Context/ParentContext';
import Footer from './Footer';
import Video from './../assets/4440864-hd_1920_1080_25fps.mp4';
import CardComponent from './CardComponent';

const States: React.FC = () => {
  const appContext = useContext(AppContext);
  const { data } = appContext || { data: [] };
  const { attractionData } = appContext || { attractionData: [] };
  const { value } = appContext || { value: '' };

  const filteredCity = value ? data?.filter((e) => e.State_Name === value) : data;
  console.log('filteredCity ', filteredCity);

  const filteredAttraction = value ? attractionData?.filter((e) => e.State.State_Name === value) : attractionData;
  console.log('filteredAttraction ', filteredAttraction);

  return (
    <div className="w-full min-h-full">
      <Navbar />
      {filteredCity.map((c) => {
        return (
          <div>
            <div
              className="w-full h-[70vh] bg-cover bg-center filter drop-shadow-2xl flex items-center justify-center"
              style={{ backgroundImage: `url(${c.Image})` }}
            >
              <h2 className="text-white bentham-regular text-6xl text-center uppercase z-10 w-full backdrop-blur-sm flex items-center min-h-full justify-center backdrop-brightness-75" style={{ textShadow: "1px 1px 6px #000000bf" }}>
                {c.State_Name}
              </h2>
            </div>

            <div className=' my-20'>
              <h1 className='text-center text-4xl font-navbar text-[#274c77] tracking-tight'>About {c.State_Name}</h1>
              <p className="w-8/12 text-center mx-auto my-10 text-black text-lg">
                {c.State_Description}
              </p>
            </div>
            <video src={Video} autoPlay loop width="90%" height="auto" className='mx-auto my-32' >
              Your browser does not support the video tag.
            </video>
            {filteredAttraction.length != 0 && <h1 className='text-center text-4xl font-navbar text-[#0C3A25] tracking-tight'>Attractions in {c.State_Name}</h1>
            }
            <div className='mt-20'>
              {filteredAttraction.map((e) => {
                return (
                  <div>
                    <CardComponent attraction={e.Attraction_Name} location={e.Location} image={e.Image} state={e.State} description={e.Attraction_Description} type={e.Attraction_Type} city={e.City} />
                  </div>
                )
              })}
            </div>
            <Footer />
          </div>
        )
      })}

    </div>
  );
};

export default States;
