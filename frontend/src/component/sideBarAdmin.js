
import { useState } from "react";
import { RiHomeHeartFill } from "react-icons/ri"
import { HiUserGroup } from "react-icons/hi2";
import { FaUserTie } from "react-icons/fa";
import { MdRestaurantMenu } from "react-icons/md";
import { GiTable } from "react-icons/gi";


const Sidebar = () => {
  const [open, setOpen] = useState(true);
  const Menus = [
    { title: "Dashboard", icon : <RiHomeHeartFill /> },
    { title: "Pegawai", icon: <HiUserGroup/> },
    { title: "Profile", icon: <FaUserTie />, gap: true },
    { title: "Menu", icon: < MdRestaurantMenu /> },
    { title: "Table", icon: <GiTable /> },
    // { title: "Profile", icon: <FaUserTie />, gap: true },
    
  ];

  return (
    <div className="flex">
      <div
        className={` ${
          open ? "w-72" : "w-20 "
        } bg-dark-purple h-screen p-5  pt-8 relative duration-300`}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpH1wfmVFpNmuskBB4MsO72BdkE4ujg3GJ2PohSDflpjq4B3xaag8j65CWNLBW9fWnGG0&usqp=CAU"
          className={`absolute cursor-pointer -right-3 top-9 w-7 border-dark-purple
           border-2 rounded-full  ${!open && "rotate-180"}`}
          onClick={() => setOpen(!open)}
        />
        <div className="flex gap-x-4 items-center">
          <img
            src="./src/assets/logo.png"
            className={`cursor-pointer duration-500 ${
              open && "rotate-[360deg]"
            }`}
          />
          <h1
            className={`text-white origin-left font-medium text-xl duration-200 ${
              !open && "scale-0"
            }`}
          >
            Designer
          </h1>
        </div>
        <ul className="pt-6">
          {Menus.map((Menu, index) => (
            <li
              key={index}
              className={`flex  rounded-md p-2 cursor-pointer hover:bg-light-white text-gray-300 text-sm items-center gap-x-4 
              ${Menu.gap ? "mt-9" : "mt-2"} ${
                index === 0 && "bg-light-white"
              } `}
            >
              <div className="text-2xl" >{Menu.icon}</div>
              <a class="nav-link" href="/user"><span className={`${!open && "hidden"} origin-left duration-200`}>
                {Menu.title}
              </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
  
      <div className="h-screen flex-1 p-7">
        <h1 className="text-2xl font-semibold ">Home Page</h1>
      </div>

      
      
    </div>

    

    
  );
};

export default Sidebar;