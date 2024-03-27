import React from "react";
import Phone from './../assets/Phone.png'
import Email from './../assets/Email.png'
import Location from './../assets/Location.png'

const Footer: React.FC = () => {
  return (
    <div>
      <div className="bg-[#133039] flex  justify-between p-7 items-center text-white">
        <div className="flex gap-3">
          <div className="border-r-[0.2px] pr-3 asul-regular text-lg">ROAM INDIA</div>
          <div className="text-sm">DISCOVER
            <br /> THE SOUL OF INDIA</div>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <div className="flex gap-10">
            <div className="flex gap-2">
              <img src={Phone} className="w-5" />
              <div>+91 839-696-9870</div>
            </div>
            <div className="flex gap-2">
              <img src={Email} className="w-5" />
              <div>meghawadhwa20@gmail.com</div>
            </div>
          </div>
          <div className="flex">
            <img src={Location} className="w-5" />
            <div>Lovely Professional University, Phagwara, Jalandhar, Punjab</div>
          </div>
        </div>
      </div>
      <hr className="w-7/12"/>
    </div>
  );
};

export default Footer;
