import logo from "../assets/logo.jpg";
import avatar from "../assets/Avatar.jpg";
import { useState } from "react";
import bellicon from "../assets/Bellicon.svg";
import gear from "../assets/Gear.svg";
import question from "../assets/Question.svg";
import wallet from "../assets/Wallet.svg";
import { MagnifyingGlass } from "@phosphor-icons/react";

// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "../components/ui/dropdown-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";

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
    <div className="bg-white p-4 mb-[19px]">
      <nav className="flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center space-x-4">
          <img className="h-10 w-auto" src={logo} alt="logo" />
          <div className="relative">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
              <span className="text-gray-500 sm:text-sm">
                <MagnifyingGlass size={16} />
              </span>
            </div>
            <input
              type="text"
              placeholder="search here..."
              className="block w-full rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
            />
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            {filteredIcons.map((item, id) => (
              <li
                key={id}
                className="flex flex-col items-center cursor-pointer hover:text-blue-500"
              >
                <img src={item.icon} alt={item.name} className="h-6 w-6" />
                <span className="text-sm h-">{item.name}</span>
              </li>
            ))}
          </ul>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center">
              <button className="bg-blue-500 text-white px-4 py-2 rounded-md">
                <div className="flex items-center space-x-4 rounded-full">
                  <img
                    className="avatar w-5 h-5 rounded-full"
                    src={avatar}
                    alt="Avatar"
                  />
                </div>
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel>My Account</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>Profile</DropdownMenuItem>
              <DropdownMenuItem>Billing</DropdownMenuItem>
              <DropdownMenuItem>Team</DropdownMenuItem>
              <DropdownMenuItem>Subscription</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
