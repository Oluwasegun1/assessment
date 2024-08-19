import { FunnelSimple, MagnifyingGlass } from "@phosphor-icons/react";

const Usertable = () => {
  return (
    <div>
      <div>
        <div className="relative flex flex-row">
          <div className="relative p-2">
            <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center p-2">
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
          <div className="flex items-center p-2 border border-red">
            <span className="">
              <FunnelSimple size={16} />
            </span>
            <span className="ml-2">Filter</span>
          </div>
        </div>
        <div className="flex flex-row ">
          <input
            type="text"
            placeholder="Niew role"
            className="flex flex-col rounded md bg blue-700"
          />
        </div>
      </div>
    </div>
  );
};

export default Usertable;
