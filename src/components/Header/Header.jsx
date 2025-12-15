import logo from "../../../public/assets/images/logo.svg";
import menuIcon from "../../../public/assets/images/icon-hamburger-menu.svg";
import { useEffect, useState, useRef } from "react";
import Button from "../ui/Button";
import { Link, NavLink } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";

export default function Header() {
    const [navOpen, setNavOpen] = useState(false);
    const navlinks = [
        { id: 1, label: 'Home', path: '/' },
        { id: 2, label: 'About', path: '/about' },
        { id: 3, label: 'Recipes', path: '/recipes' },
    ]

    const navContainerRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (navContainerRef.current && !navContainerRef.current.contains(e.target)) {
                setNavOpen(false);
            }
        };
        if (navOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        }
    }, [navOpen]);

    return (

        <nav className="flex flex-col gap-4">
            <div className="flex justify-between px-4 py-5 md:p-8 relative">
                <NavLink to="/">
                    <img src={logo} alt="Healthy Recipe Logo" />
                </NavLink>

                <div ref={navContainerRef} className="lg:hidden">
                    <button className="bg-neutral-300 p-3 rounded-sm" onClick={() => setNavOpen(!navOpen)} >
                        <img src={menuIcon} alt="Menu Icon" />
                    </button>

                    <AnimatePresence>
                        {navOpen && (
                            <motion.div
                                className={`bg-white absolute rounded-lg top-20 right-4 w-full max-w-[343px] md:max-w-[704px] z-50 p-2`}
                                initial={{ opacity: 0, y: -20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20, scale: 0.95 }}
                                transition={{ duration: 0.2, ease: "easeInOut" }}
                            >
                                <div className="flex flex-col">
                                    <ul>
                                        {navlinks.map((navlink) => (
                                            <li key={navlink.id} className="cursor-pointer px-2 py-3 font7">
                                                <NavLink to={`${navlink.path}`} onClick={() => setNavOpen(false)}>
                                                    {navlink.label}
                                                </NavLink>
                                            </li>

                                        ))}
                                    </ul>

                                    <Link to="/recipes">
                                        <Button className="w-full">Browse recipes</Button>
                                    </Link>
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>


                <ul className="hidden lg:flex gap-10">
                    {navlinks.map((navlink) => (
                        <li key={navlink.id} className="relative group cursor-pointer text-neutral-900 ">
                            <NavLink to={`${navlink.path}`}>
                                {navlink.label}
                            </NavLink>
                            <hr className="border-orange-500 border-2 rounded-sm absolute w-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></hr>
                        </li>

                    ))}
                </ul>
                <Link to="/recipes" className="hidden lg:block">
                    <Button className="w-full">Browse recipes</Button>
                </Link>



            </div>
            <hr className="border-t border-neutral-200 w-sfull" />
        </nav>
    )
}