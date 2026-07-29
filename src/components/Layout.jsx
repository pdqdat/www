import { Outlet } from "react-router";
import Footer from "./Footer";
import BackgroundOrb from "./BackgroundOrb";
import CustomCursor from "./ui/CustomCursor";

const Layout = () => {
    return (
        <>
            <CustomCursor />
            <BackgroundOrb />
            <main style={{ flex: 1, display: "flex", flexDirection: "column", position: "relative" }}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
