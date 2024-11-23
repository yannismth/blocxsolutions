"use client";
import { motion } from "framer-motion";

const StyledText = () => {
    const words = [
        { text: "Blocx", bold: true },
        { text: "est", bold: false },
        { text: "une", bold: false },
        { text: "solution", bold: true },
        { text: "modulaire", bold: true },
        { text: "innovante,", bold: false },
        { text: "adaptée", bold: false },
        { text: "aux", bold: false },
        { text: "installations", bold: true },
        { text: "batteries", bold: true },
    ];

    return (
        <div className="flex items-center justify-center min-h-screen">
            <h2 className="text-left pl-24 max-w-[1152px] flex flex-wrap uppercase mx-auto text-[#000] lg:text-[40px] lg:leading-[1.25] md:leading-[28px] leading-[24px] md:text-3xl text-[22px] font-sans font-normal">
                {words.map((word, index) => (
                    <motion.div
                        key={index}
                        className="flex relative items-center"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }} // Disparaît rapidement vers le haut
                        viewport={{
                            once: false, // Réactive l'animation à chaque entrée dans le viewport
                            amount: 0.2, // Déclenche à 20% de visibilité
                        }}
                        transition={{
                            delay: index * 0.2, // Décale chaque mot de 0.2s
                            duration: 0.5, // Durée d’entrée
                            exit: { delay: 0 }, // Disparition rapide
                        }}
                    >
                        <span className="mr-3 relative">
                            {/* Version "fantôme" */}
                            <span
                                className={`absolute opacity-[0.3] ${
                                    word.bold ? "font-bold" : "font-normal"
                                }`}
                            >
                                {word.text}
                            </span>
                            {/* Version visible */}
                            <span
                                className={`${
                                    word.bold ? "font-bold" : "font-normal"
                                }`}
                            >
                                {word.text}
                            </span>
                        </span>
                    </motion.div>
                ))}
            </h2>
        </div>
    );
};

export default StyledText;
