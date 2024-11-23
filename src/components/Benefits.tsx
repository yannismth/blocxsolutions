import { Brain, Zap, Shield } from "lucide-react"; // Import des icônes nécessaires

const Benefits = () => {
    const advantages = [
        {
            icon: <Brain className="w-6 h-6 text-primary" />,
            title: "Modulaire",
            description:
                "Blocx s'adapte parfaitement à vos besoins grâce à sa structure flexible et évolutive.",
        },
        {
            icon: <Zap className="w-6 h-6 text-primary" />,
            title: "Installation rapide",
            description:
                "Nos solutions permettent une installation simple et rapide, réduisant les coûts et le temps de déploiement.",
        },
        {
            icon: <Shield className="w-6 h-6 text-primary" />,
            title: "Sécurité renforcée",
            description:
                "Blocx est conçu pour garantir la sécurité de vos installations dans tous les environnements.",
        },
    ];

    return (
        <section id="benefits" className="w-full py-16 bg-background">
            <div className="container mx-auto px-4 max-w-7xl">
                {/* Titre */}
                <div className="text-center space-y-4 pb-6 mx-auto">
                    <h2 className="text-sm text-primary font-mono font-medium tracking-wider uppercase">
                        Pourquoi Blocx ?
                    </h2>
                    <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
                        Une solution adaptée à vos besoins.
                    </h3>
                </div>
                {/* Grille des avantages */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                    {advantages.map((advantage, index) => (
                        <div
                            key={index}
                            className="rounded-lg border text-card-foreground bg-background border-none shadow-none p-6 space-y-4"
                        >
                            {/* Icône */}
                            <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                {advantage.icon}
                            </div>
                            {/* Titre */}
                            <h3 className="text-xl font-semibold">
                                {advantage.title}
                            </h3>
                            {/* Description */}
                            <p className="text-muted-foreground">
                                {advantage.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Benefits;
