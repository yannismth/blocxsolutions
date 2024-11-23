"use client";
import { useState } from "react";
import { Battery, Server, Box } from "lucide-react";
import { motion } from "framer-motion";

const Configurations = () => {
    const configurations = [
        {
            id: 1,
            icon: <Battery className="w-6 h-6 text-primary" />,
            title: "Chantier Batteries",
            description:
                "Une solution robuste et modulaire pour répondre aux besoins des chantiers exigeants.",
            image: "/chantier.png",
        },
        {
            id: 2,
            icon: <Server className="w-6 h-6 text-primary" />,
            title: "Armoire Batteries",
            description:
                "Capacité d’assemblage vertical pour maximiser l’espace et garantir une sécurité optimale.",
            image: "/armoire.png",
        },
        {
            id: 3,
            icon: <Box className="w-6 h-6 text-primary" />,
            title: "Salle Informatique",
            description:
                "Une solution performante pour organiser et sécuriser vos équipements informatiques.",
            image: "/demonstration.png",
        },
    ];

    const [activeConfiguration, setActiveConfiguration] = useState(
        configurations[0]
    ); // Configuration active par défaut

    return (
        <section id="configurations" className="py-16 bg-neutral-50">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Titre */}
                <div className="text-center space-y-4 pb-6">
                    <h2 className="text-sm text-primary font-mono font-medium tracking-wider uppercase">
                        Configurations disponibles
                    </h2>
                    <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
                        Adaptez Blocx à vos besoins
                    </h3>
                </div>
                {/* Grille des configurations et image */}
                <div className="grid lg:grid-cols-2 gap-16 items-center my-20">
                    {/* Configurations */}
                    <div className="space-y-8 my-4">
                        {configurations.map((config) => (
                            <button
                                key={config.id}
                                onClick={() =>
                                    setActiveConfiguration(config)
                                } // Change la configuration active
                                className={`flex items-start text-start space-x-4 p-4 rounded-lg ${
                                    activeConfiguration.id === config.id
                                        ? "bg-primary/10 border border-primary"
                                        : "hover:bg-gray-100"
                                }`}
                            >
                                {/* Icône */}
                                <div
    className={`w-16 h-12 flex items-center justify-center rounded-full bg-primary/10 ${
        activeConfiguration.id === config.id ? "scale-100" : ""
    }`}
>
    {config.icon}
</div>
                                {/* Texte */}
                                <div>
                                    <h4
                                        className={`text-xl font-bold ${
                                            activeConfiguration.id ===
                                            config.id
                                                ? "text-primary"
                                                : "text-card-foreground"
                                        }`}
                                    >
                                        {config.title}
                                    </h4>
                                    <p className="text-muted-foreground">
                                        {config.description}
                                    </p>
                                </div>
                            </button>
                        ))}
                    </div>
                    {/* Image associée */}
                    <div className="h-[350px] min-h-[200px] w-full flex items-center justify-center">
                        <motion.img
                            key={activeConfiguration.id} // Change de clé à chaque configuration pour déclencher l'animation
                            src={activeConfiguration.image}
                            alt={activeConfiguration.title}
                            initial={{ opacity: 0, x: 200 }} // Entrée par la droite
                            animate={{ opacity: 1, x: 0 }} // Animation vers la position finale
                            exit={{ opacity: 0, x: 200 }} // Sortie par la droite
                            transition={{
                                duration: 0.5, // Durée de l'animation
                                ease: "easeInOut",
                            }}
                            className="rounded-xl shadow-lg object-cover border"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Configurations;
