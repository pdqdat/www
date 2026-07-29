import { Outlet } from "react-router";
import Footer from "./Footer";

const Layout = () => {
    return (
        <>
            <main style={{ flex: 1, display: "flex", flexDirection: "column" }}>
                <Outlet />
            </main>
            <Footer />
        </>
    );
};

export default Layout;
