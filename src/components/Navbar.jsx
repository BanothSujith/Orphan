import React from "react";
import { NavLink  } from "react-router-dom";
function Navbar() {
  return (
    <div className=" w-full ">
      <div className="flex justify-center md:justify-between w-full items-center px-4">
        <div className="hidden md:block text-2xl font-bold text-[#383761] w-1/2">Orphan</div>

        <div className="w-full md:px-12 py-1 flex justify-center md:justify-start md:-translate-x-[20%] lg:translate-0 md:text-lg font-medium">
          <div className="flex justify-center items-center gap-3 md:gap-6 border border-white/20 w-fit px-4 md:px-12 py-2 rounded-full bg-[#09fff311] backdrop-blur-3xl  shadow-lg">
            <NavLink
              to="/"
              className={({ isActive  }) =>
                isActive 
                  ? `text-[#020202] hover:text-[#000] transition-colors duration-300`
                  : `text-[#12089e] hover:text-[#000] transition-colors duration-300`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/aboutus"
              className={({ isActive  }) =>
                isActive 
                  ? `text-[#020202] hover:text-[#000] transition-colors duration-300`
                  : `text-[#12089e] hover:text-[#000] transition-colors duration-300`
              }
            >
              AboutUs
            </NavLink>
            <NavLink
              to="/contactus"
              className={({ isActive  }) =>
                isActive 
                  ? `text-[#020202] hover:text-[#000] transition-colors duration-300`
                  : `text-[#12089e] hover:text-[#000] transition-colors duration-300`
              }
            >
              ContactUs
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
