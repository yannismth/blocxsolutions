"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, ArrowUp, MoveRight, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "./ui/badge";

const Hero = () => {
    const [titleNumber, setTitleNumber] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false); // État pour le scroll

    const titles = ["modulaire", "innovantes", "polyvalentes", "ergonomiques"];

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setTitleNumber((prev) => (prev === titles.length - 1 ? 0 : prev + 1));
        }, 2000);
        return () => clearTimeout(timeoutId);
    }, [titleNumber]);

    // Listener pour le scroll
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0); // Change l'état si scroll > 0
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <div className="w-full">
            <div className="container mx-auto px-6">
                <div className="flex flex-col items-center justify-center gap-8 py-20 lg:py-40">
                    {/* CTA Button */}
                    <div>
                        <Badge className="flex gap-2" variant={"secondary"}>
                            Découvrez Blocx <ArrowRight size={15} />
                        </Badge>
                    </div>

                    {/* Hero Title */}
                    <div className="flex flex-col gap-4">
                        <h1 className="text-5xl md:text-7xl max-w-2xl tracking-tighter text-center font-bold">
                            <span className="text-primary font-thin uppercase">Blocx <span className="">solutions</span></span>
                            <span className="relative flex w-full justify-center overflow-hidden text-center md:pb-4 md:pt-1">
                                &nbsp;
                                {titles.map((title, index) => (
                                    <motion.span
                                        key={index}
                                        className="absolute font-black uppercase text-primary"
                                        initial={{ opacity: 0, y: "-100%" }}
                                        transition={{ type: "spring", stiffness: 50 }}
                                        animate={
                                            titleNumber === index
                                                ? { y: 0, opacity: 1 }
                                                : { y: titleNumber > index ? -150 : 150, opacity: 0 }
                                        }
                                    >
                                        {title}
                                    </motion.span>
                                ))}
                            </span>
                        </h1>

                        <p className="text-lg md:text-xl leading-relaxed tracking-tight text-muted-foreground max-w-2xl text-center">
                            Blocx est la solution idéale pour vos installations électriques et informatiques.
                            Modulaire, évolutif et robuste, il s'adapte à tous vos besoins.
                        </p>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-row gap-3">
                        <Button size="lg" className="gap-4" variant="outline">
                            Nous Contacter <PhoneCall className="w-4 h-4" />
                        </Button>
                        <Button size="lg" className="gap-4">
                            En savoir plus <MoveRight size={20} />
                        </Button>
                    </div>
                </div>
            </div>

            {/* Arrow Up */}
            <div className="flex justify-center">
                <motion.div
                    className="border border-2 p-4 border-black rounded-full"
                    animate={{ rotate: isScrolled ? 180 : 0 }} // Rotation conditionnée
                    transition={{ duration: 0.5, ease: "easeInOut" }} // Animation fluide
                >
                    <ArrowUp size={50} />
                </motion.div>
            </div>
        </div>
    );
};

export default Hero;
