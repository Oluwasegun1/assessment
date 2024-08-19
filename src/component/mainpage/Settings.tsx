/* eslint-disable @typescript-eslint/no-explicit-any */
// /* eslint-disable @typescript-eslint/no-explicit-any */

// const Breadcrumb = ({ items }: any) => (
//   <nav className=" text-sm text-gray-500 mb-2">
//     {items.map((item:any, index:any) => (
//       <span key={index}>
//         {index > 0 && <span className="mx-2">/</span>}
//         {item}
//       </span>
//     ))}
//   </nav>
// );

// const UsersAndRoles = () => (
//   <div className="p-4 bg-gray-100">
//     <Breadcrumb items={['Settings', 'Users & Roles Settings']} />
//     <h1 className="text-2xl font-semibold text-gray-800">Users & Roles</h1>
//     <p className="text-sm text-gray-500">Manage all users in your business</p>
//   </div>
// );

// export default UsersAndRoles;
import Tab from "./Tab";

const Breadcrumb = ({ items }:any) => (
  <nav className="text-sm text-gray-500 mb-2">
    {items.map((item:any, index:any) => (
      <span key={index}>
        {index > 0 && <span className="mx-2">/</span>}
        {item}
      </span>
    ))}
  </nav>
);

const UsersAndRoles = () => (
  <div className="p-4 bg-gray-100">
    <Breadcrumb items={['Settings', 'Users & Roles Settings']} />
    <h1 className="text-2xl font-semibold text-gray-800">Users & Roles</h1>
    <p className="text-sm text-gray-500">Manage all users in your business</p>
    <Tab /> {/* Render the Tab component here */}
  </div>
);

export default UsersAndRoles;
