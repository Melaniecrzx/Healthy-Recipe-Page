import { Outlet, useLocation } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import ScrollToTop from "../components/ui/ScrollToTop";
import { AnimatePresence } from "framer-motion";

export default function Main() {
    const location = useLocation();
    return (
        <>
            <ScrollToTop />
            <Header />
            <AnimatePresence mode="wait">
                <Outlet key={location.pathname}/>
            </AnimatePresence>

            <Footer />
        </>
    )

}