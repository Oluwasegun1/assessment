// /* eslint-disable @typescript-eslint/no-explicit-any */
// // /* eslint-disable @typescript-eslint/no-explicit-any */

import React from "react";
import Table from "./Table";

// Breadcrumb component definition
type BreadcrumbProps = {
  items: string[];
};

const Breadcrumb: React.FC<BreadcrumbProps> = ({ items }) => (
  <nav className="text-sm text-gray-500 mb-2">
    {items.map((item, index) => (
      <span key={index}>
        {index > 0 && <span className="mx-2">/</span>}
        {item}
      </span>
    ))}
  </nav>
);

// Main UsersAndRoles component
const UsersAndRoles: React.FC = () => {
  return (
    <div>
      <main className="pt-[140px] pl-[210px] pr-[20px] h-screen">
        {/* Breadcrumb */}
        <Breadcrumb items={["Settings", "Users & Roles Settings"]} />

        {/* Page Header */}
        <h2 className="text-2xl font-semibold text-gray-800">Users & Roles</h2>
        <p className="text-xs text-[#94A3B8] mt-2">
          Manage all users in your business
        </p>

        {/* Tab and Table */}
        <div className="mt-8">
          <ul className="flex gap-x-4 mb-6 text-sm">
            <li className="text-[#0D6EFD] border-b border-[#0D6EFD] pb-1">
              Users
            </li>
            <li className="pb-1">Roles</li>
          </ul>
          {/* Render the table component */}
          <Table />
        </div>
      </main>
    </div>
  );
};

export default UsersAndRoles;
