import { Outlet } from "react-router-dom";
import Navbar from "../shaerd/Navbar";
import Footer from "../shaerd/Footer";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="min-h-[calc(100vh-400px)]">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
