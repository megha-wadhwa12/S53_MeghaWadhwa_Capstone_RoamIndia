import React, { useContext } from 'react'
import Navbar from './Navbar'
import { AppContext, CityData} from '../Context/ParentContext'
import Footer from './Footer';

const Cities: React.FC = () => {
  const appContext = useContext(AppContext);
  const {cityData} = appContext || {cityData: []}
  const {value} = appContext || {value: ""};

  const filteredCity = value ? cityData?.filter((e) => {
    return e.City_Name === value
  }) : cityData;

  return (
    <div>
      <Navbar />
      {filteredCity?.map((e)=>{
        return (
          <>
            <div key={e._id} className='w-full h-[100vh] mt-3'>
              <img src={e.Image} alt="" className='w-full h-[70vh] filter drop-shadow-md brightness-50 relative' />
              <h1 className='flex justify-center text-black font-bold'>{e.City_Name}</h1>
            </div>
          </>
        )
      })}
      {/* <Footer /> */}
    </div>
  )
}

export default Cities