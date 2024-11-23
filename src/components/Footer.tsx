"use client";

import { Mail, Phone, MapPin, Instagram, Facebook, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-neutral-900 text-white py-12">
            <div className="container mx-auto px-6 max-w-7xl">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {/* Section 1 : À propos */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-lg font-black uppercase">blocx solutions</h4>
                        <p className="text-sm text-muted-foreground">
                            une solution modulaire innovante pour les installations électriques
                            et informatiques. Conçu pour s'adapter à vos besoins, Blocx offre robustesse,
                            flexibilité et ergonomie.
                        </p>
                    </div>

                    {/* Section 2 : Contact */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-lg font-semibold">Contact</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2 text-sm">
                                <Mail className="w-4 h-4 text-white" />
                                contact@blocx.com
                            </li>
                            <li className="flex items-center gap-2 text-sm">
                                <Phone className="w-4 h-4 text-white" />
                                +33 1 23 45 67 89
                            </li>
                            <li className="flex items-center gap-2 text-sm">
                                <MapPin className="w-4 h-4 text-white" />
                                123 Rue de l'Innovation, 75001 Paris, France
                            </li>
                        </ul>
                    </div>

                    {/* Section 3 : Réseaux sociaux */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-lg font-semibold">Suivez-nous</h4>
                        <div className="flex gap-4">
                            <a href="#" className="text-white hover:text-white">
                                <Instagram className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-white hover:text-white">
                                <Facebook className="w-6 h-6" />
                            </a>
                            <a href="#" className="text-white hover:text-white">
                                <Twitter className="w-6 h-6" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="mt-10 border-t border-neutral-700 pt-6 text-center text-sm text-muted-foreground">
                    © {new Date().getFullYear()} Blocx. Tous droits réservés.
                </div>
            </div>
        </footer>
    );
};

export default Footer;
