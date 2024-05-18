import { Outlet } from "react-router-dom";
import Nav from "../pages/Shared/Nav/Nav";
import Footer from "../pages/Shared/Footer/Footer";

const Main = () => {
  return (
    <div>
      <Nav />
      <div className="min-h-[calc(100svh-64px)]">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
