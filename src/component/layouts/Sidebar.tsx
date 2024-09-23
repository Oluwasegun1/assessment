/* eslint-disable @typescript-eslint/ban-types */
/* eslint-disable @typescript-eslint/no-unused-vars */
// import { useState } from "react";
import bellSimple from "../../assets/BellSimple.svg";
import money from "../../assets/Money.svg";
import tag from "../../assets/Tag.svg";
import lock from "../../assets/Lock.svg";
import user from "../../assets/User.svg";
import cloud from "../../assets/Cloud.svg";
import users from "../../assets/Users.svg";
import SignOut from "../../assets/SignOut.svg";

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
        { name: "Users & Roles", icon: users, specialColor: true },
        { name: "Backup", icon: cloud },
      ],
    },
  ];

  return (
    <div className="w-[200px] fixed top-[100px] bottom-0 left-[20px] bg-white p-5 rounded-md shadow-md flex flex-col justify-between">
      <div className="w-full">
        <div className="text-lg font-extrabold mb-4">Settings</div>
        <div>
          {menuList.map((menu, key) => (
            <div key={key} className="min-h-[300px] mt-5 flex flex-col gap-y-6">
              {menu.items.map((option, optionKey) => (
                <div
                  key={optionKey}
                  className="flex gap-x-[10px] text-xs text-[#94A3B8] items-center p-[10px] rounded-md"
                >
                  <img
                    src={option.icon}
                    alt={option.name}
                    className="h-5 w-5"
                  />
                  <span
                    className={`text-sm ${
                      option.specialColor ? "text-[#0D6EFD]" : "text-[#94A3B8]"
                    }`}
                  >
                    {option.name}
                  </span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>

      <div className="flex items-center cursor-pointer mt-8 hover:bg-gray-200 rounded-md border-2 border-color-black p-2 gap-1">
        <img src={SignOut} alt="Sign Out" className="h-6 w-6 mr-2" />
        <span className="text-xs">Back to Dashboard</span>
      </div>
    </div>
  );
};

export default Sidebar;
