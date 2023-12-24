import Navbar from "../header/Navbar";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div className="sm:w-4/5 sm:mx-auto sm:my-0 w-full">
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Root;
