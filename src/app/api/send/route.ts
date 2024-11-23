import { EmailTemplate } from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
    try {
        // Extraire les données envoyées dans le corps de la requête
        const { company, email, phone, message } = await req.json();

        // Vérifier que les champs obligatoires sont remplis
        if (!email || !message) {
            return new Response(
                JSON.stringify({ error: "Les champs 'email' et 'message' sont obligatoires." }),
                { status: 400 }
            );
        }

        // Envoi de l'email avec les informations utilisateur
        const emailData = await resend.emails.send({
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

        // Réponse en cas de succès
        return new Response(JSON.stringify(emailData), { status: 200 });
    } catch (error) {
        console.error("Erreur lors de l'envoi de l'email :", error);

        // Réponse en cas d'erreur
        return new Response(
            JSON.stringify({ error: "Erreur lors de l'envoi de l'email. Veuillez réessayer." }),
            { status: 500 }
        );
    }
}
