// import { useState } from "react";
import bellSimple from "../assets/BellSimple.svg";
import money from "../assets/Money.svg";
import tag from "../assets/Tag.svg";
import lock from "../assets/Lock.svg";
import user from "../assets/User.svg";
import cloud from "../assets/Cloud.svg";
import users from "../assets/Users.svg";
import SignOut from "../assets/SignOut.svg";

const Sidebar = () => {
  const menuList = [
    {
      group: "Settings",
      items: [
        { name: "Account", icon: user },
        { name: "Security", icon: lock },
        { name: "Notification", icon: bellSimple },
        { name: "Pricing", icon: money },
        { name: "Sales", icon: tag },
        { name: "Users & Roles", icon: users },
        { name: "Backup", icon: cloud },
      ],
    },
  ];

  return (
    <div className="flex flex-col fixed justify-between w-[224px] max-h-screen px-2 bg-white py-0 pb-20 rounded-[6px] ">
      <div className="w-full">
        <div className="text-lg font-extrabold mb-4">Settings</div>
        <div>
          {menuList.map((menu, key) => (
            <div key={key} className="mb-4">
              {menu.items.map((option, optionKey) => (
                <div
                  key={optionKey}
                  className="flex items-center gap-2 p-2 mb-2 cursor-pointer hover:bg-gray-200 rounded-md"
                >
                  <img
                    src={option.icon}
                    alt={option.name}
                    className="h-5 w-5"
                  />
                  <span className="text-[#94A3B8] text-sm">{option.name}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-start cursor-pointer mt-28 hover:bg-gray-200 rounded-md border border-color-black gap-1">
        <img src={SignOut} alt="Sign Out" className="h-6 w-6 mr-2" />
        <span>Back to Dashboard</span>
      </div>
    </div>
  );
};

export default Sidebar;
