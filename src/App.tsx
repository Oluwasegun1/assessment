import Navbar from "./component/Navbar";

import "./App.css";
import "./index.css";
import AppLayout from "./component/AppLayout";
// import Tab from "./component/mainpage/Tab";
import Settings from "@/component/mainpage/Settings";

function App() {
  return (
    <div className="bg-[#F0F2F5] h-screen">
      <Navbar />
      <AppLayout>
        <Settings />
      </AppLayout>
    </div>
  );
}

export default App;
