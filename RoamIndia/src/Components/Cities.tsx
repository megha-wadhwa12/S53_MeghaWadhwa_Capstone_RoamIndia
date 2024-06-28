import React, { useContext } from 'react';
import Navbar from './Navbar';
import { AppContext } from '../Context/ParentContext';
import Footer from './Footer';
import Video from './../assets/4440864-hd_1920_1080_25fps.mp4';
import CardComponent from './CardComponent';

const Cities: React.FC = () => {
  const appContext = useContext(AppContext);
  const { cityData } = appContext || { cityData: [] };
  const { attractionData } = appContext || { attractionData: [] };
  const { value } = appContext || { value: '' };

  const filteredCity = value ? cityData?.filter((e) => e.City_Name === value) : cityData;
  console.log('filteredCity ', filteredCity);

  const filteredAttraction = value ? attractionData?.filter((e) => e.City.City_Name === value) : attractionData;
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
                {c.City_Name}
              </h2>
            </div>

            <div className=' my-20'>
              <h1 className='text-center text-4xl font-navbar blue-light blue tracking-tight'>About {c.City_Name}</h1>
              <p className="w-8/12 text-center mx-auto my-10 text-lg">
                {c.City_Description}
              </p>
            </div>
            <video src={Video} autoPlay loop width="90%" height="auto" className='mx-auto my-32' >
              Your browser does not support the video tag.
            </video>
            {filteredAttraction.length != 0 && <h1 className='text-center text-4xl font-navbar green-light green tracking-tight'>Attractions in {c.City_Name}</h1>
            }
            <div>
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

export default Cities;
