import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        // Extraire les données du corps de la requête
        const { company, email, phone, message } = await req.json();

        // Vérification des champs obligatoires
        if (!email || !message) {
            return new Response(
                JSON.stringify({ error: "Email et message sont obligatoires" }),
                { status: 400 }
            );
        }

        // Envoi de l'email avec les données utilisateur
        const data = await resend.emails.send({
            from: 'Acme <onboarding@resend.dev>', // Adresse vérifiée dans Resend
            to: ['delivered@resend.dev'], // Adresse où vous recevez les emails
            subject: `Nouvelle demande de contact de ${company || "un client"}`,
            react: EmailTemplate({
                firstName: company || "Nom non spécifié",
                email,
                phone: phone || "Non spécifié",
                message,
            }),
        });

        return new Response(JSON.stringify(data), { status: 200 });
    } catch (error) {
        console.error("Erreur lors de l'envoi de l'email :", error);
        return new Response(
            JSON.stringify({ error: "Erreur lors de l'envoi de l'email." }),
            { status: 500 }
        );
    }
}
