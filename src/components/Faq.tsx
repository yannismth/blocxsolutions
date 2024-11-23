"use client";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const FAQ = () => {
    const questions = [
        {
            id: 1,
            question: "Qu'est-ce que Blocx ?",
            answer:
                "Blocx est une solution modulaire innovante conçue pour les installations électriques et informatiques, adaptée à divers besoins.",
        },
        {
            id: 2,
            question: "Quels sont les avantages de Blocx ?",
            answer:
                "Blocx est robuste, évolutif et polyvalent. Il permet une installation rapide et une maintenance simplifiée grâce à sa conception modulaire.",
        },
        {
            id: 3,
            question: "Comment puis-je personnaliser ma configuration Blocx ?",
            answer:
                "Vous pouvez choisir parmi plusieurs configurations, comme Chantier Batteries, Armoire Batteries, ou Baie Informatique. Chaque solution est adaptable.",
        },
        {
            id: 4,
            question: "Blocx est-il compatible avec des installations existantes ?",
            answer:
                "Oui, Blocx est conçu pour s'intégrer facilement dans des systèmes existants grâce à sa flexibilité et ses options de personnalisation.",
        },
    ];

    return (
        <section id="faq" className="py-16">
            <div className="container mx-auto px-6 max-w-7xl">
                {/* Titre */}
                <div className="text-center space-y-4 pb-6">
                    <h2 className="text-sm text-primary font-mono font-medium tracking-wider uppercase">
                        FAQ
                    </h2>
                    <h3 className="mx-auto mt-4 max-w-xs text-3xl font-semibold sm:max-w-none sm:text-4xl md:text-5xl">
                        Questions Fréquemment Posées
                    </h3>
                </div>
                {/* Accordion */}
                <Accordion type="single" collapsible className="space-y-4">
                    {questions.map((item) => (
                        <AccordionItem key={item.id} value={`item-${item.id}`}>
                            <AccordionTrigger className="text-lg font-medium">
                                {item.question}
                            </AccordionTrigger>
                            <AccordionContent className="text-muted-foreground">
                                {item.answer}
                            </AccordionContent>
                        </AccordionItem>
                    ))}
                </Accordion>
                <p className="my-10 text-center">Still have questions? Email us at <a href="#" className="underline">Rmat67@icloud.com</a></p>
            </div>
        </section>
    );
};

export default FAQ;
