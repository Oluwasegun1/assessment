import logo from "../../assets/logo.jpg";
import { useState } from "react";
import bellicon from "../../assets/Bellicon.svg";
import gear from "../../assets/Gear.svg";
import question from "../../assets/Question.svg";
import wallet from "../../assets/Wallet.svg";
import { MagnifyingGlass } from "@phosphor-icons/react";
import profile from "../../assets/profile.svg";

const iconsArray = [
  { name: "Notifications", icon: bellicon },
  { name: "Wallet", icon: wallet },
  { name: "Inquiries", icon: question },
  { name: "Settings", icon: gear },
];

const Navbar = () => {
  const [searchTerm] = useState("");

  const filteredIcons = iconsArray.filter((icon) =>
    icon.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="h-[80px] px-[50px] py-[20px] flex items-center gap-8 justify-between bg-white shadow-md fixed left-0 right-0">
      <nav className="flex items-center justify-between max-w-7xl mx-auto w-full">
        <div className="min-h-[50px] w-1/2 flex items-center gap-x-8">
          <img
            className="h-10 w-auto"
            src={logo}
            alt="logo"
            width={40}
            height={40}
          />
          <form className="flex-grow">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <MagnifyingGlass size={16} className="text-gray-500" />
              </div>
              <input
                type="search"
                id="default-search"
                className="block w-full px-4 py-2 pl-10 text-sm border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500"
                placeholder="search here..."
                required
              />
            </div>
          </form>
        </div>
        <div className="min-h-[50px] w-max flex items-center gap-x-8 text-[#647995]">
          <ul className="flex space-x-4">
            {filteredIcons.map((item, id) => (
              <li
                key={id}
                className="flex flex-col items-center cursor-pointer hover:text-blue-500"
              >
                <img
                  src={item.icon}
                  alt={item.name}
                  className="h-[15px] w-[15px]"
                />
                <span className="text-sm">{item.name}</span>
              </li>
            ))}
          </ul>

          {/* Replace Dropdown with Profile Picture */}
          <div className="flex items-center">
            <img
              className="w-10 h-10 rounded-full"
              src={profile}
              alt="Profile"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
