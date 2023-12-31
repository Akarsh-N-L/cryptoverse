import { Layout, Typography, Space } from "antd";
import { Navbar } from "./components";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div className=" font-sans">
        <Navbar />
        <div className="flex justify-center w-full mt-10">
          <div className="flex justify-center items-center max-w-6xl">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
