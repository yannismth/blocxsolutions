"use client";
import { useState } from "react";
import { motion } from "framer-motion"; // Import de Framer Motion
import { Button } from "./ui/button";
import { Mail, Menu, X } from "lucide-react";

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Variants pour animer le menu
    const menuVariants = {
        hidden: { opacity: 0, y: -50 },
        visible: { opacity: 1, y: 0 },
        exit: { opacity: 0, y: -50 },
    };

    return (
        <>
        <header className="relative sticky top-0 z-50 py-4 bg-background/60 backdrop-blur">
            <div className="container mx-auto flex items-center justify-between lg:justify-around xl:justify-between px-6 xl:px-20">
                {/* Logo */}
                <div>
                    <h1 className="uppercase font-black text-lg sm:text-2xl"><span>Blocx</span></h1>
                </div>
                {/* Hamburger menu for mobile */}
                <div className="md:hidden flex">
                    <button
                        aria-label="Toggle Menu"
                        className="text-gray-800 focus:outline-none"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
                {/* Navigation desktop */}
                <div className="hidden md:flex items-center gap-16">
                    <ul className="flex gap-4 lg:gap-8">
                        <li><a href="#product-intro" className="text-sm sm:text-base">À propos</a></li>
                        <li><a href="#configurations" className="text-sm sm:text-base">Configurations</a></li>
                        <li><a href="#benefits" className="text-sm sm:text-base">Avantages</a></li>
                        <li><a href="#faq" className="text-sm sm:text-base">F.A.Q</a></li>
                    </ul>
                    <div className="flex gap-2">
                        <Button variant="outline">Demo</Button>
                        <Button>Contact <Mail /></Button>
                    </div>
                </div>
            </div>
            {/* Mobile Menu */}
            {isMenuOpen && (
                <motion.div
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    variants={menuVariants}
                    transition={{ duration: 0.3 }}
                    className="md:hidden bg-background shadow-lg p-4"
                >
                    <ul className="flex flex-col gap-4">
                        <li><a href="#product-intro" className="text-sm text-gray-800">À propos</a></li>
                        <li><a href="#configurations" className="text-sm text-gray-800">Configurations</a></li>
                        <li><a href="#benefits" className="text-sm text-gray-800">Avantages</a></li>
                        <li><a href="#faq" className="text-sm text-gray-800">F.A.Q</a></li>
                    </ul>
                    <div className="mt-4 flex flex-col gap-2">
                        <Button variant="outline">Demo</Button>
                        <Button>Contact <Mail /></Button>
                    </div>
                </motion.div>
            )}
        </header>
        <hr />
        </>
    );
};

export default Header;
