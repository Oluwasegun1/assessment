import Sidebar from "./Sidebar";
// import Settings from "../component/mainpage/Settings";

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const AppLayout = ({ children }: any) => {
  return (
    <div className=" px-6 ">
      <Sidebar />

      <div className=" pl-[240px]"> {children}</div>
    </div>
  );
};

export default AppLayout;
