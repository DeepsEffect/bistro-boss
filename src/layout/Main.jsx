import { Outlet } from "react-router-dom";

const Main = () => {
    return (
        <div>
            <h2>Hello world</h2>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;