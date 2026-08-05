import { Outlet } from "react-router";

import Footer from "@comp/Footer";
import BackgroundOrb from "@comp/BackgroundOrb";
import CustomCursor from "@ui/CustomCursor";
import MouseRibbon from "@ui/MouseRibbon";

const Layout = () => {
    return (
        <>
            <CustomCursor />
            {/* <MouseRibbon /> */}
            <BackgroundOrb />
            <main style={{ flex: 1, display: "flex", flexDirection: "column", position: "relative", zIndex: 10 }}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
