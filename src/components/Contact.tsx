"use client";

import { useState } from "react";
import { MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";

export const Contact = () => {
    const [formData, setFormData] = useState({
        company: "",
        email: "",
        phone: "",
        message: "",
    });
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormData((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setLoading(true);
        setError("");
        setSuccess(false);

        try {
            const response = await fetch("http://localhost:3000/api/send", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
        
            if (response.ok) {
                setSuccess(true);
                setFormData({ company: "", email: "", phone: "", message: "" });
            } else {
                const errorData = await response.json();
                console.error("Erreur API :", errorData);
                setError(errorData.error || "Une erreur est survenue");
            }
        } catch (err) {
            console.error("Erreur Fetch :", err);
            setError("Impossible d'envoyer le message pour le moment.");
        };
        };

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
                                    Intéressé par les prix et les configurations ? Remplissez le formulaire ci-dessous et notre équipe vous contactera rapidement.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Section droite : Formulaire */}
                    <div className="justify-center flex items-center">
                        <form
                            onSubmit={handleSubmit}
                            className="rounded-md w-full flex flex-col border p-8 gap-4 shadow-md"
                        >
                            <p className="text-xl font-semibold text-center">
                                Obtenez votre devis
                            </p>

                            {success && (
                                <p className="text-green-600 text-center">
                                    Votre message a été envoyé avec succès !
                                </p>
                            )}

                            {error && (
                                <p className="text-red-600 text-center">
                                    {error}
                                </p>
                            )}

                            <div className="grid w-full max-w-xl items-center gap-1">
                                <Label htmlFor="company">Nom de l'entreprise</Label>
                                <Input
                                    id="company"
                                    type="text"
                                    placeholder="Votre entreprise"
                                    value={formData.company}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="grid w-full max-w-xl items-center gap-1">
                                <Label htmlFor="email">Adresse email</Label>
                                <Input
                                    id="email"
                                    type="email"
                                    placeholder="exemple@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="grid w-full max-w-xl items-center gap-1">
                                <Label htmlFor="phone">Numéro de téléphone</Label>
                                <Input
                                    id="phone"
                                    type="tel"
                                    placeholder="Votre numéro"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="grid w-full max-w-xl items-center gap-1">
                                <Label htmlFor="message">Votre demande</Label>
                                <Input
                                    id="message"
                                    placeholder="Indiquez vos besoins ou questions"
                                    value={formData.message}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <Button
                                type="submit"
                                className="gap-4 w-full"
                                disabled={loading}
                            >
                                {loading ? "Envoi..." : "Envoyer la demande"}{" "}
                                <MoveRight className="w-4 h-4" />
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};
