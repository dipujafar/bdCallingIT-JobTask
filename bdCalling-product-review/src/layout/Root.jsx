import { Outlet } from "react-router-dom";
import Navbar from "../shaerd/Navbar";
import Footer from "../shaerd/Footer";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;
