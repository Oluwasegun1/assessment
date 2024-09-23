import Navbar from "./component/layouts/Navbar";

import "./App.css";
import "./index.css";
import AppLayout from "./component/AppLayout";

import Settings from "@/component/mainpage/Layout";

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
