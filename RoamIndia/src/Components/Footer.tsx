import React from "react";
import Phone from './../assets/Phone.png';
import Email from './../assets/Email.png';
import Location from './../assets/Location.png';
import Logo from './../assets/RoamIndiaBigLogo.png';
import { useAuth0 } from "@auth0/auth0-react";

const Footer: React.FC = () => {
  const { user } = useAuth0();
  const date = new Date().getFullYear();

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const recipientEmail = "meghawadhwa20@gmail.com";
    const subject = "Contact from RoamIndia Website";
    const name = (e.target as any).name_input.value;
    const userEmail = (e.target as any).email_input.value;
    const message = (e.target as any).message_input.value;
    const mailtoLink = `mailto:${recipientEmail}?subject=${encodeURIComponent(subject)}&body=Name: ${name}%0D%0AEmail: ${userEmail}%0D%0AMessage: ${message}`;
    window.location.href = mailtoLink;
  };

  return (
    <div className="bg-[#133039] text-white px-20">
      <div className="flex justify-between p-7 items-center">
        <div className="flex gap-3">
          <div className="border-r-[0.2px] pr-3 asul-regular text-lg">ROAM INDIA</div>
          <div className="text-sm">DISCOVER<br />THE SOUL OF INDIA</div>
        </div>
        <div className="flex flex-col gap-3 text-sm">
          <div className="flex gap-10">
            <div className="flex gap-2">
              <img src={Phone} className="w-5" alt="Phone icon" />
              <div>+91 839-696-9870</div>
            </div>
            <div className="flex gap-2">
              <img src={Email} className="w-5" alt="Email icon" />
              <div>meghawadhwa20@gmail.com</div>
            </div>
          </div>
          <div className="flex">
            <img src={Location} className="w-5" alt="Location icon" />
            <div>Lovely Professional University, Phagwara, Jalandhar, Punjab</div>
          </div>
        </div>
      </div>
      <hr className="border-gray-200 sm:mx-auto dark:border-gray-700 lg:mb-8" />
      <div className="flex">
        <div>
          <img src={Logo} alt="RoamIndia logo" className="w-6/12 ml-20" />
        </div>
        <form className="w-4/12 flex flex-col gap-10" onSubmit={handleFormSubmit}>
          <div className="relative z-0 w-full">
            <input
              type="text"
              id="name_input"
              defaultValue={user?.nickname}
              className="capitalize block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-[#4BD4FF] focus:outline-none focus:ring-0 focus:border-[#4BD4FF] peer"
              placeholder=""
            />
            <label
              htmlFor="name_input"
              className="absolute text-xl text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#4BD4FF] peer-focus:dark:text-[#4BD4FF]peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Name (Required)
            </label>
          </div>
          <div className="relative z-0 w-full">
            <input
              type="email"
              id="email_input"
              defaultValue={user?.email}
              className="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-[#4BD4FF] focus:outline-none focus:ring-0 focus:border-[#4BD4FF] peer"
              placeholder=""
            />
            <label
              htmlFor="email_input"
              className="absolute text-xl text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#4BD4FF] peer-focus:dark:text-[#4BD4FF]peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              Email (Required)
            </label>
          </div>
          <div className="relative z-0 w-full">
            <textarea
              id="message_input"
              className="block py-2.5 px-0 w-full h-20 text-sm text-white bg-transparent border-0 border-b-2 border-white appearance-none dark:text-white dark:border-white dark:focus:border-[#4BD4FF] focus:outline-none focus:ring-0 focus:border-[#4BD4FF] peer"
              placeholder=""
            ></textarea>
            <label
              htmlFor="message_input"
              className="absolute text-xl text-white dark:text-white duration-300 transform -translate-y-6 scale-75 top-0 -z-10 origin-[0] peer-focus:start-0 peer-focus:text-[#4BD4FF] peer-focus:dark:text-[#4BD4FF]peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto"
            >
              How can we help you? (Required)
            </label>
          </div>
          <button type="submit" className="btn text-white black-btn w-40 rounded-md">
            Submit
          </button>
        </form>
      </div>
      <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">
        © {date} RoamIndia. All Rights Reserved. | Designed by Megha Wadhwa
      </span>
    </div>
  );
};

export default Footer;
