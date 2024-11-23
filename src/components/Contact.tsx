"use client";

import { CalendarIcon, MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export const Contact = () => {
    return (
        <section id="contact" className="w-full py-20 lg:py-40 bg-neutral-50">
            <div className="container max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-10">
                    {/* Section gauche */}
                    <div className="flex flex-col gap-6">
                        <div className="flex flex-col gap-4">
                            <div>
                                <Badge>Contactez-nous</Badge>
                            </div>
                            <div className="flex flex-col gap-2">
                                <h4 className="text-3xl md:text-5xl tracking-tighter max-w-xl text-left font-bold">
                                    Demandez un devis
                                </h4>
                                <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-sm text-left">
                                    Intéressé par les prix et les configurations ? Remplissez le formulaire ci-dessous et notre équipe vous contactera rapidement.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section droite : Formulaire */}
                    <div className="justify-center flex items-center">
                        <div className="rounded-md w-full flex flex-col border p-8 gap-4 shadow-md">
                            <p className="text-xl font-semibold text-center">
                                Obtenez votre devis
                            </p>
                            <div className="grid w-full max-w-xl items-center gap-1">
                                <Label htmlFor="company">Nom de l'entreprise</Label>
                                <Input id="company" type="text" placeholder="Votre entreprise" />
                            </div>
                            <div className="grid w-full max-w-xl items-center gap-1">
                                <Label htmlFor="email">Adresse email</Label>
                                <Input id="email" type="email" placeholder="exemple@email.com" />
                            </div>
                            <div className="grid w-full max-w-xl items-center gap-1">
                                <Label htmlFor="phone">Numéro de téléphone</Label>
                                <Input id="phone" type="tel" placeholder="Votre numéro" />
                            </div>
                            <div className="grid w-full max-w-xl items-center gap-1">
                                <Label htmlFor="message">Votre demande</Label>
                                <Input
                                    id="message"
                                    placeholder="Indiquez vos besoins ou questions"
                                />
                            </div>
                            <Button className="gap-4 w-full">
                                Envoyer la demande <MoveRight className="w-4 h-4" />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
