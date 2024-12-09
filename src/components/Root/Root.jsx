import { Outlet } from "react-router-dom";
import NavBar from "../SharedPages/NavBar";
import Footer from "../SharedPages/Footer";

const Root = () => {
    return (
        <div className="bg-white">
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;