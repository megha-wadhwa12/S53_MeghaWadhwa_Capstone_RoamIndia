import React from 'react'
import { BentoGrid, BentoGridItem } from './bento-grid'
import Akshardham from './../assets/Akshardham.png'
import RedFort from './../assets/RedFort.png'
import IndiaGate from './../assets/IndiaGate.png'
import GoldenTemple from './../assets/GoldenTemple.png'
import AlbertHall from './../assets/AlbertHall.png'
import Delhi from './../assets/Delhi.png'

const TopAttractions: React.FC = () => {

    const items = [
      {
        title: "AKSHARDHAM",
        header: Akshardham,
      },
      {
        title: "INDIA GATE",
        header: IndiaGate,
      },
      // {
        //   title: "RED FORT",
        //   header: RedFort,
        // },
        // {
          //   title: "ALBERT HALL",
          //   header: AlbertHall,
          // },
          {
            title: "LOTUS TEMPLE",
            header: Delhi,
          },
          {
            title: "GOLDEN TEMPLE",
            header: GoldenTemple,
          },
    ];
  return (
    <div className='lg:pt-20 lg:px-20 md:px-8 py-20 px-5'>
      <h1 className='text-[#0C3A25] green text-3xl asul-regular text-center lg:text-left md:text-4xl'>Top Attractions</h1> 
      <BentoGrid className="max-w-full my-20">
        {items.map((item, i) => (
          <BentoGridItem
            key={i}
            title={item.title}
            header={item.header}
            className={i === 0 || i === 3 ? "md:col-span-2" : ""}
          />
        ))}
      </BentoGrid>
    </div>
  )
}

export default TopAttractions