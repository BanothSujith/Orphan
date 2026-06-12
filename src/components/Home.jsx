import React from 'react'
import bgForAbout from "../assets/homebg.png";
import {  useNavigate } from "react-router-dom";
import service1 from "../assets/service1.png";
import service2 from "../assets/service2.png";
import service3 from "../assets/service3.png";
import { IoLogoVimeo } from "react-icons/io5";
import Review from './Review';
import Logos from './Logos';

function Home() {

    const aboutCharityservice = [
      {
        logo: service1,
        service: "Develop and Lead",
        description:
          "Duis il odio amet nibh vulp. Morbi accumsan ipsuy velia uctor. Class aptent.",
      },
      {
        logo: service2,
        service: "Individual Donors",
        description:
          "Duis il odio amet nibh vulp. Morbi accumsan ipsuy velia uctor. Class aptent.",
      },
      {
        logo: service3,
        service: "Provide a Range",
        description:
          "Duis il odio amet nibh vulp. Morbi accumsan ipsuy velia uctor. Class aptent.",
      },
    ];
 const navigate = useNavigate();
 const onclick=(el)=>{
    console.log(el)
        navigate(`/${el}`)
    }
  return (
    <div className="flex flex-col md:gap-18">
      <div className="relative w-full min-h-[40vh] md:min-h-fit lg:min-h-[100vh] overflow-hidden">
        <img
          src={bgForAbout}
          alt="Background"
          className="w-full h-[50vh] lg:h-[100vh]  object-top "
        />
        <div className="absolute top-0  bg-black/40 w-full h-full flex flex-col justify-end px-4 lg:px-36">
          <div className="border-b-4 border-white pb-6 lg:pb-14">
            <p className="text-3xl md:text-[2rem] font-bold text-white">
              We Help Children Stay Safe, Healthy and Learning
            </p>
          </div>
          <div className="flex gap-4 items-center py-6 text-white">
            <button onClick={() => onclick("aboutus")}>About Us</button>
            <span>-</span>
            <button onClick={() => onclick("contactus")}>Contact Us</button>
          </div>
        </div>
      </div>
      {/* after hero section */}
      <div className="flex flex-col gap-2 justify-center items-center uppercase text-center px-10 md:px-20 lg:px-44">
        <IoLogoVimeo className="text-4xl text-[#ff3636]" />
        <span className="text-[#999999]  font-bold">Charity Services</span>
        <p className="text-[#212529]  text-2xl md:text-[2.5rem] font-semibold">
          We're Mind, the Mental Health Charity
        </p>
      </div>
      <div className="flex flex-col lg:flex-row px-10 md:px-24 gap-12 py-12 ">
        <div className="flex flex-col justify-evenly  gap-16">
          {aboutCharityservice.map((item, i) => (
            <div
              className="flex flex-col  items-start md:items-center  md:flex-row gap-4 md:gap-12 transition-all duration-300 ease-linear hover:-translate-y-3"
              key={i}
            >
              <div className="h-[6.25rem] aspect-square rounded-full">
                <img
                  src={item.logo}
                  className=" h-full aspect-square rounded-full object-cover"
                />
              </div>
              <div className="flex flex-col gap-3">
                <h3 className="font-bold text-2xl leading-5 text-[#212529]">
                  {item.service}
                </h3>
                <p className="text-[#555] font-normal leading-7">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
        <img
          src="https://winsfolio.net/html/orphan/assets/img/charity-8.jpg"
          className="flex  lg:w-1/2 rounded-4xl "
        />
      </div>
      {/* reviews */}
      <div className="flex flex-col gap-2 justify-center items-center uppercase text-center pt-96 md:pt-64 lg:pt-0 md:px-44">
        <IoLogoVimeo className="text-4xl text-[#ff3636]" />
        <span className="text-[#999999]  font-bold">
          Testimonials & Stories
        </span>
        <p className="text-[#212529] text-2xl md:text-[2.5rem] font-semibold">
          16+ Million Reviews
        </p>
        <Review />
      </div>
      <div className="pb-12">
        <Logos />
      </div>
    </div>
  );
}

export default Home;